import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaDownload,FaTimes, FaBars } from 'react-icons/fa';
import Cv from '../assets/David_Soro_CV.pdf';
 const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
        setActive(location.pathname);
    }, [location]);

    const handleToggle = () => {
        setToggle(!toggle);
      };
   
    return(
        <nav className="flex items-center justify-between p-4 bg-white">
        <div className="flex items-center">

        <span className="ml-2 font-bold text-2xl tracking-tighter">Dav<span className="text-orange-400">.dev</span></span>
        </div>
        <div className='flex items-center ml-auto space-x-10   '>
        <ul className={`list-none sm:flex flex-row ${toggle ? '' : 'hidden'}`}>
        <li className={`${active === '/' ? 'text-orange-400' : 'text-black'} hover:text-orange-400 font-bold mr-12`}>
        <Link to="home" smooth={true} duration={500} offset={-70}>
              Home
              </Link>
          </li>
        <li className={`${active === '/About' ? 'text-orange-400' : 'text-neutral-600'} hover:text-orange-400 font-bold mr-12`}>
            <Link to="/About">About</Link>
        </li>
        <li className={`${active === '/Skills' ? 'text-orange-400' : 'text-neutral-600'} hover:text-orange-400 font-bold mr-12`}>
            <Link to="/Skills">Skills</Link>
        </li>
        <li className={`${active === '/Projects' ? 'text-orange-400' : 'text-neutral-600'} hover:text-orange-400 font-bold mr-12`}>
            <Link to="/Projects">Projects</Link>
        </li>
        <li className={`${active === '/Contacts' ? 'text-orange-400' : 'text-neutral-600'} hover:text-orange-400 font-bold mr-12`}>
            <Link to="/Contacts">Contacts</Link>
        </li>

            <div className="flex items-center">
                <FaDownload className="mr-2 text-orange-400" />
                <a href={Cv} download className="text-orange-400 font-bold">
                CV
                </a>
            </div>
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
    )

 }

 export default Navbar;