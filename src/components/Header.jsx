import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons/fa6';
import logo from '../../assets/images/logo.png';
import { useDarkMode } from './DarkModeContext';

const Header = () => {
  const { darkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = 'auto'; // Enable scroll
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }:

  const navItems = [
    {
      link: 'Home',
      path: 'hero',
    },
    {
      link: 'Properties',
      path: 'properties',
    },
    {
      link: 'Services',
      path: 'services',
    },
    {
      link: 'Contact',
      path: 'contact',
    },
  ];

  return (
    <nav
      className={`${
        darkMode ? 'dark bg-black' : 'light bg-[#f3f3f3]'
      } flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}
      style={{ fontFamily: '"Raleway", sans-serif' }}
    >
      <div id='logo'>
        <img
          src={logo}
          alt='logo'
          className='lg:w-[150px] w-[120px] dark:invert'
        />
      </div>

      <ul className='lg:flex justify-center items-center gap-8 hidden'>
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className='text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white'
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>

      <div className='flex justify-center items-center lg:hidden' onClick={toggleMenu}>
        <div>
          {isMenuOpen ? (
            <FaXmark className='text-black dark:text-white text-2xl cursor-pointer' />
          ) : (
            <FaBars className='text-black dark:text-white text-2xl cursor-pointer' />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0 z-50`}
        onClick={closeMenu}
      >
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center'
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>

      {/* Background Overlay */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40'
          onClick={closeMenu} // Clicking on the overlay will close the menu
          style={{ pointerEvents: 'auto' }} // Ensure it captures click events
        ></div>
      )}
    </nav>
  );
};

export default Header;
