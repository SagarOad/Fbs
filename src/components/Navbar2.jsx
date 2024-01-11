import { Link } from "react-router-dom";
import img1 from "../assets/fbs.png";

const Navbar2 = () => {
  // mb-[-113px]
  return (
    <nav class="bg-[transparent]  border-gray-200 dark:bg-gray-900">
      <div class="mx-8 2xl:mx-28  flex flex-wrap items-center justify-between p-4">
        <button
          onClick={() => document.getElementById("my_modal_4").showModal()}
          href="#"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* <span class="self-center text-[#4481eb] font-[inter] text-3xl font-bold">
            FBS
          </span> */}
          <img className=" z-[99] w-[150px]" src={img1} />
        </button>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            class="text-white z-[99] font-[inter] bg-[#4481eb] focus:ring-4 focus:outline-none font-semibold px-8 py-3 text-center"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex z-[99] items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul class="flex flex-col z-[99] font-semibold p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block font-[poppins] text-[18px] py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block font-[poppins] py-2 px-3 text-[18px] md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="service-btnn flex items-center text-[18px] justify-between w-full py-2 px-3 text-gray-900 md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
              >
                Services{" "}
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownLargeButton"
                >

                  <li>
                    <Link
                      to="/app"
                      onClick={(e) => {
                        e.preventDefault();
                        history.push("/app");
                      }}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/web"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      App Development
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/design"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Graphic Design
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/videoanime"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Video Editing & Animation
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/marketing"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Digtal Marketing
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="/#contact"
                className="block cursor-pointer font-[poppins] py-2 px-3 text-[18px] md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
