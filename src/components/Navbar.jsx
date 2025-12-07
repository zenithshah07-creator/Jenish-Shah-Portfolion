import React from 'react'
import { FaB, FaBars, FaXmark } from 'react-icons/fa6'

const Navbar = () => {
   
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
    <div className='container mx-auto flex justify-between items-center'>
        <a href="#" className='text-3xl font-bold text-white'>
          Jenish 
          <span className='text-sky-400'>Shah</span>
          <div className='w-4 h-4 bg-sky-400 rounded-full'></div>
        </a>
      
      <div className='hidden md:flex space-x-10'>
        <a href="#home"className='relative text-white
       hover:text-sky-400 transition duration-300  group'>
          <span>Home</span>
          <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full'></span>
        </a>
        <a href="#about"className='relative text-white
       hover:text-sky-400 transition duration-300  group'>
          <span>About</span>
          <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full'></span>
        </a>
        <a href="#Skills"className='relative text-white
       hover:text-sky-400 transition duration-300  group'>
          <span>Skills</span>
          <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full'></span>
        </a>
        <a href="#projects"className='relative text-white
       hover:text-sky-400 transition duration-300  group'>
          <span>Projects</span>
          <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full'></span>
        </a>
        <a href="#Experience"className='relative text-white
       hover:text-sky-400 transition duration-300  group'>
          <span>Experience</span>
          <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full'></span>
        </a>
        <a href="#contact"className='relative text-white
       hover:text-sky-400 transition duration-300  group'>
          <span>Contact</span>
          <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full'></span>
        </a>
      
      </div>
      {/* mobile menu icon */}
  <div className='md:hidden'>
    {showMenu ? (
      <FaXmark className='text-2xl cursor-pointer' onClick={() => setShowMenu(!showMenu)} />
    ) : (
      <FaBars className='text-2xl cursor-pointer' onClick={() => setShowMenu(!showMenu)} />
    )}
  </div>
    </div>
    {/* mobile menu */}
    {showMenu && (
      <div className='md:hidden mt-4 bg-dark-300 rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
      
       <a onClick={() => setShowMenu(!showMenu)} href="#home" className='relative text-white hover:text-sky-400 transition duration-300'>
          <span>Home</span>
        </a>
        <a onClick={() => setShowMenu(!showMenu)} href="#about" className='relative text-white hover:text-sky-400 transition duration-300'>
          <span>About</span>
        </a>
        <a onClick={() => setShowMenu(!showMenu)} href="#Skills" className='relative text-white hover:text-sky-400 transition duration-300'>
          <span>Skills</span>
        </a>
        <a onClick={() => setShowMenu(!showMenu)} href="#projects" className='relative text-white  hover:text-sky-400 transition-allduration-300'>
                  <span>Projects</span>

        </a>
        <a onClick={() => setShowMenu(!showMenu)} href="#Experience" className='relative text-white hover:text-sky-400 transition duration-300'>
          <span>Experience</span>
        </a>
        <a onClick={() => setShowMenu(!showMenu)} href="#contact" className='relative text-white hover:text-sky-400 transition duration-300'>
          <span>Contact</span>
        </a>
      </div>
    )}
    </nav>
  )
}

export default Navbar