import React from 'react';
import { FaCode, FaTools } from 'react-icons/fa';
import Python from '../assets/python.png';
import Reactp from '../assets/react.png';
import java from '../assets/java.png';
import Js from '../assets/js.png';
import vscode from '../assets/vscode.png';
import notion from '../assets/notion.png';
import github from '../assets/github.png';

import './stack.css';

const Stack = () => {
  return (
    <div className="p-20 bg-white mt-10 pt-10">
      <h2 class="mb-12 text-center text-3xl font-bold text-cyan-600">
      My Tech Stack
    </h2>

      <div className="flex flex-col md:flex-row">
        {/* Left grid - Languages */}
        <div className="flex flex-col md:w-1/2">
  <div className="flex justify-center items-center mb-4">
    <span className="font-bold text-center text-cyan-600 text-xl flex items-center">
      Languages{' '}
      <FaCode
        className="mr-2 text-cyan-600 ml-2"
        style={{ width: '30px', height: '30px', marginLeft: '5px' }}
      />
    </span>
  </div>
  <div className="grid grid-cols-2 gap-2 mt-10 md:ml-10 grid-container">
    <div className="w-20 h-20">
      <img src={java} alt="java" className="logo-bounce" />
    </div>
    <div className="w-20 h-20">
      <img src={Python} alt="python" className="logo-bounce" />
    </div>
    <div className="w-20 h-20">
      <img src={Js} alt="js" className="logo-bounce" />
    </div>
    <div className="w-20 h-20">
      <img src={Reactp} alt="react" className="logo-bounce" />
    </div>
  </div>
</div>


        {/* Right grid - Tools */}
        <div className="flex flex-col md:w-1/2">
  <div className="flex justify-center items-center mb-4">
    <span className="font-bold text-center text-cyan-600 text-xl flex items-center">
      Tools{' '}
      <FaTools
        className="mr-2 text-cyan-600 ml-2"
        style={{ width: '30px', height: '30px', marginLeft: '5px' }}
      />
    </span>
  </div>
  <div className="grid grid-cols-2 gap-2 mt-10 md:mr-10">
    <div className="w-20 h-20">
      <img src={vscode} alt="visual studio code" className="logo-bounce" />
    </div>
    <div className="w-20 h-20">
      <img src={Python} alt="python" className="logo-bounce" />
    </div>
    <div className="w-20 h-20">
      <img src={github} alt="github" className="logo-bounce" />
    </div>
    <div className="w-20 h-20">
      <img src={notion} alt="notion" className="logo-bounce" />
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Stack;