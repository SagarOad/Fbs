import React from "react";
import lineArt from "../assets/vectors/lineartVideo.jpg";

const VideoInfo = () => {
  return (
    <div>
      <div className="services-sec rounded-[50px]">
        <div
          id="services"
          className="w-full pt-30 md:pt-10 relative pb-20 px-8 md:px-24 mx-auto my-16"
        >
          <div className="md:w-[80%] mb-16">
            <h1 class="font-[inter] text-white font-[700] relative mt-8 leading-[50px] text-[2.4rem]">
              What Makes 2D/3D Animation Outstanding
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
                        Visual Storytelling
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Animation breathes life into narratives, making complex
                        ideas and stories easily understandable and engaging.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white  hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-black  service-card- text-[24px] font-[inter] mb-4 ">
                        Creative Freedom
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        2D/3D animation offers limitless possibilities, allowing
                        concepts to transcend reality and captivate audiences.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[20px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-black  service-card- text-[24px] font-[inter] mb-4">
                        Versatility
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Animation suits various contexts – from explainer videos
                        to entertainment, delivering compelling content across
                        platforms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-black  service-card- text-[24px] font-[inter] mb-4">
                        Emotional Resonance
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Characters and scenes in animation evoke emotions,
                        forging connections with audiences in ways other media
                        can't.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-black  service-card- text-[24px] font-[inter] mb-4">
                        Innovative Expression
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        2D/3D animation allows for unique expression, enabling
                        brands to stand out in a visually saturated landscape.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-black  service-card- text-[24px] font-[inter] mb-4">
                        Memorable Impact
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Animated visuals leave a lasting impression, enabling
                        brand messages and concepts to linger in viewers' minds.
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

export default VideoInfo;
