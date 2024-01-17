import React from "react";
import Navbar from "../components/Navbar2";
import img1 from "../assets/int-op.jpg";
import img2 from "../assets/facilitate.jpg";
import img3 from "../assets/advisory.jpg";

const MainBanner = () => {
  return (
    <>
      <Navbar />
      <div className="h-[100%] investment py-8 flex justify-center items-center relative overflow-hidden">
        <div id="particles-js"></div>
        <div class="count-particles"></div>
        <div className="grid grid-cols-12 mx-8 2xl:mx-56 z-40">
          <div className="lg:col-span-7 col-span-12 py-20 lg:h-auto 2xl:h-[80vh] flex flex-col justify-center items-center">
            <div>
              <h1 className="font-[cabinet-extrabold] text-[#ffffff] relative leading-[78px] text-[4rem] lg:text-[4rem]">
                FBS Startup Investment: Empowering Early-Stage Ventures for a
                Prosperous Pakistan
              </h1>
              <p className="text-[23px] my-4 font-[inter] lg:mr-[150px] font-400 text-[#ffffff]">
                Access the capital needed to fuel the growth of your venture.
              </p>
              <button
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
                className="btn mt-6 rounded-full bg-[#4481eb] text-[white] hover:text-[black] font-medium font-[inter] h-[52px] w-[190px] text-[18px]"
              >
                Get Quote
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 col-span-12 flex justify-end items-center sider-banner"></div>
        </div>
      </div>

      <div className=" mt-24 mb-36">
        <div className="">
          <div className=" w-[80%] mx-auto">
           
          </div>
        </div>
        <div className="w-[80%] xl:mt-[120px] mx-auto grid grid-cols-12">
          <div className="col-span-12 mb-4 lg:mb-0 lg:col-span-4">
            <div className="card w-[95%] mx-auto bg-base-100 shadow-xl">
              <div className="card-body rounded-2xl h-auto bg-[#f9f9f9]">
                <img
                  className=" w-[100%] h-[250px] object-cover my-4"
                  src={img1}
                  alt="Shoes"
                />
                <h2 className="font-[inter] font-[700] text-center relative  leading-[50px] text-[1.8rem]">
                  Investment Opportunities
                </h2>
                <p className="text-[18px] text-center font-[inter] font-400 text-[#000000]">
                  Connect with a network of investors eager to support
                  groundbreaking startup ventures.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 mb-4 lg:mb-0 lg:col-span-4">
            <div className="card w-[95%] mx-auto bg-base-100 shadow-xl ">
              <div className="card-body rounded-2xl h-auto bg-[#f9f9f9]">
                <img
                  className="  w-[100%] h-[250px] object-cover my-4"
                  src={img2}
                  alt="Shoes"
                />
                <h2 className="font-[inter] text-center font-[700] relative  leading-[50px] text-[1.8rem]">
                  Facilitation Services
                </h2>
                <p className="text-[18px] text-center font-[inter] font-400 text-[#000000]">
                  Enjoy a streamlined process that matches startups with
                  investors and advisors.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 mb-4 lg:mb-0 lg:col-span-4">
            <div className="card w-[95%] mx-auto bg-base-100 shadow-xl">
              <div className="card-body rounded-2xl h-auto bg-[#f9f9f9]">
                <img
                  className="  w-[100%] h-[250px] object-cover my-4"
                  src={img3}
                  alt="Shoes"
                />
                <h2 className="font-[inter] text-center font-[700] relative  leading-[50px] text-[1.8rem]">
                  Advisory Network
                </h2>
                <p className="text-[18px] text-center font-[inter] font-400 text-[#000000]">
                  {" "}
                  Gain valuable insights from seasoned advisors with diverse
                  industry experience.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
