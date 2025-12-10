import React from "react";

const policies = [
  {
    icon: "🕓",
    title: "Check-in & Check-out",
    text: "Check-in desde la 1:00 PM. Check-out a las 11:00 AM. Late check-out tiene costo adicional."
  },
  {
    icon: "💳",
    title: "Payment & Cancellation",
    text: "Reservas no reembolsables. Depósitos requeridos para cubrir daños."
  },
  {
    icon: "🚭",
    title: "Non-Smoking Policy",
    text: "Todas las habitaciones y áreas internas son libres de humo. Se aplica tarifa de limpieza."
  },
  {
    icon: "🧑‍🤝‍🧑",
    title: "Visitors Policy",
    text: "Visitantes solo en áreas sociales. Horas de silencio: 9:00 PM a 8:00 AM."
  },
  {
    icon: "🧼",
    title: "Cleanliness & Safety",
    text: "Habitaciones sanitizadas bajo solicitud. Gel disponible bajo petición."
  },
  {
    icon: "🚪",
    title: "After Hours Service",
    text: "Apertura de puerta después de las 11:00 PM tiene un cargo adicional."
  },
];

const About = () => {
  return (
    <div className="bg-white py-20 px-6 mt-3 md:px-16 lg:px-28">
      <h1 className="text-3xl font-semibold text-center mx-auto">
        Hotel Policies & Guidelines
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-xl mx-auto">
        To ensure an exceptional and worry-free experience for all our guests,
        please review our core policies and guidelines.
      </p>

      <div className="relative w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-14">

        {/* Glow */}
        <div className="absolute w-[500px] h-[500px] bg-[#FBFFE1] blur-[200px] rounded-full -z-10 top-0 left-1/2 -translate-x-1/2 opacity-50"></div>

        {policies.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-5 p-5 rounded-2xl border border-slate-200/40 bg-white/40 backdrop-blur-sm shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl flex-shrink-0 flex items-center justify-center w-12 h-12">
              {item.icon}
            </div>

            <div>
              <h3 className="text-base font-medium text-slate-700">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 mt-1">{item.text}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default About;
