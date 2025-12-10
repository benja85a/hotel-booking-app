import React, { useState } from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex items-center gap-3 mt-2 cursor-pointer text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex items-center gap-3 mt-2 cursor-pointer text-sm">
      <input
        type="radio"
        name="sortOption"
        checked={selected}
        onChange={() => onChange(label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFlters] = useState(false);

  // estado para filtros
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");

  const roomTypes = [
    "Single Room",
    "Double Room",
    "Suite",
    "Deluxe Room",
    "Family Room",
  ];

  const priceRanges = [
    "0 to 35",
    "35 to 45",
    "45 to 58",
    "58 to 65",
    "65 and above",
  ];

  const sortOptions = [
    "Price: Low to High",
    "Price: High to Low",
    "Newest First",
  ];

  // Manejo de filtros
  const handleRoomTypeChange = (isChecked, type) => {
    setSelectedRoomTypes((prev) =>
      isChecked ? [...prev, type] : prev.filter((t) => t !== type)
    );
  };

  const handlePriceChange = (isChecked, range) => {
    setSelectedPriceRanges((prev) =>
      isChecked ? [...prev, range] : prev.filter((r) => r !== range)
    );
  };

  const handleSortChange = (option) => {
    setSelectedSort(option);
  };

  // función para convertir priceRange a valores numéricos
  const parsePriceRange = (range) => {
    if (range.includes("to")) {
      const [min, max] = range.split("to").map((v) => parseInt(v.trim()));
      return { min, max };
    }
    if (range.includes("above")) {
      const min = parseInt(range.split("and")[0].trim());
      return { min, max: Infinity };
    }
    return { min: 0, max: Infinity };
  };

  // aplicar filtros
  const filteredRooms = roomsDummyData
    .filter((room) => {
      if (selectedRoomTypes.length > 0) {
        return selectedRoomTypes.some((type) =>
          room.roomType.toLowerCase().includes(type.toLowerCase())
        );
      }
      return true;
    })
    .filter((room) => {
      if (selectedPriceRanges.length > 0) {
        return selectedPriceRanges.some((range) => {
          const { min, max } = parsePriceRange(range);
          return room.pricePerNight >= min && room.pricePerNight <= max;
        });
      }
      return true;
    })
    .sort((a, b) => {
      if (selectedSort === "Price: Low to High") return a.pricePerNight - b.pricePerNight;
      if (selectedSort === "Price: High to Low") return b.pricePerNight - a.pricePerNight;
      if (selectedSort === "Newest First") return new Date(b.createdAt) - new Date(a.createdAt);
      return 0;
    });

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div>
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>

        {filteredRooms.map((room) => (
          <div
            className="flex flex-col md:flex-row items-start py-10 gap-5 border-b border-gray-300 last:pb-30 "
            key={room._id}
          >
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="hotel-img"
              title="View Room Details"
              className="w-full md:w-2/5 h-64 object-cover rounded-xl shadow-md cursor-pointer"
            />
            <div className="md:w-1/2 flex flex-col gap-2 ">
              <p className="text-gray-500">{room.cities}</p>
              <p
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                className="text-gray-800 text-3xl font-playfair cursor-pointer"
              >
                {room.roomType}
              </p>
              <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.address}</span>
              </div>
              {/*Room Amenities*/}
              <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5F5]/70"
                  >
                    <img
                      src={facilityIcons[item]}
                      alt={item}
                      className="w-5 h-5"
                    />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              {/* Room Price per night*/}
              <p className="text-xl font-medium text-gray-700">
                ${room.pricePerNight}/night
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* filter */}
      <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16 self-start py-5">
        <div
          className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${
            openFilters && "border-b"
          }`}
        >
          <p className="text-base font-medium text-gray-800">FILTERS</p>
          <div className="text-xs cursor-pointer">
            <span
              onClick={() => setOpenFlters(!openFilters)}
              className="lg:hidden"
            >
              {openFilters ? "HIDE" : "SHOW"}
            </span>
            <span
              onClick={() => {
                setSelectedRoomTypes([]);
                setSelectedPriceRanges([]);
                setSelectedSort("");
              }}
              className="hidden lg:block"
            >
              CLEAR
            </span>
          </div>
        </div>
        <div
          className={`${
            openFilters ? "h-auto" : "h-0 lg:h-auto"
          } overflow-hidden transition-all duration-700 `}
        >
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular filters</p>
            {roomTypes.map((room, index) => (
              <CheckBox
                key={index}
                label={room}
                selected={selectedRoomTypes.includes(room)}
                onChange={handleRoomTypeChange}
              />
            ))}
          </div>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price filters</p>
            {priceRanges.map((range, index) => (
              <CheckBox
                key={index}
                label={range}
                selected={selectedPriceRanges.includes(range)}
                onChange={handlePriceChange}
              />
            ))}
          </div>
          <div className="px-5 pt-5 pb-7">
            <p className="font-medium text-gray-800 pb-2">Sort by</p>
            {sortOptions.map((option, index) => (
              <RadioButton
                key={index}
                label={option}
                selected={selectedSort === option}
                onChange={handleSortChange}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
