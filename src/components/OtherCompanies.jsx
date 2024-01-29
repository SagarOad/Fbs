import React from "react";

const OtherCompanies = () => {
  return (
    <div className="py-16 lg:py-28  border-b-[#e6e6e6] border-b-2">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-[inter] font-[700] text-center relative mb-8 leading-[50px] text-[2.1rem] md:text-[2.4rem]">
          Associated Companies
        </h1>
        <div>
          <div className="w-[80%]  mx-auto grid grid-cols-12">
            <div className="col-span-12 mb-4 lg:mb-0 lg:col-span-6">
              <div className="card w-[95%] mx-auto bg-base-100 shadow-xl">
                <div className="card-body rounded-2xl h-auto md:h-[265px] bg-[#f9f9f9]">
                  <img
                    className=" w-[80%] md:w-[50%] my-4"
                    src="https://www.famewheels.com/static/media/fame-wheels-logo.bdbcd17588780f149f99.png"
                    alt="Shoes"
                  />
                  <h2 className="font-[inter] font-[700] relative  leading-[50px] text-[1.3rem] md:text-[1.8rem]">
                    Famewheels
                  </h2>
                  <p>Pakistan's No.1 Bidding Platform</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 mb-4 lg:mb-0 lg:col-span-6">
              <div className="card w-[95%] mx-auto bg-base-100 shadow-xl ">
                <div className="card-body rounded-2xl h-auto md:h-[265px] bg-[#f9f9f9]">
                  <img
                    className=" w-[70%] md:w-[30%] my-4"
                    src="https://famehealthcaretech.com/wp-content/uploads/2023/11/Group-16-1.png"
                    alt="Shoes"
                  />
                  <h2 className="font-[inter] font-[700] relative leading-[25px] md:leading-[50px] text-[1.3rem] md:text-[1.8rem]">
                    Fame Healthcare
                  </h2>
                  <p>
                    Experience seamless healthcare with our 24/7 virtual clinic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherCompanies;
