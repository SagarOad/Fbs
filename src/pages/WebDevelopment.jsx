import React from "react";
import ServiceBanner from "../components/ServiceBanner";
import Portfolio from "../components/Portfolio";
import EffectiveFeatures from "../components/EffectiveFeatures";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar2";
import ServiceData from "../data/ServiceData";
import WebDev1 from "../components/WebDev";
import WebInfo from "../components/WebInfo";

const WebDev = () => {
  const web = ServiceData.webDev;
  return (
    <div>
      <Navbar />
      <ServiceBanner title={web.title} desc={web.desc} />
      
      <EffectiveFeatures
        feature1={web.feature1}
        feature2={web.feature2}
        feature3={web.feature3}
        feature4={web.feature4}
        featureDesc1={web.featureDesc1}
        featureDesc2={web.featureDesc2}
        featureDesc3={web.featureDesc3}
        featureDesc4={web.featureDesc4}
      />
      <h1 className="font-[cabinet-extrabold] my-12 text-center relative leading-[75px] text-[2.5rem]">
        Web Development Portfolio
      </h1>
      <WebDev1 />

      <WebInfo />

      <Footer />
    </div>
  );
};

export default WebDev;
