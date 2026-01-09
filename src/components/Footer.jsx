import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='py-12 bg-dark-200 border-t border-white/5 relative overflow-hidden'>
      {/* Background Glow */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50 blur-sm'></div>

      <div className="container mx-auto px-6 text-center">
        <h2 className='text-2xl font-bold mb-6'>
          <span className='text-white'>Jenish</span>
          <span className='text-sky-400'>Shah</span>
        </h2>

        <div className='flex justify-center space-x-8 mb-8'>
          {[
            { Icon: FaGithub, href: '#' },
            { Icon: FaLinkedin, href: '#' },
            { Icon: FaTwitter, href: '#' },
            { Icon: FaInstagram, href: '#' }
          ].map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              className='text-gray-400 hover:text-sky-400 transform hover:scale-110 transition-all duration-300'
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        <p className='text-gray-500 text-sm'>
          &copy; {new Date().getFullYear()} Created by <span className='text-sky-400'>Jenish Shah</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer