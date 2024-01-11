import React from "react";
import img1 from "../assets/fbs.png";

const Footer = () => {
  return (
    <div className="bg-[#f9fafb]">
      <div id="contact" className="max-w-screen-xl border-b-[#e6e6e6] border-b-2 px-4 mx-auto text-center py-16 lg:py-28 lg:px-6">
        <h1 className="font-[inter] font-[700] text-center relative mb-12 leading-[50px] text-[2.4rem]">
          14 years of building digital products and we are just getting started!
        </h1>

        <div className=" flex justify-center items-center">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn rounded-none bg-[#4481eb] text-[white] hover:text-[black] font-medium font-[inter] h-[66px] w-[260px] text-[20px]"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            START A PROJECT
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <p className="py-4">Click the button below to close</p>
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

                  <button className="btn rounded-none mt-6 bg-[#969696] text-[white] hover:text-[black] font-medium font-[inter] h-[50px] w-[150px] text-[18px]">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>

      <footer className="grid grid-cols-12  lg:py-20  lg:px-6 font-[poppins] max-w-screen-xl mx-auto p-10 text-base-content">
        <nav className=" col-span-12 lg:col-span-4 lg:pr-20">
          <header className="text-[30px] mb-8 font-bold">
            <img className=" w-[200px]" src={img1} />
          </header>
          <header className="text-[26px] font-bold lg:mb-4">Got an Idea</header>
          <a className="link  text-[18px] lg:mt-2 link-hover">Tell us more</a>
        </nav>

        <nav className=" col-span-12 lg:col-span-4 lg:pr-20">
          <div className=" grid grid-cols-12">
            <div className=" col-span-6 text-[18px] font-medium mt-6 flex flex-col">
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
          <header className="text-[23px] mb-4 font-bold ">
            Address
          </header>
          <a className="link text-[18px] mt-2">
            2nd floor, Office#214, Clifton Block 9 The plaza shopping center,
            Karachi
          </a>
        </nav>
       
      </footer>

      <div className="footer lg:py-12 bg-[#4481eb] border-t-[#e6e6e6] border-t-2 lg:px-6 font-[poppins] 2xl:px-28 mx-auto p-10 text-base-content">
        <div className=" flex justify-center items-center">
          <p className=" text-[15px] text-white">
            © 2023 Fame Business Solutions. All Rights Reserved. Terms of Use.
            Privacy Policy.
          </p>
        </div>
        <div className="grid grid-flow-col gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-white"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-white"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-white"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>{" "}
      </div>
    </div>
  );
};

export default Footer;
