import React from "react";
import { education } from "../data/content";
import { fadeInExperience } from "../utils/animation";

const Education = () => {
  return (
    <section id="education" className="py-8 scroll-mt-24 min-h-[80vh]">
      <h2 className="text-2xl font-bold text-white-200 uppercase mb-16">Education</h2>

      <div className="flex flex-col space-y-12">
        {education.map((edu, i) => (
          <div
            key={i}
            className={`group flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 ${fadeInExperience(i)}`}
          >
            {/* Left Side: Date */}
            <div className="text-purple-400 text-sm font-semibold min-w-[140px] md:text-right md:pt-1">
              <span className="transition-all duration-300 group-hover:text-purple-300 group-hover:scale-105 block">
                {edu.duration.toUpperCase()}
              </span>
            </div>

            {/* Right Side: Details */}
            <div className="flex-1 p-5 rounded-lg bg-primaryBg border border-transparent group-hover:border-purple-500 transition-all duration-300 shadow-md">
              <h3 className="text-lg text-purple-300 font-bold transition-all duration-300 group-hover:scale-[1.02]">
                {edu.degree}
              </h3>
              <p className="text-sm text-white-400 mt-1">{edu.institution}</p>

              {edu.coursework && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {edu.coursework.map((course, j) => (
                    <span
                      key={j}
                      className="text-xs text-purple-200 bg-purple-900/30 px-3 py-1 rounded-full"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
