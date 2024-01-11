import React from "react";
import lineArt from "../assets/vectors/bwink_ppl_09_single_10.jpg";

const MarketingInfo = () => {
  return (
    <div>
      <div className="services-sec rounded-[50px]">
        <div
          id="services"
          className="w-full pt-30 md:pt-10 relative pb-20 px-8 md:px-24 mx-auto my-16"
        >
          <div className="md:w-[80%] mb-16">
            <h1 class="font-[inter] text-white font-[700] relative mt-8 leading-[50px] text-[2.4rem]">
              What Elevates Effective Social Media Marketing
            </h1>
          </div>

          <div className="grid grid-cols-12">
            <div className="xl:col-span-3 flex flex-col justify-center items-center col-span-12 p-4 bg-white rounded-[26px] mr-6">
              <img src={lineArt} className="rounded-[26px] w-[238px]" />

              <p className="leading-normal text-[#212121] opacity-75 font-sans font-medium md:text-[22px] mb-8 text-center">
                Amplify Your Brand's Reach with Our Social Media Marketing
                Solutions!
              </p>
            </div>

            <div className="xl:col-span-9 col-span-12">
              <div className="grid grid-cols-12 gap-4  md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <div className="opacity-100 group p-12 px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg transition-all   sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-black  service-card- text-[24px] font-[inter] mb-4">
                        Strategic Approach
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        A great social media marketing strategy is well-planned
                        and aligns with business objectives, ensuring every
                        effort serves a purpose.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white  hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-black  service-card- text-[24px] font-[inter] mb-4 ">
                        Data-Driven Decision-Making
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Leveraging data and analytics allows for informed
                        decisions, optimizing campaigns for better results.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[20px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-black  service-card- text-[24px] font-[inter] mb-4">
                        Personalized Content
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Tailored content resonates with the audience, fostering
                        meaningful connections and driving engagement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-black  service-card- text-[24px] font-[inter] mb-4">
                        Multi-Channel Campaigns
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        An effective social media marketing approach utilizes
                        various channels to reach a broader audience and
                        reinforce brand messaging.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-black  service-card- text-[24px] font-[inter] mb-4">
                        Audience Targeting
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Precise targeting ensures marketing efforts reach the
                        right people, increasing the likelihood of conversion.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="opacity-100 p-12 group px-5 py-7 pb-5 shadow-md z-50 bg-white hover:shadow-lg  transition-all  hover: sm:px-7.5 xl:col-span-4 col-span-12 rounded-[26px]">
                  <div className="flex">
                    <div className="">
                      <h1 className="text-black  service-card- text-[24px] font-[inter] mb-4">
                        Continuous Analysis
                      </h1>
                      <p className="text-[#212121]  font-[Poppins]">
                        Regular assessment and improvement based on performance
                        data ensure ongoing success and adaptability to trends
                        and audience preferences.
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

export default MarketingInfo;
