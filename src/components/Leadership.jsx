import React from "react";
import img1 from "../assets/team/chairmen.png";
import img2 from "../assets/team/dir.png";
import img3 from "../assets/team/gm.png";

const Leadership = () => {
  return (
    <div>
      <div className="flex w-full flex-wrap">
        <div className=" flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1  md:p-2">
          <div>
            <img className=" w-48 mx-auto rounded-full" src={img1} />
            <h1 className=" text-center mt-4 font-[inter] text-[18px] font-bold">
              MUNAWAR ABBAS SHAIKH
            </h1>
            <p className="text-center text-[inter] text-[18px]">Chairman</p>
            <p className=" text-center">
              Munawar Abbas Shaikh is Chairman Fame Business Soutions, he has
              done a MBA and LLB. He has more than 18 years of experience in
              diverse industries.
            </p>
          </div>
        </div>
        <div className=" flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1  md:p-2">
          <div>
            <img className=" w-48" src={img2} />
            <h1 className=" text-center mt-4 font-[inter] text-[18px] font-bold">
              ABDUL SATTAR
            </h1>
            <p className="text-center text-[inter] text-[18px]">Director</p>
            <p className=" text-center">
              Munawar Abbas Shaikh is Chairman Fame Business Soutions, he has
              done a MBA and LLB. He has more than 18 years of experience in
              diverse industries.
            </p>
          </div>
        </div>
        <div className=" flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1  md:p-2">
          <div>
            <img className=" w-48" src={img3} />
            <h1 className=" text-center mt-4 font-[inter] text-[18px] font-bold">
              RASHA TAREK FAKHREL DEEN
            </h1>
            <p className="text-center text-[inter] text-[18px]">
              Rasha Tarek Fakhrel Deen has more then of 15 years of management
              and marketing experience in multinational companies. She has a MSc
              in Development Studies from SOAS University of London and a MBA
              from IBA Karachi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
