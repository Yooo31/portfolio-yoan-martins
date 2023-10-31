'use client';
import React, { useState } from "react";
import Link from "@/node_modules/next/link";
import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from 'react-icons/bs';

interface TopLeftProps {
  setSelectedComponent: (component: string) => void; // Spécifiez le type ici
}

const Header: React.FC<TopLeftProps> = ({ setSelectedComponent }) => {
  return (
    <header className="z-50">
      <div className="navbar bg-base-100 items-start">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={() => setSelectedComponent('Accueil')}>Accueil</a>
              </li>
              <li>
                <a onClick={() => setSelectedComponent('Technos')}>Technos</a>
              </li>
              <li>
                <a onClick={() => setSelectedComponent('Projets')}>Projets</a>
              </li>
              <li>
                <a onClick={() => setSelectedComponent('Contact')}>Contact</a>
              </li>
              <li className='px-4 ml-5'>
                <Link target="_blank" href="https://github.com/Yooo31/"><BsGithub className="transition-transform hover:scale-125" cursor="pointer" size={25}/></Link>
              </li>
              <li className='px-4 ml-5'>
                <Link target="_blank" href="https://www.linkedin.com/in/yoan-martins/"><BsLinkedin className="transition-transform hover:scale-125" cursor="pointer" size={25}/></Link>
              </li>
              <li className='px-4 ml-5'>
                <Link target="_blank" href="mailto:mrts.yoan@gmail.com"><BsFillEnvelopeFill className="transition-transform hover:scale-125" cursor="pointer" size={25}/></Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal py-0 px-1">
            <li>
              <a className="py-0 transition-transform hover:scale-105" onClick={() => setSelectedComponent('Accueil')}>Accueil</a>
            </li>
            <li>
              <a className="py-0 transition-transform hover:scale-105" onClick={() => setSelectedComponent('Technos')}>Technos</a>
            </li>
            <li>
              <a className="py-0 transition-transform hover:scale-105" onClick={() => setSelectedComponent('Projets')}>Projets</a>
            </li>
            <li>
              <a className="py-0 transition-transform hover:scale-105" onClick={() => setSelectedComponent('Contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
