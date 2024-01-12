import React from 'react'
import img1 from "../assets/team/cto.png";
import img2 from "../assets/team/fiza.png";
import img3 from "../assets/team/sagar.png";
import img4 from "../assets/team/zeeshan.png";
import img5 from "../assets/team/noman.png";

const Developent = () => {
  return (
    <div>
    <div className="flex w-full flex-wrap">
      <div className=" flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
        <div>
          <img className=" w-48 mx-auto rounded-full" src={img1} />
          <h1 className=" text-center mt-4 font-[inter] text-[18px] font-bold">Muhammad Mehroz</h1>
          <p className="text-center text-[inter] text-[18px]">Cto</p>
        </div>
      </div>
      <div className=" flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
        <div>
          <img className=" w-48" src={img2} />
          <h1 className=" text-center mt-4 font-[inter] text-[18px] font-bold">Fiza Iqbal</h1> 
          <p className="text-center text-[inter] text-[18px]">Marketing Head</p>
        </div>
      </div>
      <div className=" flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
        <div>
          <img className=" w-48" src={img3} />
          <h1 className=" text-center mt-4 font-[inter] text-[18px] font-bold">Sagar Oad</h1>
          <p className="text-center text-[inter] text-[18px]">Frontend Developer</p>
        </div>
      </div>
      <div className=" flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
        <div>
          <img className=" w-48" src={img4} />
          <h1 className=" text-center mt-4 font-[inter] text-[18px] font-bold">Zeeshan Ali</h1>
          <p className="text-center text-[inter] text-[18px]">Mern Stack Developer</p>
        </div>
      </div>
      <div className=" flex justify-center items-center hover:-0 ease-in duration-300 w-full md:w-1/3 p-1 mb-16 md:p-2">
        <div>
          <img className=" w-48" src={img5} />
          <h1 className=" text-center mt-4 font-[inter] text-[18px] font-bold">Noman Ghayyur</h1>
          <p className="text-center text-[inter] text-[18px]">Mern Stack Developer</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Developent