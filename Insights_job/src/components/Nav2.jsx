import React from 'react';
import BGPIC from '../assets/BGPIC.jpg';
import logo from '../assets/logo.png';

const Nav2 = () => {
  return (
    <nav className="relative w-full z-10">
      {/* Background Image */}
      <div className="relative">
        <img src={BGPIC} alt="Background" className="w-full h-auto object-cover" style={{ height: '200px' }} />

        {/* Description Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Predictive Models</h1>
          <p className="text-lg md:text-xl mb-4 text-center">
            Discover insights and predictions with our advanced predictive models. 
            Our models help in understanding trends, forecasting outcomes, and making informed decisions.
          </p>
     
        </div>
      </div>

      {/* Navbar Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Left: Company Name */}
          <div className="flex-shrink-0 text-gray-700 text-2xl font-bold">
           Inside Job
          </div>

          {/* Middle: Products Dropdown */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-500 font-medium flex items-center">
                  Products
                  {/* Dropdown Arrow */}
                  <svg
                    className="ml-2 w-4 h-4 text-gray-700 group-hover:text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg py-2">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Customer Churn</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Customer Segmentation</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Upselling / Cross Selling</a>
                </div>
              </div>
              <a href="#" className="text-gray-700 hover:text-gray-500">About</a>
              <a href="#" className="text-gray-700 hover:text-gray-500">Contact</a>
            </div>
          </div>

          {/* Right: Login & Signin */}
          <div className="flex items-center space-x-4">
            <a href="#" className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 font-bold		">Login</a>
            <a href="#" className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-600 hover:text-white font-bold	">Sign In</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav2;
