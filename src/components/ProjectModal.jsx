import React from "react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const { title, image, description, details } = project;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-gray-900 text-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 relative shadow-lg animate-fadeIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-purple-400 mb-2">{title}</h2>

        {/* Image */}
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full rounded-md mb-4 border border-gray-700 object-cover"
          />
        )}

        {/* Description */}
        <p className="text-sm text-gray-300 mb-4">{description}</p>

        {/* Full Details */}
        {details && (
          <>
            <div className="mb-4">
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                Project Overview
              </h4>
              <p className="text-sm text-gray-300">{details.projectOverview}</p>
            </div>
            <div className="mb-4">
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Approach</h4>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                {details.approach.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Results</h4>
              <p className="text-sm text-gray-300">{details.solutionAndResults}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
