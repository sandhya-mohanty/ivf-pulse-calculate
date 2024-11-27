import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-pink-500">iVF Pulse</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-pink-500 font-medium">
              Donor Programme
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-500 font-medium">
              Fertility Preservation
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-500 font-medium">
              Advanced Treatments
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-500 font-medium">
              IVF Testing
            </a>
          </div>

          {/* Talk to Us Button */}
          <div className="hidden md:block">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
              Talk to Us →
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-2 p-4">
              <a href="#" className="block text-gray-600 hover:text-pink-500 font-medium">
                Donor Programme
              </a>
              <a href="#" className="block text-gray-600 hover:text-pink-500 font-medium">
                Fertility Preservation
              </a>
              <a href="#" className="block text-gray-600 hover:text-pink-500 font-medium">
                Advanced Treatments
              </a>
              <a href="#" className="block text-gray-600 hover:text-pink-500 font-medium">
                IVF Testing
              </a>
              <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600">
                Talk to Us →
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopBar;
