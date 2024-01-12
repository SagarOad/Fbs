import React from "react";

const MainBanner = () => {
  return (
    <div className="bg-[#f9fafb] h-[100%] py-20 flex justify-center items-center relative overflow-hidden">
      <div id="particles-js"></div>
      <div class="count-particles"></div>
      <div className="grid grid-cols-12 mx-8 2xl:mx-28 z-40">
        <div className="lg:col-span-6 col-span-12 py-20 lg:h-auto 2xl:h-[80vh] flex flex-col justify-center items-center">
          <div>
            <h1 className="font-[cabinet-extrabold]  text-[black] relative leading-[78px] text-[4rem] lg:text-[4rem]">
              Transforming Visions into{" "}
              <span className="text-[#25aae1] relative">
                Digital Realities.
                <svg
                  className="absolute right-0 bottom-0 mb-[-6px]"
                  class="cs4ft cjvbc cb0iz c3cwy cqn82 cmzpz"
                  width="220"
                  height="24"
                  viewBox="0 0 220 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M134.66 13.107c-10.334-.37-20.721-.5-31.12-.291l-2.6.06c-4.116.04-8.193.602-12.3.749-14.502.43-29.029 1.196-43.514 2.465-6.414.63-12.808 1.629-19.04 2.866-7.93 1.579-16.113 3.71-23.367 5.003-2.211.374-3.397-1.832-2.31-4.906.5-1.467 1.838-3.456 3.418-4.813a16.047 16.047 0 0 1 6.107-3.365c16.88-4.266 33.763-6.67 51.009-7.389C71.25 3.187 81.81 1.6 92.309.966c11.53-.65 23.097-.938 34.66-.96 7.117-.054 14.25.254 21.36.318l16.194.803 4.62.39c3.85.32 7.693.618 11.53.813 8.346.883 16.673.802 25.144 2.159 1.864.276 3.714.338 5.566.873l.717.225c6.162 1.977 7.92 3.64 7.9 7.197l-.003.203c-.017.875.05 1.772-.112 2.593-.581 2.762-4.066 4.12-8.637 3.63-13.696-1.06-27.935-3.332-42.97-4.168-11.055-.83-22.314-1.459-33.596-1.603l-.022-.332Z"
                    fill="#D1D5DB"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </h1>
            <p className="text-[18px] mt-8 font-[inter] lg:mr-[150px] font-400 text-[#6b7280]">
              Elevate your business with Fame Business Solutions – Where Ideas
              Transform into Success.
            </p>
            <button
              onClick={() => document.getElementById("my_modal_4").showModal()}
              className="btn mt-6 rounded-full bg-[#4481eb] text-[white] hover:text-[black] font-medium font-[inter] h-[52px] w-[190px] text-[18px]"
            >
              Get Quote
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 col-span-12 flex justify-end items-center sider-banner">
          <div class="w-full xl:w-[80%] rounded-2xl  overflow-hidden">
            <video
              loop
              autoPlay
              muted
              type="video/mp4"
              src="https://video-previews.elements.envatousercontent.com/h264-video-previews/4f477773-31f6-4911-b5cc-0b76b3dbeb5c/8841628.mp4"
            ></video>
            {/* <div className=" flex justify-end mt-8">
              <button className="btn rounded-none shadow-lg bg-[white] text-[black] hover:text-[black] font-medium font-[inter] h-[52px] w-[190px] text-[18px]">
                Learn more
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
