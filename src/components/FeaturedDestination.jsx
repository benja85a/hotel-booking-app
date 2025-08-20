import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import { useNavigate } from "react-router-dom";
import Title from "./Title";

const FeaturedDestination = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      <Title
        title="Our Featured Rooms"
        subTitle="Discover our handpicked selection of exquisite rooms, each designed to offer unparalleled comfort and style. Whether you're seeking a cozy retreat or a luxurious suite, our featured rooms promise an unforgettable stay."
      />

      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 mt-20 w-full rounded">
        {roomsDummyData.slice(0, 3).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <button
        onClick={() => {
          navigate("/Booking");
          scrollTo(0, 0);
        }}
        className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded
       bg-white hover:bg-gray-50 transition-all cursor-pointer"
      >
        Search Availability
      </button>
    </div>
  );
};

export default FeaturedDestination;
