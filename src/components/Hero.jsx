import React, { useState, useEffect } from "react";
import { assets, recursos } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/Booking");
  };

  // Lista de imágenes del carousel
  const images = [
    recursos.vestibulo,
    recursos.vestibulo2,
    recursos.vestibulo3,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar de imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Carousel de imágenes */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-start justify-center px-6 
        md:px-16 lg:px-24 xl:px-32 text-white h-full">

        <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20">
          Welcome to our exclusive hotel
        </p>

        <h1 className="font-playfair text-2xl md:text-5xl md:text-[56px] 
          md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
          Discover Hotel Villa Madero
        </h1>

        <p className="max-w-130 mt-2 text-sm md:text-base">
          Unparalleled luxury and comfort await. Start your journey with us today and experience the extraordinary.
        </p>

        <div className="bg-white/90 backdrop-blur-md text-gray-800 rounded-xl px-8 py-6 mt-10 shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <div className="w-full md:w-2/3">
            <h2 className="text-lg md:text-xl font-semibold mb-2 text-center md:text-left">
              Enjoy tailored hospitality where comfort meets elegance.
            </h2>
            <p className="text-xs md:text-base text-center md:text-left w-full">
              Our hotel is ready to exceed your expectations.
            </p>
          </div>

          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <button
              onClick={handleClick}
              className="flex items-center gap-2 rounded-md bg-black hover:bg-gray-800 transition px-6 py-3 text-white w-full md:w-auto"
            >
              <img src={assets.searchIcon} alt="search" className="h-6" />
              <span>Book Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
