import React from "react";
import ServiceBanner from "../components/ServiceBanner";
import Portfolio from "../components/Portfolio";
import EffectiveFeatures from "../components/EffectiveFeatures";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceData from "../data/ServiceData";
import AppDev1 from "../components/AppDev";

const AppDev = () => {
  const mobileDev = ServiceData.mobileApp;
  return (
    <div>
      <Navbar />
      <ServiceBanner title={mobileDev.title} desc={mobileDev.desc} />
      <h1 className="font-[cabinet-extrabold] my-12 text-center relative leading-[75px] text-[2.5rem]">
        App Portfolio
      </h1>
      <AppDev1 />
      <EffectiveFeatures
        feature1={mobileDev.feature1}
        feature2={mobileDev.feature2}
        feature3={mobileDev.feature3}
        feature4={mobileDev.feature4}
        featureDesc1={mobileDev.featureDesc1}
        featureDesc2={mobileDev.featureDesc2}
        featureDesc3={mobileDev.featureDesc3}
        featureDesc4={mobileDev.featureDesc4}
      />
      <Footer />
    </div>
  );
};

export default AppDev;
