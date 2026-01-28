import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import { initGA, trackPageView } from './utils/analytics';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <div className='min-h-screen bg-dark-100 text-gray-100'>
      <Helmet>
        <title>Jenish Shah - Frontend Developer | Portfolio</title>
        <meta name="description" content="Portfolio of Jenish Shah, a Frontend Developer specializing in React, Next.js, and high-performance web experiences. View projects and resume." />
        <meta name="keywords" content="Jenish Shah, Frontend Developer, React Developer, Web Developer, Portfolio" />
        <link rel="canonical" href="https://jenish-shah.vercel.app/" />
      </Helmet>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App