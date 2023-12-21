import React from "react";
import { DiPhp } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { FaNode } from "react-icons/fa";

const TechBackend = () => {
  return (
    <div>
      <div className="flex flex-wrap mt-12 justify-evenly">
        <DiPhp className=" mx-2 text-[7rem]" />
        <FaJava className=" mx-2 text-[7rem]" />
        <FaNode className=" mx-2 text-[7rem]" />
      </div>
    </div>
  );
};

export default TechBackend;
