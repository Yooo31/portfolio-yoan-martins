import Image from 'next/image';
import yoan from "../images/yoan-martins.svg";
import React from 'react';

const Info = () => {
  return (
    <>
      <div className="min-h-full flex items-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <Image className="max-w-sm rounded-lg shadow-2xl" src={yoan} alt="Yoan Martins" width={200} height={200} />

          <div>
            <h1 className="text-5xl font-bold">Hello World !!!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info;