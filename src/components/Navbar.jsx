import React, { useState } from "react";
import { BsBell, BsChevronDown, BsList, BsX } from "react-icons/bs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#1a1f2d] text-white">
      <div className="px-4 md:px-8 py-4">
        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-wider">
              <span className="text-[#00ffcc]">H</span>OURS
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#" className="text-[#00ffcc] font-medium relative group">
              Dashboard
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00ffcc] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors relative group"
            >
              Team
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors relative group"
            >
              Clients
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors relative group"
            >
              Time
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors relative group"
            >
              Reports
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </nav>

          {/* User Controls */}
          <div className="flex items-center space-x-4 md:space-x-8">
            <BsBell className="text-xl text-gray-400 cursor-pointer hover:text-white transition-colors" />
            <div className="flex items-center space-x-3 cursor-pointer group">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-download-in-svg-png-gif-file-formats--person-girl-business-pack-illustrations-6515859.png?f=webp"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden md:inline text-gray-400 group-hover:text-white transition-colors">
                Mario
              </span>
              <BsChevronDown className="hidden md:inline text-gray-400 group-hover:text-white transition-colors" />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-400 hover:text-white p-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <BsX size={24} /> : <BsList size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-6 px-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-[#00ffcc] font-medium relative group">
                Dashboard
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00ffcc] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors relative group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors relative group"
              >
                Team
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors relative group"
              >
                Clients
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors relative group"
              >
                Time
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors relative group"
              >
                Reports
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
