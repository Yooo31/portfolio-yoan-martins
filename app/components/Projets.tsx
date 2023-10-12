import Image from "next/image";
import yoan from "../images/yoan-martins.svg";
import React from "react";

const Projets = () => {
  return (
    <>
    <div className="min-h-full flex flex-wrap justify-evenly mt-32">
        <div className="project-card bg-indigo-500 rounded-xl h-[200px] w-[300px] md:w-[220px] lg:w-[300px]"></div>
        <div className="project-card bg-indigo-500 rounded-xl h-[200px] w-[300px] md:w-[220px] lg:w-[300px]"></div>
        <div className="project-card bg-indigo-500 rounded-xl h-[200px] w-[300px] md:w-[220px] lg:w-[300px]"></div>
        <div className="project-card bg-indigo-500 rounded-xl h-[200px] w-[300px] md:w-[220px] lg:w-[300px]"></div>
        <div className="project-card bg-indigo-500 rounded-xl h-[200px] w-[300px] md:w-[220px] lg:w-[300px]"></div>
        <div className="project-card bg-indigo-500 rounded-xl h-[200px] w-[300px] md:w-[220px] lg:w-[300px]"></div>
      </div>
    </>
  );
};

export default Projets;
