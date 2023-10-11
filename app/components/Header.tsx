'use client';
import React, { useState } from "react";
import Link from "@/node_modules/next/link";

interface TopLeftProps {
  setSelectedComponent: (component: string) => void; // Spécifiez le type ici
}

const Header: React.FC<TopLeftProps> = ({ setSelectedComponent }) => {
  return (
    <header>
      <div className="navbar bg-base-100">
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
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
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
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
