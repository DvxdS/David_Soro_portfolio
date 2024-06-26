import React from 'react';
import Hero from '../assets/desk.png';
import { Link as ScrollLink} from 'react-scroll';
import './home.css';

const About = () => {
  return (
    <div className="relative flex flex-col lg:flex-row ml-8 mt-10 pt-10" id="About">
  <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-3xl font-bold text-cyan-600">
    About Me
  </h2>
  <div className="mt-12 flex flex-col lg:flex-row">
    <img src={Hero} alt="hero" className='w-full lg:w-80 h-80 lg:order-1 mb-5 lg:mb-0 ml-5' />
    <div className="ml-10 lg:w-1/2">
          <h2 className='text-cyan-800 font-semibold'>A dedicated A Software Engineer, from Côte d’Ivoire</h2>
          <span className="text-sm break-words">
            From marketing to software engineering, I am David Soro, a proud 23-year-old Ivorian developer.
            Passionate about the tech industry, I discovered web development and instantly fell in love.
          </span>
          <span className="text-sm break-words">
            <br /> I made a decision to learn and master the art of developing efficient applications that cater to
            the daily needs of the population.
          </span>
          <span className="text-sm break-words">
            <br /> Beyond my tech pursuits, I find immense joy in watching and playing football. As a sports enthusiast,
            I embrace various athletic endeavors.
          </span>
          <span className="text-sm break-words">
            <br /> Additionally, I have a flair for culinary arts and love preparing delicious meals after a coding session.
          </span>
          <h2 className='text-neutral-600 font-semibold mt-5'>Let's work together!</h2>

          <div>
          <ScrollLink to="Contacts" smooth={true} duration={500}>
          <button className="inline-block rounded-full bg-cyan-950 text-white text-xs px-8 pb-3 pt-2.5 font-medium mt-3 shadow-[0_4px_9px_-4px_#C25802] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(194,88,2,0.3),0_4px_18px_0_rgba(194,88,2,0.2)]">
                Hire me
            </button>
       </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
