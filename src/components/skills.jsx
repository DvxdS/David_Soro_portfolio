import React from 'react';
import { FaDesktop, FaServer } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="p-8 md:p-20 bg-white mt-10" id="Skills">
     <h2 class="mb-12 text-center text-3xl font-bold text-orange-400">
      My Skills 
    </h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 p-4 mb-4 md:mb-0 md:mr-4 bg-blue-100 rounded-lg">
          <FaDesktop className="text-4xl mb-2 text-blue-400 mx-auto" />
          <h2 className="text-lg font-semibold mb-2 text-center md:text-left">Frontend Development</h2>
          <div className="flex flex-wrap justify-center md:justify-start">
            <div className="m-2 p-2 bg-blue-200 rounded-full">React.js</div>
            <div className="m-2 p-2 bg-blue-200 rounded-full">HTML5</div>
            <div className="m-2 p-2 bg-blue-200 rounded-full">CSS</div>
            <div className="m-2 p-2 bg-blue-200 rounded-full">JavaScript</div>
            <div className="m-2 p-2 bg-blue-200 rounded-full">TailwindCSS</div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 bg-green-100 rounded-lg">
          <FaServer className="text-4xl mb-2 text-green-400 mx-auto" />
          <h2 className="text-lg font-semibold mb-2 text-center md:text-left">Backend Development</h2>
          <div className="flex flex-wrap justify-center md:justify-start">
            <div className="m-2 p-2 bg-green-200 rounded-full">Node.js</div>
            <div className="m-2 p-2 bg-green-200 rounded-full">Express.js</div>
            <div className="m-2 p-2 bg-green-200 rounded-full">Django</div>
            <div className="m-2 p-2 bg-green-200 rounded-full">REST API</div>
            <div className="m-2 p-2 bg-green-200 rounded-full">SQL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

