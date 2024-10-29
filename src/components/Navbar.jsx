import React, { useState } from "react";

const Navbar = () => {
  const [MenuOpen, SetMenuOpen] = useState(false);
  const togglemenu = () => {
    SetMenuOpen(!MenuOpen);
  };
  return (
    // -Box
    <div className="sticky top-0 left-0 w-full z-50 shadow-2xl break-words bg-white phone:p-5 laptop:px-10 desktop:px-20">
      {/* --Box */}
      <div className="flex justify-between h-auto">
        {/* ---Box */}
        <div className="font-logoFont">
          <span className="text-xl font-semibold">SARUT.</span>
          <span className="text-xl text-sky-500 font-semibold">DEV</span>
        </div>
        {/* ---Box Menu For Laptop Up */}
        <ul className="hidden font-semibold text-gray-600 laptop:flex laptop:items-center laptop:gap-8">
          <li className="">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              HOMEPAGE
            </a>
          </li>
          <li className="">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              ABOUT
            </a>
          </li>
          <li className="">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              FEATURES
            </a>
          </li>
          <li className="">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              WEBSITE
            </a>
          </li>
          <li className="">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              CONTACT
            </a>
          </li>
        </ul>

        {/* ---Box Menu Button */}
        <button
          id="menu-toggle"
          className="text-black laptop:hidden"
          onClick={togglemenu}
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {/* --Box Menu For Phone Up */}
      <ul
        className={`font-semibold flex flex-col justify-around text-sm text-start mt-16
          absolute top-0 left-0 right-0 w-full h-[60vh] bg-gray-800 text-white z-10 
          transition-all duration-500 ease-in-out overflow-hidden ${
            MenuOpen ? "max-h-96" : "max-h-0"
          }
         laptop:hidden`}
      >
        <li className="my-3 ml-5">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            HOMEPAGE
          </a>
        </li>
        <li className="my-3 ml-5">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            ABOUT
          </a>
        </li>
        <li className="my-3 ml-5">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            FEATURES
          </a>
        </li>
        <li className="my-3 ml-5">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            WEBSITE
          </a>
        </li>
        <li className="my-3 ml-5">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
