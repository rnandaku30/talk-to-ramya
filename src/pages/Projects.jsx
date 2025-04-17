import React, { useState } from "react";
import { projectsSummary, projectDetails } from "../data/content";
import ProjectModal from "../components/ProjectModal";

const Projects = () => {
  const [activeProjectKey, setActiveProjectKey] = useState(null);

  return (
    <section id="projects" className="py-8 scroll-mt-24 min-h-[80vh]">
      <h2 className="text-2xl font-bold text-gray-200 uppercase mb-10">Projects</h2>

      <div className="space-y-8">
        {projectsSummary.map((proj, i) => (
          <div
            key={i}
            onClick={() => setActiveProjectKey(proj.key)}
            className="cursor-pointer flex flex-col sm:flex-row gap-4 sm:gap-6 items-start hover:bg-white/5 p-4 rounded-lg transition"
          >
            {projectDetails[proj.key]?.image && (
              <img
                src={projectDetails[proj.key].image}
                alt={proj.title}
                className="w-full sm:w-40 h-40 sm:h-28 object-cover rounded border border-gray-700"
              />
            )}

            <div className="w-full">
              <h3 className="text-lg font-semibold text-purple-300">{proj.title}</h3>
              <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                {projectDetails[proj.key]?.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {proj.tech_stack.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-purple-900/30 px-2 py-1 rounded-full text-purple-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Modal */}
      {activeProjectKey && (
        <ProjectModal
          project={projectDetails[activeProjectKey]}
          onClose={() => setActiveProjectKey(null)}
        />
      )}
    </section>
  );
};

export default Projects;
