import Title from "./Title";
import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30">
      <Title
        title="What our guests say"
        subTitle="Discover why discerning travelers consistently choose 
        Hotel Villa Madero for their exclusive and luxurious 
        accommodations around the world."
      />

      {/* Animaciones de marquee */}
      <style>{`
        @keyframes marqueeScroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
        }

        .marquee-inner {
            animation: marqueeScroll 25s linear infinite;
        }

        .marquee-reverse {
            animation-direction: reverse;
        }
      `}</style>

      {/* Primera fila */}
      <div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative mt-16">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-slate-50 to-transparent"></div>
        <div className="marquee-inner flex transform-gpu min-w-[200%] gap-8 pb-5">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-200 w-64 flex-shrink-0"
            >
              <div className="flex items-center gap-3">
                {/* <img
                  className="w-12 h-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                /> */}
                <div>
                  <p className="font-playfair text-lg">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-3">
                {/* Pasamos el rating desde el objeto */}
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-gray-600 mt-3 text-sm">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-slate-50 to-transparent"></div>
      </div>

      {/* Segunda fila (reversa) */}
      <div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative mt-8">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-slate-50 to-transparent"></div>
        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] gap-8 pb-5">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-200 w-64 flex-shrink-0"
            >
              <div className="flex items-center gap-3">
                {/* <img
                  className="w-12 h-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                /> */}
                <div>
                  <p className="font-playfair text-lg">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-3">
                {/* Pasamos el rating desde el objeto */}
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-gray-600 mt-3 text-sm">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-slate-50 to-transparent"></div>
      </div>
    </div>
  );
};

export default Testimonial;
