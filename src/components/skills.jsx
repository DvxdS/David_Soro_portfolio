import React from 'react';
import { FaDesktop, FaServer } from 'react-icons/fa'; // Assuming FaDesktop is a monitor icon

const Skills = () => {
  return (
    <div className="p-20 bg-white mt-10 pt-10">
      <div className="flex items-center justify-center w-full">
        <span className="font-bold text-center text-lg mb-10 text-orange-400">Skills</span>
      </div>
      <div className='flex items-center justify-center w-full'>
        <span className="text-center text-sm mb-10">
        Discover what i can offer and how i can help in a Web Development Project
        </span>

      </div>

      <div className="flex">
        {/* Frontend Skills */}
        <div className="w-1/2 p-4 bg-blue-100 rounded-lg mr-4">
          <FaDesktop className="text-4xl mb-2 text-blue-400" />
          <h2 className="text-lg font-semibold mb-2">Frontend Development</h2>
          <div className="flex flex-wrap">
            <div className="m-2 p-2 bg-blue-200 rounded-full">React.js</div>
            <div className="m-2 p-2 bg-blue-200 rounded-full">HTML5</div>
            <div className="m-2 p-2 bg-blue-200 rounded-full">CSS</div>
            <div className="m-2 p-2 bg-blue-200 rounded-full">JavaScript</div>
            <div className="m-2 p-2 bg-blue-200 rounded-full">TailwindCSS</div>
            
          </div>
        </div>

        {/* Backend Skills */}
        <div className="w-1/2 p-4 bg-green-100 rounded-lg">
          <FaServer className="text-4xl mb-2 text-green-400" />
          <h2 className="text-lg font-semibold mb-2">Backend Development</h2>
          <div className="flex flex-wrap">
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
