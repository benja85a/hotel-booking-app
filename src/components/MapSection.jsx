// components/MapSection.jsx
const MapSection = () => {
  return (
    <section className="w-full py-16 bg-gray-50 flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32">
      <h2 className="text-2xl md:text-4xl font-playfair font-bold mb-6 text-gray-800 text-center">
        Find Us on the Map
      </h2>
      <p className="text-sm md:text-base text-gray-600 text-center max-w-2xl mb-8">
        Visit us at Hotel Villa Madero. Easily locate us and plan your route
        using Google Maps.
      </p>

      <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7752.671992254039!2d-89.24054670833719!3d13.698088796752595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633177f576b853%3A0x53ccde410b7f9056!2sVilla%20Madero!5e0!3m2!1ses-419!2ssv!4v1755134909454!5m2!1ses-419!2ssv"
          className="w-full h-80 md:h-96 border-0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
