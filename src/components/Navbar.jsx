import React from "react";
import HoverLink from "./HoverLink";
import useScrollSpyNav from "../assets/hooks/useScrollSpyNav";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { personalInfo, SECTION_IDS } from "../data/content";

// === Constants ===

// === Reusable Social Icons ===
const renderSocialLinks = (className = "flex space-x-4 text-white", iconSize = "w-5 h-5") => (
    <div className={className}>
        {personalInfo.github && (
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition transform hover:scale-110 hover:animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" className={iconSize} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0.5C5.73 0.5 0.5 5.73 0.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 
            0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71
            -1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96
            .11-.76.41-1.26.75-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1
            -.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.18a11.08 11.08 0 012.9-.39
            c.99.01 1.99.13 2.91.39 2.2-1.5 3.17-1.18 3.17-1.18.63 1.65.23 2.87.11 3.17
            .75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.4-5.25 5.68.42.37.8 1.1.8 2.22
            0 1.6-.02 2.89-.02 3.28 0 .31.21.68.8.56A11.52 11.52 0 0023.5 12
            c0-6.27-5.23-11.5-11.5-11.5z" />
                </svg>
            </a>
        )}

        {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition transform hover:scale-110 hover:animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" className={iconSize} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14
            c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 19H4.58V9h2.54v10zM5.85
            7.66c-.82 0-1.32-.55-1.32-1.24 0-.7.51-1.24 1.34-1.24s1.32.54 1.33
            1.24c0 .69-.51 1.24-1.35 1.24zM20 19h-2.53v-5.37c0-1.28-.45-2.16-1.6-2.16
            -.87 0-1.39.59-1.61 1.16-.08.2-.1.47-.1.74V19h-2.53s.03-9.78
            0-10.8h2.53v1.53c.34-.52.95-1.27 2.3-1.27 1.68 0 2.94 1.1 2.94
            3.47V19z" />
                </svg>
            </a>
        )}

        {personalInfo.email && (
            <a href={`mailto:${personalInfo.email}`} className="hover:text-teal-400 transition transform hover:scale-110 hover:animate-pulse">
                <EnvelopeIcon className={iconSize} />
            </a>
        )}
    </div>
);
const Navbar = () => {
    const activeId = useScrollSpyNav(SECTION_IDS, 100, "main-scroll");

    return (
        <>
            {/* === Desktop Sidebar === */}
            <aside className="hidden lg:flex flex-col justify-between h-screen pt-16 pb-24 space-y-12">
                <div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-60 h-60 -mt-12 mb-4 rounded-full bg-purple-700 p-1 animate-profilePulse shadow-md">
                            <img
                                src="/images/profile.png"
                                alt={personalInfo.name}
                                className="w-full h-full object-cover rounded-full border-2 border-white"
                            />
                        </div>
                    </div>

                    <div>

                        
                        <h1 className="text-4xl text-purple-600 font-bold">{personalInfo.name}</h1>
                        <h2 className="text-lg text-white-400 mt-2">{personalInfo.title}</h2>
                    </div>

                    <nav className="mt-8 flex flex-col space-y-4 text-[0.75rem] leading-4 font-bold tracking-[0.1em] uppercase text-white-400">
                        {SECTION_IDS.map((id) => (
                            <HoverLink
                                key={id}
                                href={`#${id}`}
                                underline
                                withDot
                                active={activeId === id}
                            >
                                {id}
                            </HoverLink>
                        ))}
                    </nav>
                </div>

                {renderSocialLinks("flex space-x-6 text-white-500")}
            </aside>

            {/* === Mobile Top Navbar === */}
            <header className="lg:hidden fixed top-0 left-0 w-full bg-[#111827] z-50 shadow-md border-b border-purple-700">
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center space-x-3">
                        <img
                            src="/images/profile.png"
                            alt="Profile"
                            className="w-10 h-10 rounded-full border-2 border-purple-500"
                        />
                        <span className="text-base font-bold text-purple-300">
                            {personalInfo.name}
                            
                        </span>
                    </div>
                    {renderSocialLinks("flex space-x-4 text-white")}
                </div>

                <nav className="flex overflow-x-auto no-scrollbar px-4 pb-2 space-x-6 text-sm font-semibold uppercase tracking-wider text-white border-purple-800">
                    {SECTION_IDS.map((id) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={`whitespace-nowrap ${activeId === id ? "text-teal-400" : "text-white"
                                } hover:text-teal-300 transition`}
                        >
                            {id}
                        </a>
                    ))}
                </nav>
            </header>
        </>
    );
};

export default Navbar;
