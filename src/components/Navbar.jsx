import React, { useEffect, useState } from 'react';
import { FaDownload, FaTimes, FaBars } from 'react-icons/fa';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Cv from '../assets/David_Soro_CV.pdf';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Use window.location.pathname to get the current pathname
    setActive(window.location.pathname);
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white  fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <span
          className="ml-2 font-bold text-2xl tracking-tighter cursor-pointer"
          onClick={scrollToTop}
        >
          Dav<span className="text-orange-400">.dev</span>
        </span>
      </div>
      <div className="flex items-center ml-auto space-x-10">
        <ul className={`list-none sm:flex flex-row ${toggle ? '' : 'hidden'}`}>
          <li
            className={`${active === '/' ? 'text-orange-400' : 'text-black'} hover:text-orange-400 font-bold mr-12`}
          >
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Home
            </ScrollLink>
          </li>
          <li
            className={`${active === '/About' ? 'text-orange-400' : 'text-neutral-600'} hover:text-orange-400 font-bold mr-12`}
          >
            <ScrollLink
              to="About"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              About
            </ScrollLink>
          </li>
          <li
            className={`${active === '/Skills' ? 'text-orange-400' : 'text-neutral-600'} hover:text-orange-400 font-bold mr-12`}
          >
            <ScrollLink
              to="Skills"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Skills
            </ScrollLink>
          </li>
          <li
            className={`${active === '/Projects' ? 'text-orange-400' : 'text-neutral-600'} hover:text-orange-400 font-bold mr-12`}
          >
            <ScrollLink
              to="Projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Projects
            </ScrollLink>
          </li>
          <li
            className={`${active === '/Contacts' ? 'text-orange-400' : 'text-neutral-600'} hover:text-orange-400 font-bold mr-12`}
          >
            <ScrollLink
              to="Contacts"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Contacts
            </ScrollLink>
          </li>
        </ul>

        <div className="sm:hidden">
          <button
            className="text-gray-600 hover:text-orange-400"
            onClick={handleToggle}
            aria-label="Toggle Menu"
          >
            {toggle ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
