import React from "react";

const Projectcard = ({ title, description, problem, solution, metrics, image, tech, demo, code }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col bg-dark-300/40 border border-white/5 hover:border-sky-500/30 transition-all duration-300">

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-transparent to-transparent z-10 opacity-60"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="relative p-6 z-20 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:text-sky-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {description}
        </p>

        {/* Case Study Mini-Details */}
        <div className="mb-6 space-y-3 bg-dark-100/50 p-4 rounded-xl border border-white/5">
          <div className="flex gap-2 items-start">
            <span className="text-red-400 text-xs font-bold uppercase tracking-wider mt-0.5">Problem:</span>
            <span className="text-gray-400 text-xs leading-snug">{problem}</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-green-400 text-xs font-bold uppercase tracking-wider mt-0.5">Solution:</span>
            <span className="text-gray-400 text-xs leading-snug">{solution}</span>
          </div>
          {metrics && (
            <div className="flex gap-2 items-start">
              <span className="text-purple-400 text-xs font-bold uppercase tracking-wider mt-0.5">Impact:</span>
              <span className="text-gray-300 text-xs font-medium leading-snug">{metrics}</span>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-sky-200/80"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4 border-t border-white/5">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-sky-600 text-white rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-sky-500 transition-colors shadow-lg shadow-sky-900/20"
          >
            Live Demo
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2.5 text-sm font-medium border border-gray-600 text-gray-300 rounded-lg hover:border-white hover:text-white transition-colors"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projectcard;
