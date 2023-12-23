import React from "react";
import ServiceBanner from "../components/ServiceBanner";
import Portfolio from "../components/Portfolio";
import EffectiveFeatures from "../components/EffectiveFeatures";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceData from "../data/ServiceData";
import GraphicDesign1 from "../components/GraphicDesign";

const GraphicDesign = () => {
  const graphicDesign = ServiceData.graphicDesign;
  return (
    <div>
      <Navbar />
      <ServiceBanner title={graphicDesign.title} desc={graphicDesign.desc} />
      <h1 className="font-[cabinet-extrabold] my-12 text-center relative leading-[75px] text-[2.5rem]">
        Graphic Design Portfolio
      </h1>
      <GraphicDesign1 />
      <EffectiveFeatures
        feature1={graphicDesign.feature1}
        feature2={graphicDesign.feature2}
        feature3={graphicDesign.feature3}
        feature4={graphicDesign.feature4}
        featureDesc1={graphicDesign.featureDesc1}
        featureDesc2={graphicDesign.featureDesc2}
        featureDesc3={graphicDesign.featureDesc3}
        featureDesc4={graphicDesign.featureDesc4}
      />
      <Footer />
    </div>
  );
};

export default GraphicDesign;
