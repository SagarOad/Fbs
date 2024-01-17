import React from "react";

const ServiceBanner = ({ title, desc }) => {
  return (
    <div className="services-sec p-4">
      <div className="grid grid-cols-12 lg:mx-52 2xl:mx-80 z-40">
        <div className=" lg:col-span-8 col-span-12 py-20 lg:h-auto 2xl:h-[80vh] flex flex-col justify-center">
          <h1 className="font-[cabinet-bold] text-[#ffffff] relative leading-[56px] md:leading-[78px] text-[3rem] md:text-[4rem] lg:text-[4rem]">
            {title}
          </h1>
          <p className="text-[18px] mt-6 font-[inter] mr-[150px] font-400 text-white">
            {desc}
          </p>
        </div>




        <div className="lg:col-span-4 col-span-12 flex justify-center items-center sider-banner">
          <form className=" mt-[100px] bg-white w-[100%] px-8 py-16">
            <h1 className="font-[inter] mb-4 font-[700] relative text-[1.8rem]">
              Request for proposal
            </h1>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_name"
                id="floating_name"
                className="block py-2.5 px-0 w-full  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none "
                placeholder=""
                required
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none "
                placeholder=""
                required
              />
              <label
                for="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="phone"
                name="repeat_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none "
                placeholder=""
                required
              />
              <label
                for="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <textarea
                type="message"
                name="repeat_message"
                id="floating_message"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none "
                placeholder=" "
                required
              />
              <label
                for="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm password
              </label>
            </div>

            <button
              type="submit"
              className="btn mt-3 rounded-none bg-[#4481eb] text-[white] hover:text-[black] font-medium font-[inter] h-[48px] w-full text-[18px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
