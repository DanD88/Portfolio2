import React from "react";
import { useState } from "react";
import "../index.css";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="w-full flex flex-wrap bg-black items-center justify-between px-2 py-3 navbar-expand-lg">
      <a
        class="text-lg font-bold leading-relaxed inline-block mx-4 py-2 whitespace-no-wrap uppercase text-white"
        href="#about"
        alt="logo"
      >
        Daniel Davidson
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden mx-8">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] my-8">
              <li className="boreder-b border-gray-400 my-4 uppercase hover:opacity-75">
                <a href="#skills">Skills</a>
              </li>
              <li className="boreder-b border-gray-400 my-4 uppercase hover:opacity-75">
                <a href="#projects">Projects</a>
              </li>
              <li className="boreder-b border-gray-400 my-4 uppercase hover:opacity-75">
                <a href="#contact">Contact</a>
              </li>
              <li className="boreder-b border-gray-400 my-4 uppercase hover:opacity-75">
                <a href="#resume">Resume</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex mx-8">
          <li className="nav-item text-md uppercase leading-snug text-white hover:opacity-75 hover:text-blue-700">
            <a href="#skills">Skills</a>
          </li>
          <li className="nav-item text-md uppercase leading-snug text-white hover:opacity-75 hover:text-blue-700">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item text-md uppercase leading-snug text-white hover:opacity-75 hover:text-blue-700">
            <a href="#contact">Contact</a>
          </li>
          <li className="nav-item text-md uppercase leading-snug text-white hover:opacity-75 hover:text-blue-700">
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
      <style>
        {`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        position: absolute;
        width: 100%;
        height: auto;
        top: 0;
        left: 0; 
        background: #000000;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
`}
      </style>
    </div>
  );
}
