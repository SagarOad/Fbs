import React, { useState } from "react";
import logo from "../assets/fbs.png";
import { NavLink } from "react-router-dom";
import ScrollProgress from "./ScrollProgress";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible((prev) => !prev);
  };
  

  const handleDropdownClose = () => {
    setDropdownVisible(false);
  };

  return (
    <>
    <ScrollProgress />
    <div className="mx-8 2xl:mx-28">
      <nav className="main-nav py-3 relative z-[99] bg-transparent border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <NavLink to="/">
            <a href="#main-banner" className="flex items-center cursor-pointer">
              <img src={logo} className="md:w-[138px] w-[120px]" alt="Logo" />
            </a>
          </NavLink>
          <div className="flex md:order-2 md:flex-row flex-col-reverse">
            <button
              onClick={() => document.getElementById("my_modal_4").showModal()}
              className="btn rounded-full bg-[#4481eb] text-[white] hover:text-[black] font-medium font-[inter] h-[52px] w-[190px] text-[18px]"
            >
              Request a Quote
            </button>
            <button
              type="button"
              onClick={handleDropdownToggle}
              className="inline-flex justify-end items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-transparent dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isDropdownVisible ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isDropdownVisible ? "block" : "hidden"
            }`}
            id="navbar-sticky"
            onMouseLeave={handleDropdownClose}
            onClick={handleDropdownToggle}
          >
            <ul className="flex flex-col bg-transparent p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li className="pl-[3.75rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end">
                <NavLink to="/">
                  <a className="text-black hover:text-[#4481eb] font-[poppins] text-[18px] md:text-[18px]">
                    Home
                  </a>
                </NavLink>
              </li>
              <li className="py-2 pl-[3.75rem] md:py-0 md:border-0 border-t-2 border-white text-end">
                <div className="group relative cursor-pointer">
                  <div>
                    <a
                      data-dropdown-toggle="dropdownHover"
                      data-dropdown-trigger="hover"
                      id="dropdownHoverButton"
                      href="#"
                      className="text-black menu-hover hover:text-[#4481eb] font-[poppins] text-[18px] md:text-[18px]"
                      aria-current="page"
                      onMouseEnter={handleDropdownToggle}
                    >
                      Services
                    </a>
                  </div>
                  <div
                    className={`${
                      isDropdownVisible ? "block" : "hidden"
                    } invisible md:visible w-64 absolute z-50 flex font-[poppins] flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl`}
                  >
                    <NavLink to="/web">
                      <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-[#4481eb] md:mx-2">
                        Mobile Application
                      </a>
                    </NavLink>
                    <NavLink to="/app">
                      <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-[#4481eb] md:mx-2">
                        Web Development
                      </a>
                    </NavLink>
                    <NavLink to="/marketing">
                      <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-[#4481eb] md:mx-2">
                        Digital Marketing
                      </a>
                    </NavLink>
                    <NavLink to="/videoanime">
                      <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-[#4481eb] md:mx-2">
                        2D / 3D Animation
                      </a>
                    </NavLink>
                    <NavLink to="/design">
                      <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-[#4481eb] md:mx-2">
                        Graphics Design
                      </a>
                    </NavLink>
                  </div>
                </div>
              </li>
              <li className="pl-[3.75rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end">
                <NavLink to="/#projects">
                  <a
                    href="#projects"
                    className="text-black hover:text-[#4481eb] font-[poppins] text-[18px] md:text-[18px]"
                  >
                    Projects
                  </a>
                </NavLink>
              </li>
              <li className="pl-[3.75rem] py-2 md:py-0 md:border-0 border-t-2 border-white text-end">
                <NavLink to="/about">
                  <a
                    href="#pricing"
                    className="text-black hover:text-[#4481eb] font-[poppins] text-[18px] md:text-[18px]"
                  >
                    About
                  </a>
                </NavLink>
              </li>
              {/* Add more navigation links here */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
