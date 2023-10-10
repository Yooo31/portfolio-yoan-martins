import Image from 'next/image';
import yoan from "../images/yoan-martins.svg";
import React from 'react';

const Info = () => {
  return (
    <>
      <div className="min-h-full flex items-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image className="max-w-sm rounded-lg shadow-2xl" src={yoan} alt="Yoan Martins" width={200} height={200} />

          <div className='flex flex-col'>
            <div className='flex justify-start'>
              <div>
                <h1 id="typing" className="text-5xl font-bold overflow-hidden whitespace-nowrap relative">Hello World !!!</h1>
              </div>
            </div>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info;