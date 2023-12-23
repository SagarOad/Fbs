import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Leadership from "../components/Leadership";

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
      <div className="lg:mx-52 2xl:mx-96">
        <div className="flex justify-center">
          <Tab tabNumber={1} tabText="Leadership" />
          <Tab tabNumber={2} tabText="Development" />
          <Tab tabNumber={3} tabText="Creative" />
        </div>
        <div className="mt-4">
          {activeTab === 1 && <Leadership />}
          {activeTab === 2 && <h1>Testing</h1>}
          {activeTab === 3 && <h1>Testing</h1>}
        </div>
      </div>
    </div>
  );
};

export default About;
