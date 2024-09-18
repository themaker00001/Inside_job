import React from 'react'
import logo from '../assets/logo.png'
const Nav = () => {
  return (
   <>
    {/* Top Navbar */}
    <div className="w-full flex items-center bg-gray-900 p-4">
    {/*left side */ }
  <div className="flex items-center space-x-4">
  <img src={logo} alt="" className='w-8 h-7' />
  <a href="#home" className="text-lg text-white hover:text-gray-400">Inside Job</a>
</div>

    {/* Centered Navigation Links */}
    <nav className="flex-1 flex justify-center space-x-6">
      <a href="#about" className="text-lg text-white hover:text-gray-400">About</a>
      <a href="#contact" className="text-lg text-white hover:text-gray-400">Contact Us</a>
    </nav>
  </div>
   </>
  )
}

export default Nav