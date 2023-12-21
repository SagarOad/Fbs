import React from "react";
import { FaWordpress } from "react-icons/fa";
import { FaMagento } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";

const TechCms = () => {
  return (
    <div>
      <div className="flex flex-wrap mt-12 justify-evenly">
        <FaWordpress className=" mx-2 text-[7rem]" />
        <FaMagento className=" mx-2 text-[7rem]" />
        <FaShopify className=" mx-2 text-[7rem]" />
      </div>
    </div>
  );
};

export default TechCms;
