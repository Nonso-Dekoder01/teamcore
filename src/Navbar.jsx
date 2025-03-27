import React, { useState } from 'react'
import logo from './assets/teamcoreblack1 - text.png';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const [show, setShow] = useState(false)

  const HandleShow  = () => {
  setShow(!show)
  }

  return (
    <nav className="w-full h-auto bg-white flex justify-between items-center px-7 md:px-16 lg:px-32 py-5">
      {/* Logo */}
      <div>
        <img src={logo} alt="Teamcore Logo" className="w-40 h-16" />
      </div>

      {/* Navigation Links */}
      <ul className="hidden lg:flex items-center gap-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#FF6600] font-semibold pb-1 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-7 after:bg-[#FF6600] after:rounded-full after:transition-all after:duration-300 after:transform after:-translate-x-1/2"
                : "text-[#4b4b4b] font-normal pb-1 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF6600] after:rounded-full after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-7"
            }
          >
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#FF6600] font-semibold pb-1 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-7 after:bg-[#FF6600] after:rounded-full after:transition-all after:duration-300 after:transform after:-translate-x-1/2"
                : "text-[#4b4b4b] font-normal pb-1 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF6600] after:rounded-full after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-7"
            }
          >
            About Us
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-[#FF6600] font-semibold pb-1 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-7 after:bg-[#FF6600] after:rounded-full after:transition-all after:duration-300 after:transform after:-translate-x-1/2"
                : "text-[#4b4b4b] font-normal pb-1 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF6600] after:rounded-full after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-7"
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Education"
            className={({ isActive }) =>
              isActive
                ? "text-[#FF6600] font-semibold pb-1 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-7 after:bg-[#FF6600] after:rounded-full after:transition-all after:duration-300 after:transform after:-translate-x-1/2"
                : "text-[#4b4b4b] font-normal pb-1 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF6600] after:rounded-full after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-7"
            }
          >
            Education
          </NavLink>
        </li>
      </ul>

      {show ? <ul className="lg:hidden flex flex-col text-md md:text-lg absolute top-20 md:top-24 left-0 gap-[40px] py-7 md:py-10 px-7 md:px-16 bg-white z-10 w-full h-screen overflow-y-hidden transition-all duration-500">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#FF6600] font-semibold pb-1 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-7 after:bg-[#FF6600] after:rounded-full after:transition-all after:duration-300 after:transform after:-translate-x-1/2"
                : "text-[#4b4b4b] font-normal pb-1 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF6600] after:rounded-full after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-7"
            }
          >
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#FF6600] font-semibold pb-1 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-7 after:bg-[#FF6600] after:rounded-full after:transition-all after:duration-300 after:transform after:-translate-x-1/2"
                : "text-[#4b4b4b] font-normal pb-1 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF6600] after:rounded-full after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-7"
            }
          >
            About Us
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-[#FF6600] font-semibold pb-1 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-7 after:bg-[#FF6600] after:rounded-full after:transition-all after:duration-300 after:transform after:-translate-x-1/2"
                : "text-[#4b4b4b] font-normal pb-1 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF6600] after:rounded-full after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-7"
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Education"
            className={({ isActive }) =>
              isActive
                ? "text-[#FF6600] font-semibold pb-1 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-7 after:bg-[#FF6600] after:rounded-full after:transition-all after:duration-300 after:transform after:-translate-x-1/2"
                : "text-[#4b4b4b] font-normal pb-1 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF6600] after:rounded-full after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-7"
            }
          >
            Education
          </NavLink>
        </li>

        {/* Contact Button */}
        <button className="w-full px-6 py-3 bg-none border-2 font-semibold border-[#FF6600] text-md text-[#FF6600] rounded-lg hover:bg-[#FF6600] hover:text-[#ffffff] hover:border-none transition-all duration-500">
          Contact Us
        </button>
      </ul> : ""}

      <div className="flex items-center relative gap-6 xl:hidden">
          <div onClick={HandleShow} className="flex items-center">
            {show ? <FaTimes size={26} className="z-50 left-0 md:left-[70px]" /> : <FaBars size={26} />}
          </div>
      </div>

      {/* Contact Button */}
      <button className="hidden lg:flex px-6 py-3 bg-none border-2 font-semibold border-[#FF6600] text-md text-[#FF6600] rounded-lg hover:bg-[#FF6600] hover:text-[#ffffff] hover:border-none transition-all duration-500">
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
