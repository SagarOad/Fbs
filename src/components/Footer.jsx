import React from "react";
import img1 from "../assets/fbs.png";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { IoClose } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#f9fafb]">
      <div
        id="contact"
        className="max-w-screen-xl border-b-[#e6e6e6] border-b-2 px-4 mx-auto text-center py-16 lg:py-28 lg:px-6"
      >
        <h1 className="font-[inter] font-[700] text-center relative mb-12 leading-[50px] text-[2.4rem]">
          14 years of building digital products and we are just getting started!
        </h1>

        <div className="">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn rounded-none bg-[#4481eb] text-[white] hover:text-[black] font-medium font-[inter] h-[66px] w-[260px] text-[20px]"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            START A PROJECT
          </button>
          <dialog id="my_modal_4" className="modal relative">
            <div className="modal-box w-11/12 max-w-3xl">
              <div className=" w-[100%]">
                <h1 className=" text-[24px] font-bold">Tell us more</h1>
              </div>
              <div className="">
                <form method="dialog">
                  <form class="">
                    <div class="relative z-0 w-full mb-5 group">
                      <input
                        type=""
                        name="floating_name"
                        id="floating_name"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                      <input
                        type="Email"
                        name="floating_email"
                        id="floating_password"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                      <input
                        type="Contact"
                        name="repeat_contact"
                        id="floating_repeat_password"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Contact"
                        required
                      />
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                      <textarea
                        type="message"
                        name="repeat_message"
                        id="floating_repeat_password"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Your Message"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      class="btn rounded-none mt-6 bg-[#4481eb] text-[white] hover:text-[black] font-medium font-[inter] h-[50px] w-[150px] text-[18px]"
                    >
                      Submit
                    </button>
                  </form>

                  <button className="btn top-0 right-0 absolute font-medium font-[inter]  text-[22px]">
                    <IoClose className=" text-black" />
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>

      <footer className="grid grid-cols-12  lg:py-20  lg:px-6 font-[poppins] max-w-screen-xl mx-auto p-10 text-base-content">
        <nav className=" col-span-12 lg:col-span-4 flex  items-center lg:pr-20">
          <header className="text-[30px] font-bold">
            <img className=" w-[250px]" src={img1} />
          </header>
        </nav>

        <nav className=" col-span-12 lg:col-span-4 lg:pr-20">
          <div className=" grid grid-cols-12">
            <div className=" col-span-6 text-[18px] font-medium mt-6 flex flex-col">
              <h1 className=" text-center mb-2 font-bold text-[20px]">
                Quick Links
              </h1>
              <a className="link text-center   mt-2 link-hover">About us</a>
              <a className="link text-center  mt-2 link-hover">Contact</a>
              <a className="link  text-center mt-2 link-hover">About</a>
            </div>
            {/* <div className=" col-span-6 text-[15px] flex flex-col">
              <a className="link   mt-2 link-hover">About us</a>
              <a className="link   mt-2 link-hover">Contact</a>
              <a className="link   mt-2 link-hover">Jobs</a>
              <a className="link   mt-2 link-hover">Press kit</a>
            </div> */}
          </div>
        </nav>

        <nav className=" col-span-12 mt-8 lg:col-span-4 lg:pr-20">
          <div className=" flex justify-center mb-2 items-center">
            <IoLocation className=" text-[52px] mr-4" />

            <a className="link no-underline text-[16px] mt-2">
              2nd floor, Office#214, Clifton Block 9 The plaza shopping center,
              Karachi
            </a>
          </div>
          <div className=" flex justify-start mb-2 items-center">
            <FaPhoneAlt className=" text-[20px] mr-4" />

            <a className="link text-[16px] no-underline mt-2">+923338539146</a>
          </div>
          <div className=" flex justify-start mb-2 items-center">
            <MdEmail className=" text-[26px] mr-4" />

            <a className="link text-[16px] no-underline mt-2">
              info@famebusinesssolutions.com
            </a>
          </div>
        </nav>
      </footer>

      <div className="footer lg:py-12 bg-[#4481eb] border-t-[#e6e6e6] border-t-2 lg:px-6 font-[poppins] 2xl:px-28 mx-auto p-10 text-base-content">
        <div className=" flex justify-center items-center">
          <p className=" text-[15px] text-white">
            © 2023 Fame Business Solutions. All Rights Reserved. Terms of Use.
            Privacy Policy.
          </p>
        </div>
        <div className="flex justify-between items-center ml-auto">
          <a href="https://www.facebook.com/famebusinessolutions">
            <FaFacebookF className=" text-[26px] mr-2 text-white" />
          </a>

          <a href="https://www.instagram.com/famebusinesssolutions?igsh=MTFvNTZxMmdmaGZwaQ==">
            <FaInstagram className=" text-[26px] mr-2 text-white" />
          </a>
          <a href="https://www.linkedin.com/company/88048247/admin/feed/posts/">
            <FaLinkedinIn className=" text-[26px] mr-2 text-white" />
          </a>
        </div>{" "}
      </div>
    </div>
  );
};

export default Footer;
