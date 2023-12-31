import React from 'react'
import img1 from "../assets/team/chairmen.png";
import img2 from "../assets/team/dir.png";
import img3 from "../assets/team/gm.png";

const Developent = () => {
  return (
    <div>
    <div className="flex w-full flex-wrap">
      <div className=" flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
        <div>
          <img className=" w-48 mx-auto rounded-full" src={img1} />
          <h1 className=" text-center mt-4 font-[inter] text-[18px] font-bold">MUNAWAR ABBAS SHAIKH</h1>
          <p className="text-center text-[inter] text-[18px]">Chairman</p>
        </div>
      </div>
      <div className=" flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
        <div>
          <img className=" w-48" src={img2} />
          <h1 className=" text-center mt-4 font-[inter] text-[18px] font-bold">ABDUL SATTAR</h1>
          <p className="text-center text-[inter] text-[18px]">Director</p>
        </div>
      </div>
      <div className=" flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
        <div>
          <img className=" w-48" src={img3} />
          <h1 className=" text-center mt-4 font-[inter] text-[18px] font-bold">RASHA TAREK FAKHREL DEEN</h1>
          <p className="text-center text-[inter] text-[18px]">General Manager</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Developent