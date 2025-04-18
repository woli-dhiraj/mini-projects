import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="text-2xl font-bold text-blue-600 tracking-tight">
          
             <NavLink to='/' className="cursor-pointer">React Mini Projects</NavLink>
        </div>

        <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <NavLink to='/' className="hover:text-blue-600">Home</NavLink>
          <NavLink to='/about' className="hover:text-blue-600">About</NavLink>
          <NavLink to='/contact' className="hover:text-blue-600">Contact</NavLink>
        </nav>

        <button
          className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-2 text-gray-700">
          <NavLink to='/' onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Home</NavLink>
          <NavLink to='/about' onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">About</NavLink>
          <NavLink to='/contact' onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Contact</NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
