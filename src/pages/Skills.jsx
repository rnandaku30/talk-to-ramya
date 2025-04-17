import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { skills } from "../data/content";

const SkillCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: { perView: 1 },
    renderMode: "performance",
    defaultAnimation: {
      duration: 800,
      easing: (t) => t * (2 - t),
    },
  });

  return (
    <section id="skills" className="w-full max-w-6xl mx-auto py-8 px-4 text-white scroll-mt-24 min-h-[80vh]">
            <h2 className="text-2xl font-bold text-gray-200 uppercase mb-10">Skills</h2>


      <div ref={sliderRef} className="keen-slider overflow-hidden rounded-2xl shadow-xl relative">
        {skills.map((category, i) => (
          <div
            key={i}
            className="keen-slider__slide flex justify-center items-center bg-gradient-to-br from-[#111827] to-[#1f2937] relative"
          >
            <div className="relative w-full max-w-xl px-6 py-10 rounded-2xl text-white">
              {/* Arrows inside the card */}
              <button
                onClick={() => instanceRef.current?.prev()}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-purple-700/60 hover:bg-purple-700 text-white rounded-full p-2 z-10"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={() => instanceRef.current?.next()}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-700/60 hover:bg-purple-700 text-white rounded-full p-2 z-10"
              >
                <ChevronRight size={22} />
              </button>

              {/* Title */}
              <h3 className="text-2xl font-bold text-purple-300 text-center mb-6">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {category.items.map((skill, j) => (
                  <span
                    key={j}
                    className="bg-purple-900/40 text-purple-200 text-sm px-4 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Pagination inside the card */}
              <div className="flex justify-center gap-2 mt-4">
                {skills.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => instanceRef.current?.moveToIdx(idx)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      currentSlide === idx
                        ? "bg-purple-400 scale-110"
                        : "bg-purple-700/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillCarousel;
