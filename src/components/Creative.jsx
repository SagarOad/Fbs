import React from "react";
import img1 from "../assets/team/saif.png";
import img2 from "../assets/team/raza.png";

const Creative = () => {
  return (
    <div>
      <div className="flex w-full flex-wrap">
        <div className=" flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
          <div>
            <img className=" w-48 mx-auto rounded-full" src={img1} />
            <h1 className=" text-center mt-4 font-[inter] text-[18px] font-bold">
              Saif Anwar
            </h1>
            <p className="text-center text-[inter] text-[18px]">
              Designing Head
            </p>
          </div>
        </div>
        <div className=" flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
          <div>
            <img className=" w-48" src={img2} />
            <h1 className=" text-center mt-4 font-[inter] text-[18px] font-bold">
              Raza Ahmed
            </h1>
            <p className="text-center text-[inter] text-[18px]">
              Sr. UI/UX Designer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creative;
