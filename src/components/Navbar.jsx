import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav className="bg-gray-800 p-4 text-white fixed w-full z-10 top-0" style={{ cursor: 'default' }}>
      <div className="mx-auto flex max-w-screen-xl justify-between relative items-center">
        {/* Left Links */}
        <div className="hidden sm:flex space-x-4 items-center text-sm">
          <Link
            to="/"
            className="relative group transition-all duration-300 ease-in-out hover:text-yellow-400 hover:scale-105"
          >
            Home
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className="relative group transition-all duration-300 ease-in-out hover:text-yellow-400 hover:scale-105"
          >
            About
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Centered Name */}
        <div className="text-2xl sm:text-3xl font-extrabold absolute left-1/2 transform -translate-x-1/2">
          <a href="/">Abhishek Doshi</a>
        </div>

        {/* Right Links */}
        <div className="hidden sm:flex space-x-4 items-center text-sm">
          <Link
            to="/projects"
            className="relative group transition-all duration-300 ease-in-out hover:text-yellow-400 hover:scale-105"
          >
            Projects
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/experience"
            className="relative group transition-all duration-300 ease-in-out hover:text-yellow-400 hover:scale-105"
          >
            Experience
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="relative group transition-all duration-300 ease-in-out hover:text-yellow-400 hover:scale-105"
          >
            Contact
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-xl focus:outline-none"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-center z-20 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'flex flex-col items-center justify-center opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <button
            onClick={closeMobileMenu}
            className="text-xl absolute top-4 right-4 focus:outline-none"
            aria-label="Close menu"
          >
            ✕
          </button>
          <ul className="font-medium text-2xl space-y-4">
            <li>
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="relative group transition-all duration-300 ease-in-out hover:text-yellow-400 hover:scale-105"
              >
                Home
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="relative group transition-all duration-300 ease-in-out hover:text-yellow-400 hover:scale-105"
              >
                About
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={closeMobileMenu}
                className="relative group transition-all duration-300 ease-in-out hover:text-yellow-400 hover:scale-105"
              >
                Projects
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                onClick={closeMobileMenu}
                className="relative group transition-all duration-300 ease-in-out hover:text-yellow-400 hover:scale-105"
              >
                Experience
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="relative group transition-all duration-300 ease-in-out hover:text-yellow-400 hover:scale-105"
              >
                Contact
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;