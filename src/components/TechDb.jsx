import React from "react";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiRedis } from "react-icons/si";

const TechDb = () => {
  return (
    <div>
      <div className="flex flex-wrap mt-12 justify-evenly">
        <SiMongodb className=" m-2 text-white text-[7rem]" />
        <SiMysql className=" m-2 text-white text-[7rem]" />
        <SiMicrosoftsqlserver className=" m-2 text-white text-[7rem]" />
        <IoLogoFirebase className=" m-2 text-white text-[7rem]" />
        <SiRedis className=" m-2 text-white text-[7rem]" />
      </div>
    </div>
  );
};

export default TechDb;
