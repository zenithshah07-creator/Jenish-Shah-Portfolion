import React, { useState, useEffect } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#Experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-100/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}>
      <div className='container mx-auto px-6 flex justify-between items-center'>
        {/* Logo */}
        <a href="#" className='group flex items-center gap-1 text-2xl font-bold text-white tracking-wide'>
          <span className='group-hover:text-sky-400 transition duration-300'>Jenish</span>
          <span className='text-sky-400 group-hover:text-white transition duration-300'>Shah</span>
          <div className='w-2 h-2 bg-sky-400 rounded-full group-hover:bg-white transition duration-300 ml-1'></div>
        </a>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-8'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='relative text-gray-300 hover:text-sky-400 transition duration-300 text-sm font-medium tracking-wide group py-1'
            >
              {link.name}
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-purple-500 transition-all duration-300 group-hover:w-full'></span>
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-purple-500 rounded-lg hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 transform hover:-translate-y-0.5">
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden z-50'>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className='text-white text-2xl hover:text-sky-400 transition focus:outline-none'
          >
            {showMenu ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-dark-100/95 backdrop-blur-xl flex flex-col justify-center items-center space-y-8 transition-all duration-300 md:hidden ${showMenu ? 'pointer-events-auto opacity-100 visible' : 'pointer-events-none opacity-0 invisible'
          }`}>
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setShowMenu(false)}
              className='text-2xl font-semibold text-white hover:text-sky-400 transition-all transform hover:scale-110'
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setShowMenu(false)}
            className="px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-sky-500 to-purple-500 rounded-full shadow-lg"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar