// components/ContactDropdown.jsx
import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const ContactDropdown = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  // Detectar si es mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // al inicio
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cerrar dropdown si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("#contact-dropdown")) {
        closeDropdown();
      }
    };

    if (!isMobile && isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isMobile]);

  return (
    <>
      <div id="contact-dropdown" className="relative">
        <button
          onClick={toggleDropdown}
          className="p-1 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <img
            src={assets.envelopeSolid}
            alt="contactDropdown"
            className={`${
              isScrolled ? "invert" : "grayscale"
            } h-7 transition-all duration-500`}
          />
        </button>

        {/* Desktop dropdown */}
        {!isMobile && isOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white text-sm text-gray-700 border border-gray-300 rounded shadow-lg p-4 z-50">
            <ContactContent isScrolled={isScrolled} />
          </div>
        )}
      </div>

      {/* Mobile modal */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white w-11/12 max-w-sm p-6 rounded shadow-lg relative">
            <button
              onClick={closeDropdown}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <ContactContent isScrolled={isScrolled} />
          </div>
        </div>
      )}
    </>
  );
};

const ContactContent = ({ isScrolled }) => (
  <>
    <h4 className="font-semibold mb-2">Contact us</h4>
    <a
      href="tel:+50361780430"
      className="mb-2 text-blue-600 hover:underline flex items-center gap-2"
    >
      <img
        src={assets.phoneSolid}
        alt="cellphone"
        className={`${
          isScrolled
            ? "invert brightness-45 contrast-60"
            : "invert brightness-85 contrast-85"
        } h-5 transition-all duration-500`}
      />
      +503 6178-0430
    </a>

    <a
      href="https://wa.me/50361780430"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-green-600 hover:underline"
    >
      <img
        src={assets.whatsapp}
        alt="Whatsapp"
        className={`${
          isScrolled
            ? "invert brightness-35 contrast-50"
            : "invert brightness-85 contrast-85"
        } h-7 transition-all duration-500`}
      />
      WhatsApp
    </a>
    <h4 className="font-semibold mb-2">Contact us</h4>
    {/* View Map */}
    <a
      href="https://maps.app.goo.gl/LJt5u1AKGcJxuX7W9"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-1 text-white text-sm font-medium transition-colors duration-500 ${
        isScrolled
          ? "invert brightness-45 contrast-60"
          : "invert brightness-85 contrast-85"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 20l-5.447-2.724A2 2 0 013 15.382V5a2 2 0 012-2l5.553 2.776M9 20l6-3v-9l-6 3v9zm6-3l5.447-2.724A2 2 0 0021 12.618V3a2 2 0 00-2-2l-5.553 2.776"
        />
      </svg>
      View Map
    </a>
  </>
);

export default ContactDropdown;
