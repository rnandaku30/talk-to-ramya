// import React from "react";
// import { experiences } from "../data/content";
// import useScrollSpyTimeline from "../assets/hooks/useScrollSpyTimeline";
// import { fadeInExperience } from "../utils/animation";

// const Experience = () => {
//     const sectionIds = experiences.map((_, i) => `experience-${i}`);
//     const activeIndex = useScrollSpyTimeline(sectionIds);

//     return (
//         <section id="experience" className="relative py-16">
//             <h2 className="text-2xl font-bold text-white-200 uppercase mb-20">Experience</h2>

//             {/* Timeline line */}
//             <div className="absolute hidden md:block left-1/2 top-[10.5rem] bottom-[3.5rem] w-[4px] bg-teal-500 -translate-x-1/2 z-0" />
//             <div className="absolute md:hidden left-6 top-[10.5rem] bottom-[4rem] w-[2px] bg-teal-500 z-0" />

//             <div className="relative flex flex-col space-y-32">
//                 {experiences.map((exp, index) => {
//                     const isLeft = index % 2 === 0;
//                     const isActive = activeIndex === index;
//                     const sectionId = `experience-${index}`;

//                     return (
//                         <div
//                             key={index}
//                             id={sectionId}
//                             className={`relative w-full flex flex-col md:flex-row items-start justify-between px-2 z-10 ${fadeInExperience(index)}`}
//                         >
//                             {/* Date on opposite side of the card */}
//                             <div
//                                 className={`hidden md:block absolute top-0 z-30 transition-all duration-300
//     ${isLeft ? "right-[calc(50%+3rem)] text-right" : "left-[calc(50%+3rem)] text-left"}
//   `}
//                             >
//                                 <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md
//     ${isActive ? "text-purple-400 font-bold text-lg bg-white/10 shadow-md" : "text-white-400 text-base"}
//   `}>
//                                     <span className="text-xl">{!isLeft ? "◀" : "▶"}</span>
//                                     <span>{exp.duration}</span>
//                                 </div>
//                             </div>


//                             {/* Dot (always centered) */}
//                             <div className="absolute md:left-1/2 left-4 transform md:-translate-x-1/2 -top-2 z-20">
//                                 <div
//                                     className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-4
//                     ${isActive
//                                             ? "bg-purple-500 border-purple-300 text-white scale-110 shadow-lg"
//                                             : "bg-gray-600 border-white-400 text-white-300"}
//                   `}
//                                 >
//                                     {index + 1}
//                                 </div>
//                             </div>

//                             {/* Experience Card */}
//                             <div
//                                 className={`
//                                     mt-10 md:mt-0 p-5 bg-primaryBg border border-white-700 rounded-xl shadow-md
//                                     w-full md:w-[calc(50%-3rem)] max-h-[240px] min-h-[200px] overflow-auto
//                                     transition-all duration-500
//                                     ${isLeft ? "md:ml-auto" : "md:mr-auto"}
//                                   `}
//                             >
//                                 <h3 className="text-lg text-purple-400 font-bold mb-2">
//                                     {exp.title} · {exp.company}
//                                 </h3>
//                                 <ul className="list-disc text-sm text-white-400 space-y-1 ml-5">
//                                     {exp.achievements.map((item, i) => (
//                                         <li key={i}>{item}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </section>
//     );
// };

// export default Experience;


import React from "react";
import { experiences } from "../data/content";
import useScrollSpyTimeline from "../assets/hooks/useScrollSpyTimeline";
import { fadeInExperience } from "../utils/animation";

const Experience = () => {
    const sectionIds = experiences.map((_, i) => `experience-${i}`);
    const activeIndex = useScrollSpyTimeline(sectionIds);

    return (
        <section id="experience" className="relative py-8 scroll-mt-24 min-h-[80vh]">
            <h2 className="text-2xl font-bold text-white-200 uppercase mb-20">
                Experience
            </h2>

            {/* Timeline Line */}
            <div className="absolute hidden md:block left-1/2 top-[11.5rem] bottom-[3.5rem] w-[4px] bg-teal-500 -translate-x-1/2 z-0" />
            <div className="absolute md:hidden left-6 top-[11.5rem] bottom-[4rem] w-[2px] bg-teal-500 z-0" />

            <div className="relative flex flex-col space-y-32">
                {experiences.map((exp, index) => {
                    const isLeft = index % 2 === 0;
                    const isActive = activeIndex === index;
                    const sectionId = `experience-${index}`;

                    return (
                        <div
                            key={index}
                            id={sectionId}
                            className={`relative w-full flex flex-col md:flex-row items-start justify-between px-2 z-10 ${fadeInExperience(index)}`}
                        >
                            {/* WEB DATE (opposite side of card) */}
                            <div
                                className={`hidden md:block absolute top-0 z-30 transition-all duration-300 ${isLeft
                                        ? "right-[calc(50%+3rem)] text-right"
                                        : "left-[calc(50%+3rem)] text-left"
                                    }`}
                            >
                                <div
                                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-md ${isActive
                                            ? "text-purple-400 font-bold text-lg bg-white/10 shadow-md"
                                            : "text-white-400 text-base"
                                        }`}
                                >
                                    <span className="text-xl">{!isLeft ? "◀" : "▶"}</span>
                                    <span>{exp.duration}</span>
                                </div>
                            </div>

                            {/* DOT + MOBILE DATE */}
                            <div className="absolute top-0 z-30 flex md:flex-col items-center md:left-1/2 left-1 md:-translate-x-1/2">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-4 ${isActive
                                            ? "bg-purple-500 border-purple-300 text-white scale-110 shadow-lg"
                                            : "bg-gray-600 border-white-400 text-white-300"
                                        }`}
                                >
                                    {index + 1}
                                </div>

                                {/* Mobile Date next to dot */}
                                <div
                                    className={`md:hidden ml-3 text-sm mt-1 ${isActive ? "text-purple-400 font-semibold" : "text-white-400"
                                        }`}
                                >
                                    {exp.duration}
                                </div>
                            </div>

                            {/* EXPERIENCE CARD */}
                            <div
                                className={`
                  mt-16 md:mt-0 p-5 bg-primaryBg border border-white-700 rounded-xl shadow-md
                  w-full md:w-[calc(50%-3rem)] max-h-[240px] min-h-[200px] overflow-auto
                  transition-all duration-500
                  ${isLeft ? "md:ml-auto" : "md:mr-auto"}
                `}
                            >
                                <h3 className="text-lg text-purple-400 font-bold mb-2">
                                    {exp.title} - {exp.company}
                                </h3>
                                <p className="text-sm text-white-400 space-y-1">{exp.description}</p>
                                {/* <ul className="list-disc text-sm text-white-400 space-y-1 ml-5">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul> */}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Experience;


