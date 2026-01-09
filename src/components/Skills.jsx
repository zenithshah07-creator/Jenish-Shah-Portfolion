import React from "react";
// import { motion } from "framer-motion";
import { skills as skillData } from "../assets/assets";

const Skills = () => {
  return (
    <section id="Skills" className="py-20 bg-dark-100 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-sky-400">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="group bg-dark-200 p-8 rounded-2xl border border-white/5 hover:border-sky-500/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-colors duration-300"></div>

              <div className="flex items-center mb-6 relative z-10">
                <div className="p-3 bg-dark-300/50 rounded-xl group-hover:bg-sky-500/20 transition-colors duration-300">
                  <skill.icon className="w-8 h-8 text-sky-400 group-hover:text-sky-300 transition-colors" />
                </div>
                <h3 className="text-xl font-bold ml-4 group-hover:text-white transition-colors">{skill.title}</h3>
              </div>

              <p className="text-gray-400 mb-6 text-sm relative z-10">
                {skill.description}
              </p>

              <div className="flex flex-col gap-3 relative z-10">
                {skill.tags.map((tech, i) => (
                  <div key={i} className="flex justify-between items-center bg-dark-300/50 rounded-lg px-4 py-2 border border-white/5 hover:border-sky-500/30 transition-all duration-300">
                    <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
                    <span className="text-xs text-sky-400 font-semibold bg-sky-500/10 px-2 py-1 rounded">{tech.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;
