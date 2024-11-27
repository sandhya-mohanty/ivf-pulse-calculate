import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray shadow">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="#"><span className="border bg-black text-white px-4 py-2" >IVF</span> Pulse</a>
        </div>

        {/* Navigation Menu for Large Screens */}
        <nav className="hidden md:flex space-x-6">
          <a href="home" className="text-gray-600 hover:text-gray-900">
            Donor Programmer
          </a>
          <a href="fertility" className="text-gray-600 hover:text-gray-900">
            Fertility Preservation
          </a>
          <a href="advance" className="text-gray-600 hover:text-gray-900">
            Advanced Treatments
          </a>
          <a href="infertility" className="text-gray-600 hover:text-gray-900">
            Infertility Treatments
          </a>
          <a href="ivf" className="text-gray-600 hover:text-gray-900">
            IVF Testing
          </a>
          <a href="about" className="text-gray-600 hover:text-gray-900">
            About Us
          </a>
          <a className="bg-red-500 hover:bg-red-600 text-white p-2  rounded-lg text-sm flex items-center ">
           Talk to Us <span className="px-2 "><IoIosArrowRoundForward /></span>

          </a>

        </nav>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            <a
              href="home"
              className="text-gray-600 hover:text-gray-900 py-2" 
            >
                Donor Programmer
            </a>
            <a
              href="fertility"
              className="text-gray-600 hover:text-gray-900 py-2 "
            >
            Fertility Preservation
                          
            </a>
            <a
              href="advanced"
              className="text-gray-600 hover:text-gray-900 py-2"
            >
            Advanced Treatments

            </a>
            <a
              href="infertility"
              className="text-gray-600 hover:text-gray-900 py-2"
            >
            Infertility Treatments

            </a>
            <a
              href="ivf"
              className="text-gray-600 hover:text-gray-900 py-2"
            >
            IVF Testing

            </a>
            <a
              href="about"
              className="text-gray-600 hover:text-gray-900 py-2"
            >
            About Us

            </a>
            <a className="bg-red-500 hover:bg-red-600 text-white p-2  rounded-lg text-sm flex items-center ">
            Talk to Us <span className="px-2"><IoIosArrowRoundForward /></span>

          </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
