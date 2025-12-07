import React from 'react'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Project from '../components/Project.jsx'
import Work from '../components/Work.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Work />
      <Contact />
      <Footer/>
    </div>
  )
}

export default Home