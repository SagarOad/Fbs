import React from "react";
import lineArt from "../assets/vectors/gd2.jpg";

const GraphicInfo = () => {
  return (
    <div>
      <div className="services-sec rounded-[50px]">
        <div
          id="services"
          className="w-full pt-30 md:pt-10 relative pb-20 px-8 md:px-24 mx-auto my-16"
        >
          <div className="md:w-[80%] mb-16">
            <h1 class="font-[inter] text-white font-[700] relative mt-8 leading-[50px] text-[2.4rem]">
              What makes Graphic Designing great
            </h1>
          </div>

          <div className="grid grid-cols-12">
            <div className="xl:col-span-3 flex flex-col justify-center items-center col-span-12 p-4 bg-white rounded-[26px] mr-6">
              <img src={lineArt} className="rounded-[26px] w-[238px]" />

              <p className="leading-normal text-[#212121] opacity-75 font-sans font-medium md:text-[22px] mb-8 text-center">
                Elevate Your Online Presence with Our Web Development Services!
              </p>
            </div>

            <div className="xl:col-span-9 col-span-12">
              <div className="grid grid-cols-12 gap-4  md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <div className="opacity-100 group p-12 px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg transition-all   sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-black  service-card- text-[24px] font-[inter] mb-4">
                        Striking Visual Appeal
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Great graphic design captures attention with visually
                        compelling elements that resonate with viewers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white  hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-black  service-card- text-[24px] font-[inter] mb-4 ">
                        Clear Communication
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Effective design communicates messages concisely,
                        conveying information effortlessly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[20px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-black  service-card- text-[24px] font-[inter] mb-4">
                        Consistency and Branding
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Cohesive design elements establish a strong brand
                        identity and build recognition.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-black  service-card- text-[24px] font-[inter] mb-4">
                        Balanced Layouts
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Well-structured layouts guide the eye and create a
                        harmonious viewing experience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-black  service-card- text-[24px] font-[inter] mb-4">
                        Creativity and Innovation
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Innovative design solutions showcase originality and
                        leave a memorable impression.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-black  service-card- text-[24px] font-[inter] mb-4">
                        Emotional Connection
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Successful graphic design evokes emotions, fostering a
                        deeper connection with the audience.
                      </p>
                    </div>
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

export default GraphicInfo;
