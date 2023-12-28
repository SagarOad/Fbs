import React from "react";
import { FaWordpress } from "react-icons/fa";
import { FaMagento } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";

const TechCms = () => {
  return (
    <div>
      <div className="flex flex-wrap mt-12 justify-evenly">
        <FaWordpress className=" m-2 text-white text-[7rem]" />
        <FaMagento className=" m-2 text-white text-[7rem]" />
        <FaShopify className=" m-2 text-white text-[7rem]" />
      </div>
    </div>
  );
};

export default TechCms;
