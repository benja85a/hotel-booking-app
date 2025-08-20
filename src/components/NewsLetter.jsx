import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";

const NewsLetter = () => {
  const whatsappNumber = "50361780430"; // Número de WhatsApp en formato internacional sin +
  const whatsappMessage =
    "Hola, me gustaría recibir más información sobre el hotel y las reservaciones.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="flex flex-col items-center max-w-4xl lg:w-full rounded-2xl px-4 py-12 
    md:py-16 mx-2 lg:mx-auto my-30 bg-gray-900 text-white"
    >
      <Title
        title="Contact us WhatsApp"
        subTitle="Send us a message and speak directly with our team for information on reservations, rates, and promotions."
      />

      <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-3">
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center gap-5 group bg-green-600 hover:bg-green-500 px-2 md:px-8 py-2 rounded-lg active:scale-95 transition-all shadow-md"
        >
          <img
            src={assets.whatsapp} // Asegúrate de tener un ícono de WhatsApp en assets
            alt="WhatsApp"
            className="w-5 invert-0"
          />
          <span className="text-white font-medium">
            Contact us via WhatsApp
          </span>
        </button>
      </div>

      <p className="text-gray-400 mt-6 text-sm text-center">
        Our customer service team is available every day to help you.
      </p>
    </div>
  );
};

export default NewsLetter;
