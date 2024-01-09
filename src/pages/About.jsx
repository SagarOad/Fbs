import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Leadership from "../components/Leadership";
import Developent from "../components/Developent";
import Creative from "../components/Creative";
import aboutBanner from "../assets/about-banner.jpg";
import Footer from "../components/Footer";

const About = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const Tab = ({ tabNumber, tabText }) => (
    <div
      className={`cursor-pointer mr-3 my-4 rounded-full text-[14px] border-[0.5px] border-neutral-400 font-[inter] py-2 px-4 ${
        activeTab === tabNumber
          ? "bg-[#25a9e153] "
          : "bg-transparent text-gray-800"
      }`}
      onClick={() => handleTabClick(tabNumber)}
    >
      {tabText}
    </div>
  );

  return (
    <div className="">
      <Navbar />

      <div className="services-sec py-24">
        <div className="mx-8 lg:mx-52 2xl:mx-80 flex justify-center">
          <div className="">
            <h1 className="font-[inter] font-[800] text-white text-left relative leading-[44px] xl:leading-[60px] text-[2rem] xl:text-[2.7rem]">
              About
            </h1>
            <p className="text-[18px] mt-4 font-[inter] lg:mr-[150px] font-400 text-white">
              At Fame Business Solutions, we are a dynamic team of experts
              passionate about crafting innovative digital solutions. Our
              commitment lies in creating impactful experiences, solving
              challenges, and shaping the future of technology with creativity
              and expertise.
            </p>

            <button
              onClick={() => document.getElementById("my_modal_4").showModal()}
              className="btn rounded-none bg-[#4481eb] text-[white] hover:text-[black] font-medium font-[inter] h-[50px] w-[200px] mt-8 text-[16px]"
            >
              LET'S GET STARTED
            </button>
          </div>
          <div className="flex xl:flex-row flex-col mt-20 justify-between items-center"></div>
        </div>
      </div>

      <div className="grid grid-cols-12 my-40 mx-8 lg:mx-52 2xl:mx-80">
        <div className="xl:col-span-6 col-span-12">
          <img
            className="w-[100%] h-[100%] border-[#25aae1] border-2 rounded-[30px] object-cover object-left"
            src={aboutBanner}
          />
        </div>
        <div className="xl:col-span-6 col-span-12 lg:pl-20 flex justify-center items-center">
          <div>
            <h1 className="font-[inter] font-[700] relative text-[2rem]">
              Inspire with Innovation
            </h1>

            <p className=" font-[inter] text-[18px] pt-3">
              Fame Business Solutions transforms ideas into reality through
              cutting-edge technologies. Explore a world of possibilities and
              elevate your business with our forward-thinking solutions. Our
              mission is to deliver excellence, shaping a future where
              technology meets ingenuity.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:mx-52 2xl:mx-96">
        <h1 className="font-[inter] font-[800] text-[#25aae1] mb-6 text-center relative leading-[44px] xl:leading-[60px] text-[2rem] xl:text-[2.7rem]">
          Our Team
        </h1>

        <div className="flex justify-center">
          <Tab tabNumber={1} tabText="Leadership" />
          <Tab tabNumber={2} tabText="Development" />
          <Tab tabNumber={3} tabText="Creative" />
        </div>
        <div className="mt-4">
          {activeTab === 1 && <Leadership />}
          {activeTab === 2 && <Developent />}
          {activeTab === 3 && <Creative />}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
