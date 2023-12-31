import React, { useState } from "react";
import Leadership from "../components/Leadership"
import Development from "../components/Developent"
import Creative from "../components/Creative"

const Team = () => {
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
        <div className="lg:mx-52 2xl:mx-96">
          <div className="flex justify-center">
            <Tab tabNumber={1} tabText="Leadership" />
            <Tab tabNumber={2} tabText="Development" />
            <Tab tabNumber={3} tabText="Creative" />
          </div>
          <div className="mt-4">
            {activeTab === 1 && <Leadership />}
            {activeTab === 2 && <Development />}
            {activeTab === 3 && <Creative />}
          </div>
        </div>
      </div>
    );
}

export default Team