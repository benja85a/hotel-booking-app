import { experienceSteps } from "../assets/assets";



const Experience = () => {
  return (
    <div className="bg-white py-20 px-6 mt-15 md:px-16 lg:px-28">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
        The experience of Villa Madero
      </h2>

      <div className="space-y-28 relative">
        {experienceSteps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Imagen */}
            <div className="lg:w-1/2">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-80 object-cover rounded-3xl shadow-xl border border-gray-200"
              />
            </div>

            {/* Texto */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
