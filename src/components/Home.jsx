import React, { useRef, useState, useEffect } from 'react';
import Hero from '../assets/hero.png';
import Hand from '../assets/hand.png';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link as ScrollLink} from 'react-scroll';
import './home.css'; // Import custom CSS file for styling and animations

const Home = () => {
  const [spins, setSpins] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    setSpins(0); // Reset the spin count
    imageRef.current.classList.add('spin-on-hover'); // Apply the spin animation class
  };

  const handleMouseLeave = () => {
    imageRef.current.classList.remove('spin-on-hover'); // Remove the spin animation class
  };

  const handleTwitterClick = () => {
    window.open('https://twitter.com/TheLazy_Codeur', '_blank');
  };
  
  const handleGitHubClick = () => {
    window.open('https://github.com/DvxdS', '_blank');
  };
  
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/david-soro-b19128227/', '_blank');
  };

  const handleAnimationEnd = () => {
    setSpins(spins + 1); // Increment the spin count

    // Check if the desired number of spins is reached
    if (spins >= 5) {
      imageRef.current.classList.remove('spin-on-hover'); // Remove the spin animation class
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home">
      <div className="p-8 md:grid md:grid-cols-2 md:gap-8">
        <div className={`md:ml-8 ${isMobile ? 'md:order-2' : ''}`}>
          {/* Content for larger screens */}
          <h2 className="mt-10 font-semibold text-lg text-neutral-600 flex items-center">
            Hi there, I am{' '}
            <img
              src={Hand}
              alt="hand"
              className="hand-image shake-animation"
              style={{ width: '30px', height: '30px', marginLeft: '5px' }}
            />
          </h2>
          <span className="mt-5 text-4xl md:text-7xl text-orange-400 font-extrabold tracking-wide">
            <span className="animated-letter">D</span>
            <span className="animated-letter">a</span>
            <span className="animated-letter">v</span>
            <span className="animated-letter">i</span>
            <span className="animated-letter">d</span>
            &nbsp;
            <span className="animated-letter">S</span>
            <span className="animated-letter">o</span>
            <span className="animated-letter">r</span>
            <span className="animated-letter">o</span>
          </span>
          <h2 className="mt-3 font-semibold text-lg text-neutral-600">A Full-stack web developer</h2>
          <div className="mt-5">
            <p className="text-sm md:text-base">
              Focusing on creating effective web apps that fit the user's needs and solve real-world problems
            </p>
            <h2 className="mt-3 font-semibold text-lg text-neutral-600">Let's talk!</h2>
          </div>
          <div>
          <ScrollLink to="Contacts" smooth={true} duration={500}>
        <button className="inline-block rounded-full bg-orange-400 text-white text-xs px-6 pb-2 pt-2.5 font-medium mt-3 shadow-[0_4px_9px_-4px_#C25802] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(194,88,2,0.3),0_4px_18px_0_rgba(194,88,2,0.2)]">
          Get in touch
        </button>
      </ScrollLink>
            <ScrollLink to="Projects" smooth={true} duration={500}>
          <button className="inline-block rounded-full border-2 border-orange-200 text-orange-400 text-xs px-6 pb-2 pt-2.5 font-medium mt-3 shadow-[0_4px_9px_-4px_#C25802] transition duration-150 ease-in-out hover:bg-orange-100 hover:text-white hover:shadow-none w-[130px] md:w-auto ml-5">
          Projects
          </button>
      </ScrollLink>
      <div className="flex justify-start mt-5">
       <span onClick={handleTwitterClick} style={{ cursor: 'pointer' }}>
        <FaTwitter className="text-blue-500 text-2xl mx-2 hover:text-blue-700" />
       </span>
      <span onClick={handleLinkedInClick} style={{ cursor: 'pointer' }}>
      <FaLinkedin className="text-blue-500 text-2xl mx-2 hover:text-blue-700" />
      </span>
      <span onClick={handleGitHubClick} style={{ cursor: 'pointer' }}>
      <FaGithub className="text-gray-700 text-2xl mx-2 hover:text-gray-900" />
      </span>
      </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative">
          <img
            src={Hero}
            alt="hero"
            className="max-w-full mx-auto md:max-w-xs"
            ref={imageRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onAnimationEnd={handleAnimationEnd}
          />
          {isMobile && (
            <img
              src={Hero}
              alt="hero"
              className="max-w-full mx-auto mt-8 absolute top-0 left-0"
              ref={imageRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onAnimationEnd={handleAnimationEnd}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;

