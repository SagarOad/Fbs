import React from "react";

const AppInfo = () => {
  return (
    <div>
      <div class="py-24 relative">
        <div class="px-8 md:px-24 xl:flex flex-wrap flex-col md:flex-row items-center">
          <div class="w-full basis-2/6 ml-[-100px] xl:ml-[0px] rounded-2xl overflow-hidden">
            <img
              src="https://www.fameitech.net/assets/3dAnime-31822963.png"
              class="md:w-[700px] xl:absolute top-28 left-0 opacity-75 mx-0"
            />
          </div>
          <div class="flex basis-4/6 flex-col w-full justify-center lg:items-start ">
            <div class="xl:ml-32">
              <h1 class="main-banner-heading font-[cabinet-extrabold] leading-[75px] text-[2.5rem] relative mb-5 text-3xl md:text-[2.5rem]  font-bold md:text-left">
                <span class="flex justify-center absolute left-44 top-[-33px]"></span>{" "}
                Crafting Mobile Experiences That
                <span
                  id="typed"
                  class="power-text ml-4 span-color bg-clip-text text-[#4481eb]"
                >
                  Ignite Innovation
                </span>
              </h1>
              <p class="leading-normal  opacity-75 font-sans font-medium text-base md:text-[18px] md:text-left">
                Elevate your business with our expert mobile app development
                services. <br /> We create intuitive, feature-rich apps that
                captivate users and drive growth.
              </p>
              <div class="pr-0 xl:pr-40">
                <div class="flex flex-col sm:flex-row items-start sm:items-center mt-12">
                  <div class="border-2 mb-5 sm:mb-0 py-6 px-8 rounded-full mr-12">
                    <h1 class="text-[24px]">01</h1>
                  </div>
                  <div>
                    <h2 class="leading-normal  mb-2 opacity-75 font-sans font-bold text-base md:text-[22px] md:text-left">
                      User-Centric Approach
                    </h2>
                    <p class="leading-normal  opacity-60 font-sans font-medium text-base md:text-[18px] md:text-left">
                      Our apps prioritize seamless user experiences, fostering
                      engagement and loyalty.
                    </p>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row items-start sm:items-center mt-12">
                  <div class="border-2 mb-5 sm:mb-0 py-6 px-8 rounded-full mr-12">
                    <h1 class="text-[24px]">02</h1>
                  </div>
                  <div>
                    <h2 class="leading-normal  mb-2 opacity-75 font-sans font-bold text-base md:text-[22px] md:text-left">
                      Cutting-Edge Solutions
                    </h2>
                    <p class="leading-normal  opacity-60 font-sans font-medium text-base md:text-[18px] md:text-left">
                      We blend the latest technologies to create
                      high-performance apps that stand out in the competitive
                      market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppInfo;
