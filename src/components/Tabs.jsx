import React, { useState } from 'react';
import WebDev from './WebDev';
import GraphicDesign from './GraphicDesign';
import AppDev from './AppDev';
import VideoAnime from './VideoAnime';
import NftDesign from './NftDesign';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const Tab = ({ tabNumber, tabText }) => (
    <div
      className={`cursor-pointer mr-3 my-4 rounded-full text-[14px] border-[0.5px] border-neutral-400 font-[inter] py-2 px-4 ${
        activeTab === tabNumber ? 'bg-[#25a9e153] ' : 'bg-transparent text-gray-800'
      }`}
      onClick={() => handleTabClick(tabNumber)}
    >
      {tabText}
    </div>
  );

  return (
    <div>
      <div className="flex justify-center">
        <Tab tabNumber={1} tabText="Web Development" />
        <Tab tabNumber={2} tabText="Graphic Design" />
        <Tab tabNumber={3} tabText="App Development" />
        <Tab tabNumber={4} tabText="Video Animation" />
        <Tab tabNumber={5} tabText="Nft Designing" />
      </div>
      <div className="mt-4">
        {activeTab === 1 && <WebDev />}
        {activeTab === 2 && <GraphicDesign />}
        {activeTab === 3 && <AppDev />}
        {activeTab === 4 && <VideoAnime />}
        {activeTab === 5 && <NftDesign />}
      </div>
    </div>
  );
};

export default Tabs;
