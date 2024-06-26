import React from 'react'
import Tracker from '../assets/ML.png';
import Car from '../assets/Agritrack_landing.png';
import Heal from '../assets/healtech.png';
import { FaGithub } from 'react-icons/fa';
const projects = () => {
  return (
    <div class="container my-24 mx-auto md:px-6" id="Projects">
  
  <section class="mb-32 text-center lg:text-left">
    <h2 class="mb-12 text-center text-3xl font-bold text-cyan-600">
      Projects 
    </h2>
    

    <div class="grid gap-x-6 lg:grid-cols-3">
      <div class="mb-12 lg:mb-0">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
          <img src={Tracker} class="w-full" />
          <a href="#!">
            <div
              class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
          </a>
        </div>
        <h5 class="mb-4 text-lg font-bold text-cyan-800">Agri Model</h5>
        <div class="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-start">
        <div class="shrink-0">
                <div class="">
                
               
                  <FaGithub className="h-6 w-6 text-black" />
               
              </div>
                </div>
          <a href="">Source Code</a>
        </div>
        <p class="text-neutral-500 dark:text-neutral-300">
          A Machine Learning App to predict Cocoa Price and Cofee price In Côte d'Ivoire
        </p>
      </div>

      <div class="mb-12 lg:mb-0">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
          <img src={Car} class="w-full" />
          <a href="#!">
            <div
              class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
          </a>
        </div>

        <h5 class="mb-4 text-lg font-bold  text-cyan-800">Agritrack</h5>
        <div class="mb-4 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 lg:justify-start">
        <div class="">
                
               
                <FaGithub className="h-6 w-6 text-black" />
             
            </div>
          <a href="">Source Code</a>
        </div>
        <p class="text-neutral-500 dark:text-neutral-300">
        Agritrack is a web-based application designed to empower smallholder 
        farmers by giving them the tools to track their crops effectively.
        </p>
      </div>

      <div class="mb-0">
        <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
          <img src={Heal} class="w-full" />
          <a href="#!">
            <div
              class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
          </a>
        </div>

        <h5 class="mb-4 text-lg font-bold  text-cyan-800">HealTech</h5>
        <div class="mb-4 flex items-center justify-center text-sm font-medium text-warning lg:justify-start">
        <div class="">
                
               
                <FaGithub className="h-6 w-6 text-black" />
             
            </div>
          <a href="https://github.com/abraham-diress/HealTech">Source Code</a>
        </div>
        <p class="text-neutral-500 dark:text-neutral-300">
        A mobile app enabling users to find nearby hospitals, providing essential information 
        about facilities and doctors for quick access to healthcare resources.
        </p>
      </div>
    </div>
  </section>
  
</div>
  )
}

export default projects