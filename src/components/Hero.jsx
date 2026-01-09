import React from 'react'
// import { motion } from 'framer-motion'
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <section id='home' className='relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-100 pt-20'>
      {/* Background Elements */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
        <div className='absolute top-[-10%] left-[-10%] w-96 h-96 bg-sky-500/20 rounded-full blur-[100px] animate-pulse'></div>
        <div className='absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000'></div>
      </div>

      <div className='container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center'>
        {/* Left Content */}
        <div
          className='space-y-6'
        >
          <div className='inline-block px-4 py-2 bg-dark-200 rounded-full border border-sky-500/30 text-sky-400 text-sm font-medium'>
            Jenish Shah — Frontend Developer
          </div>

          <h1 className='text-5xl md:text-7xl font-bold leading-tight'>
            Building Fast <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 animate-gradient'>
              Web Applications
            </span>
          </h1>

          <p className='text-gray-400 text-lg max-w-lg leading-relaxed'>
            I build fast, responsive web apps that solve real-world problems using React and Next.js. Focused on performance and clean code.
          </p>

          <div className='flex flex-wrap gap-4'>
            <a
              href="#projects"
              className='px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transform hover:-translate-y-1 transition-all duration-300'
            >
              View Work
            </a>
            <a
              href="#contact"
              className='px-8 py-4 bg-dark-200 border border-white/10 text-white rounded-xl font-semibold hover:bg-white/5 hover:border-white/20 transition-all duration-300'
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image/Graphic */}
        <div
          className='relative flex justify-center'
        >
          <div className='relative w-80 h-80 md:w-96 md:h-96'>
            {/* Spinning Ring */}
            <div className='absolute inset-0 border-2 border-dashed border-sky-500/30 rounded-full animate-[spin_10s_linear_infinite]'></div>
            {/* Glowing Backdrop */}
            <div className='absolute inset-4 bg-gradient-to-br from-sky-500/20 to-purple-500/20 rounded-full blur-2xl'></div>

            <img
              className='relative w-full h-full object-cover rounded-full border-4 border-dark-100 shadow-2xl z-10'
              src={assets.profileImg}
              alt="Jenish Shah"
            />

            {/* Floating Badges */}
            <div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className='absolute -top-4 -right-4 bg-dark-200 p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-3 z-20'
            >
              <div className='w-3 h-3 bg-green-500 rounded-full animate-ping'></div>
              <span className='text-sm font-medium'>Open to Work</span>
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}

export default Hero