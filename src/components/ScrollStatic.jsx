'use client';
import { useEffect, useRef, useState } from "react";
import { commonAreas } from "../assets/assets";

export default function StickyTextScrollImages() {
  const [active, setActive] = useState(0);
  const sectionsRef = useRef(null);

  useEffect(() => {
    const root = sectionsRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll("[data-index]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setActive(idx);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-slate-950 text-white">
      <div className="grid md:grid-cols-2">
        {/* TEXTO STICKY solo en desktop */}
        <div className="hidden md:flex sticky top-0 h-screen items-center justify-center p-8 z-10">
          <div className="max-w-md">
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              these are the areas you can use
            </h2>
            <p className="mt-4 text-gray-300">
              Perfect place to have an amazing time with your loved ones, family or friends. Or can work in a quiet place.
            </p>

            <div className="mt-8 flex gap-2">
              {commonAreas.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 flex-1 rounded-sm transition-all ${
                    i <= active ? "bg-white" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* IMÁGENES */}
        <div className="relative">
          <div className="sticky top-0 h-screen pointer-events-none">
            <div className="relative w-full h-full">
              {commonAreas.map((item, i) => (
                <img
                  key={i}
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* TEXTO en mobile encima de la imagen */}
              <div className="md:hidden absolute bottom-5 left-1/2 -translate-x-1/2 p-4 bg-black/50 rounded-lg text-center max-w-xs">
                <h2 className="text-xl font-semibold">
                  {commonAreas[active].name}
                </h2>
                <p className="text-gray-300 text-sm mt-1">
                  Perfect place to have an amazing time with your loved ones or work in a quiet place.
                </p>
              </div>
            </div>
          </div>

          {/* Secciones fantasma */}
          <div ref={sectionsRef}>
            {commonAreas.map((_, i) => (
              <div key={i} data-index={i} className="h-screen" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
