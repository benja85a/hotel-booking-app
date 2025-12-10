import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomsDummyData,
  stayInfo,
} from "../assets/assets";
import Booking from "./Booking";
import StarRating from "../components/StarRating";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [MainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, [id]);

  return (
    room && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-start items-center gap-3">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.roomType}{" "}
            <span className="font-inter text-sm text-gray-500">
              ({room.codeName || "Luxury Code"})
            </span>
          </h1>
          <p className="text-xs font-inter py-1.5 px-3 text-3 text-white bg-orange-500 rounded-full">
            Limited Offer
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <StarRating />
          <p className="text-sm text-gray-600">4.8 · 245 reviews</p>
        </div>

        {/* Address */}
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.address || "123 Main Street, Downtown"}</span>
        </div>

        {/* Images */}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          {/* Imagen principal */}
          <div className="lg:w-1/2 w-full">
            <img
              src={MainImage}
              alt="Room Image"
              className="w-full h-[400px] lg:h-[500px] rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Miniaturas */}
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  onClick={() => setMainImage(image)}
                  key={index}
                  src={image}
                  alt={`Room Image ${index + 1}`}
                  className={`w-full h-40 rounded-xl shadow-md object-cover cursor-pointer ${
                    MainImage === image &&
                    "outline-3 outline-orange-500"
                  }`}
                />
              ))}
          </div>
        </div>

        {/* Price + Amenities */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Experience comfort & style
            </h2>
            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
                >
                  <img
                    src={facilityIcons[item]}
                    alt={item}
                    className="w-5 h-5"
                  />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-2xl font-medium text-end text-gray-700">
            ${room.pricePerNight}/night
            <p className="text-gray-400">taxes and fees included</p>
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {stayInfo.map((h, i) => (
            <div key={i} className="flex gap-3 items-start">
              <img src={assets[h.icon]} alt={h.title} className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">{h.title}</h3>
                <p className="text-sm text-gray-600">{h.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">About this room</h2>
          <p className="text-gray-700 leading-relaxed">
            This spacious apartment combines elegance with modern design,
            offering a cozy living space and panoramic city views. Perfect for
            both short stays and long vacations. Enjoy a private balcony, a
            fully equipped kitchen, high-speed WiFi, and luxury linens. Whether
            you’re traveling for business or leisure, this stay is designed to
            make you feel at home.
          </p>
        </div>

        {/* Nearby Attractions */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">Nearby Attractions</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>El Espino Park – 5 min walk</li>
            <li>Museum of Modern Art – 10 min drive</li>
            <li>Popular Shopping Mall – 2 km away</li>
            <li>
              Nightlife & restaurants all around the Zona Rosa - 500 mts away
            </li>
          </ul>
        </div>

        {/* Extra Info */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold mb-1">Check-in / Check-out</h3>
            <p>Check-in: 1:00 PM</p>
            <p>Check-out: 11:00 AM</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">House Rules</h3>
            <p>No smoking</p>
            <p>No pets</p>
            <p>No parties or events</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Cancellation Policy</h3>
            <p>Non refundable.</p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="mt-12">
          <Booking formId={room.formId} />
        </div>
      </div>
    )
  );
};

export default RoomDetails;
