import Image from 'next/image';
import yoan from "../images/yoan-martins.svg";
import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Accueil = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 10,
    });
  }, []);

  return (
    <>
      <div className="min-h-full flex items-center mb-32">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-col">
            <Image data-aos="fade-down-left" className="max-w-sm rounded-lg shadow-2xl" src={yoan} alt="Yoan Martins" width={200} height={200} />
            <p className="text-center py-6 text-sm md:text-base mr-0 underline underline-offset-4 transition-transform hover:scale-105"><a href="/cv-martins-yoan-2024.pdf" download>Download CV</a></p>
          </div>

          <div className='flex flex-col'>
            <div className='flex justify-start'>
              <div>
                <h2 id="typing" className="text-2xl md:text-5xl font-bold overflow-hidden whitespace-nowrap relative">Hello World !!!</h2>
              </div>
            </div>
            <p className="py-6 text-sm md:text-base mr-0 md:mr-20">My name is Yoan Martins, I am 20 years old. I am studying to become a full-stack developer. I am passionate about IT and rugby. See you soon !</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Accueil;