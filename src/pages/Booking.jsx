import { useEffect } from "react";

const Booking = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://secured.sirvoy.com/widget/sirvoy.js";
    script.async = true;
    script.setAttribute("data-form-id", "aafdabdeb2c82163");

    const container = document.getElementById("sirvoy-booking-form");
    container.innerHTML = ""; // Limpia por si acaso

    container.appendChild(script);

    // No quitamos el script porque es necesario para el formulario
  }, []);

  return (
    <div className="min-h-[70vh] px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Book a Room</h1>
      <div id="sirvoy-booking-form" />
    </div>
  );
};

export default Booking;
