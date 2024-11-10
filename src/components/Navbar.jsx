import React, { useState } from "react";

const Navbar = () => {
  const [MenuOpen, SetMenuOpen] = useState(false);
  const toggleMenu = () => {
    SetMenuOpen(!MenuOpen);
  };
  return (
    // -box main
    <section className="sticky top-0 left-0 w-full z-50 shadow-2xl break-words bg-white phone:p-5 laptop:px-10 desktop:px-20">
      {/* --Box */}
      <section className="flex justify-between h-auto">
        {/* ---box logo */}
        <div className="font-logoFont">
          <span className="text-xl font-semibold">SARUT.</span>
          <span className="text-xl text-sky-500 font-semibold">DEV</span>
        </div>
        {/* ---box menu for laptop up */}
        <ul className="hidden font-semibold text-gray-600 laptop:flex laptop:items-center laptop:gap-8">
          {["HOMEPAGE", "FEATURES", "WEBSITE", "CONTACT"].map((item) => (
            <li key={item}>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* ---box menu button */}
        <button
          id="menu-toggle"
          className="text-black laptop:hidden"
          onClick={toggleMenu}
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
      </section>
      {/* --box menu for phone up */}
      <ul
        className={`font-semibold flex flex-col justify-around text-sm text-start mt-16
          absolute top-0 left-0 right-0 w-full h-[60vh] bg-gray-800 text-white z-10 
          transition-all duration-500 ease-in-out overflow-hidden ${
            MenuOpen ? "max-h-96" : "max-h-0"
          }
         laptop:hidden`}
      >
        {["HOMEPAGE", "FEATURES", "WEBSITE", "CONTACT"].map((item) => (
          <li className="my-3 ml-5" key={item}>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Navbar;
