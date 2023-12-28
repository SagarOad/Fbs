import React from "react";
import service1 from "../assets/services/web.svg";
import service2 from "../assets/services/phone.svg";
import service3 from "../assets/services/play.svg";
import service4 from "../assets/services/nib.svg";

const ServicesSec = () => {
  return (
    <div className="services-sec py-32">
      <div className="lg:mx-52 2xl:mx-96">
        <h1 className="font-[inter] font-[800] text-white text-center relative leading-[44px] xl:leading-[60px] text-[2rem] xl:text-[2.7rem]">
          Develop results-driven products for entrepreneurs, startups, and
          enterprises with a leading software development company.
        </h1>
        <div className="flex xl:flex-row flex-col mt-20 justify-between items-center">
          <div className=" flex hover:bg-white p-12 h-58 w-72 transition-all flex-col justify-center items-center">
            <img className=" w-[60px]" src={service1} />
            <h1 className="font-[inter] mt-5 font-[700] text-white text-center relative leading-[32px] text-[1.2rem]">
              Web<br /> Development
            </h1>
          </div>
          <div className="flex hover:bg-white p-12 h-58 w-72 transition-all flex-col justify-center items-center">
            <img className=" w-[60px]" src={service2} />
            <h1 className="font-[inter] mt-5 font-[700] text-white text-center relative leading-[32px] text-[1.2rem]">
              App<br /> Development
            </h1>
          </div>
          <div className="flex hover:bg-white p-12 h-58 w-72 transition-all flex-col justify-center items-center">
            <img className=" w-[60px]" src={service4} />
            <h1 className="font-[inter] mt-5 font-[700] text-white text-center relative leading-[32px] text-[1.2rem]">
              Graphic<br /> Designing
            </h1>
          </div>
          <div className="flex hover:bg-white p-12 h-58 w-72 transition-all flex-col justify-center items-center">
            <img className=" w-[60px]" src={service3} />
            <h1 className="font-[inter] mt-5 font-[700] text-white text-center relative leading-[32px] text-[1.2rem]">
              Video<br /> Editing & Animation
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSec;
