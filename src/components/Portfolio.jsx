import { Tab } from "@mui/material";
import React from "react";
import Tabs from "./Tabs";

const Portfolio = () => {
  return (
    <div className="bg-[#f9fafb]">
      <div className="lg:mx-52 pt-20 pb-14 2xl:mx-80">
        <h1 className="font-[cabinet-extrabold] text-center relative leading-[75px] text-[2.5rem]">
          App Portfolio
        </h1>
        <p className="text-[18px] text-center mb-4 font-[inter] font-800 text-[#6b7280]">
          It's not our complete portfolio Explore further tap the button Below
          for More of Our Work
        </p>
        <Tabs />

      </div>
      {/* <div className=" flex justify-center pb-20 items-center">
        <button className="btn  rounded-none bg-[#4481eb] text-[white] hover:text-[black] font-medium font-[inter] h-[52px] w-[190px] text-[18px]">
          Explore More
        </button>
      </div> */}
    </div>
  );
};

export default Portfolio;
