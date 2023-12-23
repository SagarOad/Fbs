import React from "react";
import ServiceBanner from "../components/ServiceBanner";
import Portfolio from "../components/Portfolio";
import EffectiveFeatures from "../components/EffectiveFeatures";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceData from "../data/ServiceData";

const Marketing = () => {
  const marketing = ServiceData.marketing;
  return (
    <div>
      <Navbar />
      <ServiceBanner title={marketing.title} desc={marketing.desc} />
      {/* <Portfolio /> */}
      <EffectiveFeatures
        feature1={marketing.feature1}
        feature2={marketing.feature2}
        feature3={marketing.feature3}
        feature4={marketing.feature4}
        featureDesc1={marketing.featureDesc1}
        featureDesc2={marketing.featureDesc2}
        featureDesc3={marketing.featureDesc3}
        featureDesc4={marketing.featureDesc4}
      />
      <Footer />
    </div>
  );
};

export default Marketing;
