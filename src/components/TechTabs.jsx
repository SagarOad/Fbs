import React, { useState } from "react";
import TechApps from "./TechApps";
import TechFrontend from "./TechFrontend";
import TechDb from "./TechDb";
import TechBackend from "./TechBackend";
import TechCms from "./TechCms";
import TechDesign from "./TechDesign";

const TechTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const Tab = ({ tabNumber, tabText }) => (
    <div
      className={`cursor-pointer mr-3 my-4 font-medium  text-[18px] border-[white] font-[inter] py-4 px-4 ${
        activeTab === tabNumber
          ? " text-[white] border-b-[3.5px] "
          : "bg-transparent text-gray-800"
      }`}
      onClick={() => handleTabClick(tabNumber)}
    >
      {tabText}
    </div>
  );

  return (
    <div className="our-tech">
    <div className="max-w-screen-xl px-4 mx-auto text-center lg:py-28 lg:px-6">
      <h1 className="font-[inter] text-white font-[700] text-center relative mb-8 leading-[50px] text-[2.4rem]">
        Technologies we work with
      </h1>
      <div className="flex justify-center items-center">
        <Tab tabNumber={1} tabText="Mobile" />
        <Tab tabNumber={2} tabText="Frontend" />
        <Tab tabNumber={3} tabText="Database" />
        <Tab tabNumber={4} tabText="Backend" />
        <Tab tabNumber={5} tabText="CMS" />
        <Tab tabNumber={6} tabText="Designing" />
      </div>
      <div className="mt-4">
        {activeTab === 1 && <TechApps />}
        {activeTab === 2 && <TechFrontend />}
        {activeTab === 3 && <TechDb />}
        {activeTab === 4 && <TechBackend />}
        {activeTab === 5 && <TechCms />}
        {activeTab === 6 && <TechDesign />}
      </div>
    </div>
    </div>
  );
};

export default TechTabs;
