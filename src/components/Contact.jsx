import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In
          <span className="text-sky-500">Touch</span>
        </h2>
        <p className="text-white text-center">
          Have a project in mind or want to collaborate? Let's talk!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* contact form  */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 ">
                  Your Name{" "}
                </label>
                <input
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="emai" className="block text-white mb-2 ">
                  {" "}
                  Your Email Address{" "}
                </label>
                <input
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  type="email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2 ">
                  Your Message
                </label>
                <textarea
                  className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  type="text"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue rounded-lg font-medium hover:bg-sky-700 transition duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* contact information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-white text-4xl mr-4">
                <FaMapMarkedAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 ">Location</h3>
                <p className="text-gray-200">kathmandu, Nepal</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-white text-4xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 ">Email</h3>
                <p className="text-gray-200">zenithshah07@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-white text-4xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 ">Phone</h3>
                <p className="text-gray-200">+977 9805129944</p>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4"> Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/zenithshah07-creator"
                  className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center hover:bg-black hover:text-white
             transition duration-300 cursor-pointer text-white"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/jenish-shah-8a4863382/"
                  className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center hover:bg-blue hover:text-white
             transition duration-300 cursor-pointer text-white"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/DANAXYZx5?s=09"
                  className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center hover:bg-sky-500 hover:text-white
             transition duration-300 cursor-pointer text-blue"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.facebook.com/jenish.shah.285048"
                  className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center hover:bg-blue hover:text-white
             transition duration-300 cursor-pointer text-blue"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
