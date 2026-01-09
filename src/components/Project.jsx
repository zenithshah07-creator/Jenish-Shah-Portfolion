import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import { FaArrowRight } from 'react-icons/fa'
import Projectcard from './Projectcard.jsx'

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id='projects'
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          My
          <span className='text-sky-400'>Projects</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>A selection of my recent work</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  max-w-6xl mx-auto'>
          {/* Project Card */}
          {
            projects.map((project, index) => (
              <Projectcard key={index} {...project} />
            ))
          }

        </div>
        <div className='text-center mt-12'>
          <a href="#" className='px-6 py-3 border border-sky-600 rounded-lg font-medium hover:bg-sky-400 transition decoration-sky-300'>View All Projects</a>
          <FaArrowRight className='ml-2' />
        </div>
      </div>

    </motion.div>
  )
}

export default Project