import Image from 'next/image';
import yoan from "../images/yoan-martins.svg";
import React from 'react';

const Projets = () => {
  return (
    <>
      <div className="min-h-full flex items-start mt-32">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image className="max-w-sm rounded-lg shadow-2xl" src={yoan} alt="Yoan Martins" width={200} height={200} />
        </div>
      </div>
    </>
  )
}

export default Projets;