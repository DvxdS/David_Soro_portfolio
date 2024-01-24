import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';



const Contacts = () => {
  const [emailStatus, setEmailStatus] = useState(null);

  useEffect(() => {
    emailjs.init('TiTbhLiW8AEy4peYf');
  }, []);
  
  
  const sendEmail = (e) => {
     e.preventDefault();
    console.log('sendEmail function is being called.');
  
    // Replace these values with your actual EmailJS Service ID and Template ID
    const serviceId = 'service_hdthgfr';
    const templateId = 'template_reakhc9';
  
    // Get the form element
    const form = e.target;
    
    
  
    // Send email using EmailJS
    emailjs.sendForm(serviceId, templateId, form)
      .then((response) => {
        console.log('Email sent successfully:', response);
        form.reset();
        setEmailStatus('succes')
        
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setEmailStatus('error')
      });
  };
  
  return (
    
    <div id="Contacts">


<div class="container my-30 mx-auto md:px-6  ">

  <section class="mb-32">
    <div class="flex justify-center">
      <div class="text-center md:max-w-xl lg:max-w-3xl">
        <h2 class="mb-12 px-6 text-3xl font-bold text-orange-400">Contact me</h2>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
        <form onSubmit={sendEmail}>
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input type="text"
              class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
              id="exampleInput90" placeholder="Name" name="name" />
            <label
              class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              for="exampleInput90" >Name
            </label>
          </div>
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input type="email"
              class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput91" placeholder="Email address" name="email" />
            <label
              class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              for="exampleInput91" email="email">Email 
            </label>
          </div>
          <div class="relative mb-6" data-te-input-wrapper-init>
            <textarea
              class="peer block min-h-[auto] w-full rounded border-2   bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
            <label for="exampleFormControlTextarea1"
              class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Message</label>
          </div>
          <div class="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
            <input
              class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="checkbox" value="" id="exampleCheck96" checked name="from_name" />
            <label class="inline-block pl-[0.15rem] hover:cursor-pointer" for="exampleCheck96" message="message">
              Send me a copy of this message
            </label>
          </div>
          <button type="submit" data-te-ripple-init data-te-ripple-color="light"
            class="mb-6 inline-block w-full rounded bg-orange-400 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#C25802] transition duration-150 ease-in-out hover:bg-orange-500 hover:shadow-[0_8px_9px_-4px_rgba(194, 88, 2, 0.3),0_4px_18px_0_rgba(194, 88, 2, 0.2)] focus:bg-orange-500 focus:shadow-[0_8px_9px_-4px_rgba(194, 88, 2, 0.3),0_4px_18px_0_rgba(194, 88, 2, 0.2)] focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-[0_8px_9px_-4px_rgba(194, 88, 2, 0.3),0_4px_18px_0_rgba(194, 88, 2, 0.2)] dark:shadow-[0_4px_9px_-4px_rgba(194, 88, 2, 0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(194, 88, 2, 0.2),0_4px_18px_0_rgba(194, 88, 2, 0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(194, 88, 2, 0.2),0_4px_18px_0_rgba(194, 88, 2, 0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(194, 88, 2, 0.2),0_4px_18px_0_rgba(194, 88, 2, 0.1)]">
            Send
          </button>
        </form>
        {emailStatus === 'success' && (
            <p className="text-green-500">Email sent successfully!</p>
          )}
          {emailStatus === 'error' && (
            <p className="text-red-500">Error sending email. Please try again later.</p>
          )}
      </div>
      <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
        <div class="flex flex-wrap">
          <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div class="flex items-start">
              <div class="shrink-0">
                <div class="inline-block rounded-md bg-orange-100 p-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6 text-orange-400">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                  </svg>
                </div>
              </div>
              <div class="ml-6 grow">
                <p class="mb-2 font-bold dark:text-white">
                  Phone
                </p>
                <p class="text-neutral-500">
                +250790003964
                </p>
                
              </div>
            </div>
          </div>
          <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div class="flex items-start">
              <div class="shrink-0">
                <div class="inline-block rounded-md bg-orange-100 p-4 text-primary">
                <div class="shrink-0">
               
                  <FaEnvelope className="h-6 w-6 text-orange-400" />
               
              </div>
                </div>
              </div>
              <div class="ml-6 grow">
                <p class="mb-2 font-bold dark:text-white">
                  Email
                </p>
                <p class="text-neutral-500 dark:text-neutral-200">
                  davidsoro595@gmail.com
                </p>
                <p class="text-neutral-500 dark:text-neutral-200">
                  
                </p>
              </div>
            </div>
          </div>
          <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div class="align-start flex">
              <div class="shrink-0">
                <div class="inline-block rounded-md bg-orange-100 p-4 text-primary">
                <div class="shrink-0">
               
                  <IoLocationSharp className="h-6 w-6 text-orange-400" />
               
              </div>
                </div>
              </div>
              <div class="ml-6 grow">
                <p class="mb-2 font-bold dark:text-white">Meet me</p>
                <p class="text-neutral-500 dark:text-neutral-200">
                 Kigali-Rwanda
                </p>
                <p class="text-neutral-500 dark:text-neutral-200">
                  
                </p>
              </div>
            </div>
          </div>
          <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div class="align-start flex">
              <div class="shrink-0">
                <div class="inline-block rounded-md bg-orange-100 p-4 text-primary">
                <div class="shrink-0">
               
                  <FaLinkedinIn className="h-6 w-6 text-orange-400" />
               
              </div>
                </div>
              </div>
              <div class="ml-6 grow">
                <p class="mb-2 font-bold dark:text-white">Linkedin</p>
                <p class="text-neutral-500 dark:text-neutral-200">
                  David Soro
                </p>
                <p class="text-neutral-500 dark:text-neutral-200">
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>   
    </div>
    
  )
}

export default Contacts