import React from 'react'

const Footer = () => {
  return (
    <div className='py-8 bg-blue-100'>
      <div className="container mx-auto px-6 text-center text-gray-700">  
        <p>&copy; {new Date().getFullYear()} Created by Jenish Shah. All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer