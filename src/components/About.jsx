import React from "react";
import { motion } from "framer-motion";
import { assets, aboutInfo } from "../assets/assets";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      // animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About
          <span className="text-sky-400">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 ">
          Get to know more about my background and passion
        </p>
        {/* image my journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              // animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={assets.profile1}
              alt="profile"
            />
          </div>

          <div>
            {/* Text Contain */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="md:w-1/2"
            >
              <div className="rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
                <p className="text-gray-300 mb-6">
                  I'm passionate Front End developer with over years of learning
                  experience creating a digital solution for a business around
                  the world. my journey started with basic HTML/CSS website and
                  has evolved into building a complex web application with
                  modern frameworks.
                </p>
                <p className="text-gray-300 mb-6">
                  When I'm not coding you can find me exploring new technology,
                  contributing to open source project, or sharing my knowledge
                  through tech blogs and tutorials.I believed in continuous
                  learning and pausing the boundaries of what's possible on the
                  web.
                </p>

                {/* cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {aboutInfo.map((data, index) => (
                    <div
                      key={index}
                      className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                    >
                      <div className="text-sky-500 text-4xl mb-4">
                        <data.icon />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {data.title}
                      </h3>
                      <p className="text-gray-400">{data.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
