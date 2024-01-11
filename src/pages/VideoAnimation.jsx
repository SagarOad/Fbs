import React from "react";
import ServiceBanner from "../components/ServiceBanner";
import Portfolio from "../components/Portfolio";
import EffectiveFeatures from "../components/EffectiveFeatures";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar2";
import ServiceData from "../data/ServiceData";
import VideoAnime1 from "../components/VideoAnime";
import VideoInfo from "../components/VideoInfo";

const VideoAnimation = () => {
  const videoAnime = ServiceData.videoAnime;
  return (
    <div>
      <Navbar />
      <ServiceBanner title={videoAnime.title} desc={videoAnime.desc} />
      <h1 className="font-[cabinet-extrabold] my-12 text-center relative leading-[75px] text-[2.5rem]">
        Video Animation Portfolio
      </h1>
      <VideoAnime1 />
      <EffectiveFeatures
        feature1={videoAnime.feature1}
        feature2={videoAnime.feature2}
        feature3={videoAnime.feature3}
        feature4={videoAnime.feature4}
        featureDesc1={videoAnime.featureDesc1}
        featureDesc2={videoAnime.featureDesc2}
        featureDesc3={videoAnime.featureDesc3}
        featureDesc4={videoAnime.featureDesc4}
      />
      <VideoInfo />
      <Footer />
    </div>
  );
};

export default VideoAnimation;
