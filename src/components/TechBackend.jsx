import React from "react";
import { DiPhp } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { FaNode } from "react-icons/fa";

const TechBackend = () => {
  return (
    <div>
      <div className="flex flex-wrap mt-12 justify-evenly">
        <DiPhp className=" m-2 text-white text-[7rem]" />
        <FaJava className=" m-2 text-white text-[7rem]" />
        <FaNode className=" m-2 text-white text-[7rem]" />
      </div>
    </div>
  );
};

export default TechBackend;
