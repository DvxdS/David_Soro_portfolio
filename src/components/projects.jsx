import React from 'react'
import Tracker from '../assets/tracker.png';
import Car from '../assets/car.png';
import Heal from '../assets/healtech.png';
import { FaGithub } from 'react-icons/fa';
const projects = () => {
  return (
    <div class="container my-24 mx-auto md:px-6" id="Projects">
  
  <section class="mb-32 text-center lg:text-left">
    <h2 class="mb-12 text-center text-3xl font-bold text-orange-400">
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
        <h5 class="mb-4 text-lg font-bold text-orange-400">Expenses Tracker</h5>
        <div class="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-start">
        <div class="shrink-0">
                <div class="">
                
               
                  <FaGithub className="h-6 w-6 text-black" />
               
              </div>
                </div>
          Hot news
        </div>
        <p class="text-neutral-500 dark:text-neutral-300">
        A money tracker web app that allows the user to create an accounts and set up financial goal 
        then enter his expenses then got recommendation on how to achieve his goal
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

        <h5 class="mb-4 text-lg font-bold text-orange-400">Car rent</h5>
        <div class="mb-4 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 lg:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
          </svg>
          Experiment
        </div>
        <p class="text-neutral-500 dark:text-neutral-300">
        "A user-friendly app facilitating car rentals in town. 
        Rent a car hassle-free or earn by listing yours for rent."
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

        <h5 class="mb-4 text-lg font-bold text-orange-400">HealTech</h5>
        <div class="mb-4 flex items-center justify-center text-sm font-medium text-warning lg:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          Family friendly
        </div>
        <p class="text-neutral-500 dark:text-neutral-300">
        "A mobile app enabling users to find nearby hospitals, providing essential information 
        about facilities and doctors for quick access to healthcare resources."
        </p>
      </div>
    </div>
  </section>
  
</div>
  )
}

export default projects