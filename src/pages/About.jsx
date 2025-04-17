import Typewriter from "typewriter-effect";
import { aboutMe, personalInfo } from "../data/content";

const About = () => (
  <>
    {/* Typewriter intro & quote */}
    <div className="relative z-10">
      <div className="sticky top-0 z-20 px-3 sm:px-0 py-2 bg-white/0 sm:bg-[#0f172a]/80 sm:backdrop-blur-sm backdrop-blur-0">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold sm:font-bold text-purple-400 leading-snug">
          <Typewriter
            options={{
              strings: [`Hi, I'm ${personalInfo.name}, a ${personalInfo.title} 💻`],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 40,
            }}
          />
        </h1>

        <div className="mt-2 bg-white/10 border-l-4 border-purple-500 px-4 py-3 rounded shadow text-white text-sm italic">
          {personalInfo.quote}
        </div>
      </div>
    </div>

    {/* About section content */}
    <section
      id="about"
      className="text-white-500 leading-relaxed space-y-6 px-3 sm:px-4 md:px-0 scroll-mt-24 min-h-[80vh] pt-4"
    >
      {aboutMe.map((detail, i) => (
        <p key={i}>{detail}</p>
      ))}
    </section>
  </>
);

export default About;
