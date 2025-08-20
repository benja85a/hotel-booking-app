import { Link } from "react-router-dom";

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={`/Booking`}
      onClick={() => scrollTo(0, 0)}
      className="w-full sm:w-1/2 lg:w-1/4"
    >
      <div
        className={`relative flex flex-col h-full rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300 ${
          index % 2 !== 0 ? "bg-gray-50" : ""
        }`}
      >
        {/* Imagen */}
        <div className="relative w-full h-40 overflow-hidden">
          <img
            src={room.images[0]}
            alt={room.roomType}
            className="w-full h-full object-cover"
          />
          {index % 2 === 0 && (
            <span className="absolute top-2 left-2 text-xs bg-white text-gray-800 font-medium rounded-full px-2 py-0.5 shadow">
              Best Seller
            </span>
          )}
        </div>

        {/* Contenido */}
        <div className="flex flex-col justify-between flex-grow p-4 gap-2">
          <div className="flex items-start justify-between">
            <div>
              {/* Nombre de la habitación */}
              <h3 className="font-playfair text-lg font-semibold text-gray-800">
                {room.roomType}
              </h3>

              {/* Dirección */}
              {/* <div className="flex items-center text-sm text-gray-600 gap-1">
            <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4" />
            <span>{room.hotel.address}</span>
          </div> */}

              {/* comodidades */}
              <div className="flex flex-wrap gap-2 text-xs text-gray-600 mt-2">
                {room.amenities.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-100 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              {/* Rating */}
              {/* <div className="flex items-center text-sm text-yellow-600 gap-2">
                <img
                  src={assets.starIconFilled}
                  alt="star-icon"
                  className="w-4 h-4"
                />
                <span>5</span>
                <span className="text-gray-500 ml-1"></span>
              </div> */}
            </div>
          </div>

          {/* Precio y botón */}
          <div className="flex items-center justify-between mt-3">
            <p className="text-gray-800 text-sm">
              <span className="font-bold text-base">${room.pricePerNight}</span>{" "}
              / night
            </p>
            <button className="px-3 py-1 text-sm font-medium border border-gray-300 rounded hover:bg-gray-100 transition">
              Look for availability
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
