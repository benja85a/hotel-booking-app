import { useEffect } from "react";

const Booking = ({ formId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://secured.sirvoy.com/widget/sirvoy.js";
    script.async = true;
    script.setAttribute("data-form-id", formId);

    const container = document.getElementById("sirvoy-booking-form");
    container.innerHTML = ""; 
    container.appendChild(script);

  }, [formId]); // depende de formId

  return (
    <div className="min-h-[70vh] px-2 py-2">
      {/* <h1 className="text-2xl font-semibold mb-4">Book this Room</h1> */}
      <div id="sirvoy-booking-form" />
    </div>
  );
};

export default Booking;
