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
      <div className="flex items-center justify-center w-full">
        <span className="font-bold text-center text-lg mb-10 text-orange-400">My Tech Stack</span>
      </div>

      <div className="flex">
        {/* Left grid - Languages */}
        <div className="flex flex-col">
          <span className="font-bold text-center text-orange-400 ml-10 text-xl flex items-center">
            Languages{' '}
            <FaCode
              className="mr-2 text-orange-400 ml-2"
              style={{ width: '30px', height: '30px', marginLeft: '5px' }}
            />
          </span>
          <div className="grid grid-cols-2 gap-4 mt-10 ml-10">
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
        <div className="flex flex-col ml-auto">
          <span className="font-bold text-center text-orange-400 ml-10 text-xl flex items-center">
            Tools{' '}
            <FaTools
              className="mr-2 text-orange-400 ml-2"
              style={{ width: '30px', height: '30px', marginLeft: '5px' }}
            />
          </span>
          <div className="grid grid-cols-2 gap-4 mt-10 mr-10">
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
