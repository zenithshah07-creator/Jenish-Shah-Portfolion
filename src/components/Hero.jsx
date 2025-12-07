import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      // animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center  pt-20 pb-16 bg-linear-to-r from-dark-100 via-dark-300 to-dark-100  '
    >
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
        {/* left side content */}
        <div className='md:w-1/2 mb-10 md:mb-0'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            Hi, I'M <span className='text-sky-400'>Jenish Shah</span>
          </h1>
          <h2 className='text-2xl md:text-4xl font-semibold mb-4 typewriter'>Front End Developer</h2>
          <p className='text-lg text-gray-300 mb-8'>
            I create Stunning web expriences With modern technologies and innovative design.
          </p>
          <div className='flex space-x-4'>
            <a href="#projects" className='px-6 py-3 bg-sky-600 rounded-lg font-medium hover:bg-sky-300 transition duration-300'>View Work</a>
            <a href="#contact" className='px-6 py-3 border border-sky-700 rounded-lg font-medium hover:bg-sky-400 transition decoration-sky-300'>Contact Me</a>
          </div>
        </div>
        {/* right side image */}
        <div className='md:w-1/2 flex justify-center'>
          <div className='relative w-64 h-64 md:w-80 md:h-80'>
            <div className='absolute inset-0 rounded-full bg-linear-to-r from-sky-400 to-pink opacity-70'>
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"

                }}
                className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float'
                src={assets.profileImg} alt="profile" />
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Hero