import React, { useState } from 'react';

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3 md:py-4">
      <svg 
              className="w-6 h-6" 
              fill="" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {navbarOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
              )}
            </svg>
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-gray-800">MonLogo</a>
        </div>
        <div className="md:hidden">
          <button 
            onClick={() => setNavbarOpen(!navbarOpen)} 
            className="text-gray-800 focus:outline-none"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {navbarOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
              )}
            </svg>
          </button>
        </div>
        <div className={`w-full md:flex md:items-center md:w-auto ${navbarOpen ? 'block' : 'hidden'}`}>
          <ul className="pt-4 md:flex md:justify-between md:pt-0">
            <li>
              <a href="/" className="block px-3 py-2 text-gray-800 hover:text-blue-600">Accueil</a>
            </li>
            <li>
              <a href="/about" className="block px-3 py-2 text-gray-800 hover:text-blue-600">À propos</a>
            </li>
            <li>
              <a href="/services" className="block px-3 py-2 text-gray-800 hover:text-blue-600">Services</a>
            </li>
            <li>
              <a href="/contact" className="block px-3 py-2 text-gray-800 hover:text-blue-600">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
