import React from "react";
import wheels from "../assets/wheels.png"
import healthcare from "../assets/health2.png"
import sop from "../assets/sop.png"

const OurProducts = () => {
  return (
    <div className="py-32">
      <div className="lg:mx-52 2xl:mx-80">
        <h1 className="font-[inter] mb-28 px-40 font-[700] text-center relative leading-[60px] text-[2.7rem]">
          We love transforming product ideas to digital realities.
        </h1>

        <div>
          <div className="grid grid-cols-12">
            <div className="col-span-6 pr-20">
              <img
                className=" w-[180px] mb-6 p-2"
                src="https://www.famewheels.com/static/media/fame-wheels-logo.bdbcd17588780f149f99.png"
              />
              <h1 className="font-[cabinet] font-[700] relative text-[2rem]">
                Famewheels, Revolutionizing vehicle selling.
              </h1>

              <p className=" font-[inter] text-[18px] pt-3">
                MicroPets Runner is a classic side-scrolling runner game that
                allows users to proceed with their game character (MicroPets NFT
                product) picking up coins (to earn rewards) on their way past
                monsters and obstacles.
              </p>

              <div className=" flex mt-8">
                <button className="primary-btn primary-btn-hover font-[inter]">
                  View More
                </button>
              </div>
            </div>
            <div className="col-span-6">
              <img
                className="w-[100%] h-[100%] border-[#ed2024] border-2 rounded-[30px] object-cover object-left"
                src={wheels}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 mt-40">
            <div className="col-span-6">
              <img
                className="w-[100%] h-[100%] border-[#25aae1] border-2 rounded-[30px] object-cover object-left"
                src={healthcare}
              />
            </div>
            <div className="col-span-6 pl-20">
              <img
                className=" w-[150px] mb-6 p-2"
                src="https://famehealthcaretech.com/wp-content/uploads/2023/11/Group-16-1.png"
              />
              <h1 className="font-[cabinet] font-[700] relative text-[2rem]">
                Famewheels, Revolutionizing vehicle selling.
              </h1>

              <p className=" font-[inter] text-[18px] pt-3">
                MicroPets Runner is a classic side-scrolling runner game that
                allows users to proceed with their game character (MicroPets NFT
                product) picking up coins (to earn rewards) on their way past
                monsters and obstacles.
              </p>

              <div className=" flex mt-8">
                <button className="primary-btn primary-btn-hover font-[inter]">
                  View More
                </button>
              </div>
            </div>
            
          </div>

          <div className="grid grid-cols-12 mt-40">
            <div className="col-span-6 pr-20">
              <img
                className=" w-[140px] mb-6 p-4"
                src="https://studentofpakistan.com/images/sop.png"
              />
              <h1 className="font-[cabinet] font-[700] relative text-[2rem]">
                Famewheels, Revolutionizing vehicle selling.
              </h1>

              <p className=" font-[inter] text-[18px] pt-3">
                MicroPets Runner is a classic side-scrolling runner game that
                allows users to proceed with their game character (MicroPets NFT
                product) picking up coins (to earn rewards) on their way past
                monsters and obstacles.
              </p>

              <div className=" flex mt-8">
                <button className="primary-btn primary-btn-hover font-[inter]">
                  View More
                </button>
              </div>
            </div>
            <div className="col-span-6">
              <img
                className="w-[100%] h-[100%] border-[#00a652] border-2 rounded-[30px] object-cover object-left"
                src={sop}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
