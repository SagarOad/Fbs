import React from "react";

const EffectiveFeatures = ({
  feature1,
  feature2,
  feature3,
  feature4,
  featureDesc1,
  featureDesc2,
  featureDesc3,
  featureDesc4,
}) => {
  return (
    <div>
      <div class="px-8 xl:px-24 py-24 bg-white">
        <h1 class="font-[cabinet-extrabold] text-center relative leading-[75px] text-[2.5rem]">
          App Effective Features
        </h1>
        <div class="grid grid-cols-12">
          <div class="col-span-12 lg:col-span-3 group flex justify-center transition-all hover:shadow-lg hover:bg-[#4481eb]  rounded-[50px] items-center  p-8 m-4">
            <div class="px-2 ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class=" text-[92px] mx-auto mb-8 text-[#4481eb] group-hover:text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20.97 7.27a.996.996 0 000-1.41l-2.83-2.83a.996.996 0 00-1.41 0l-4.49 4.49-3.89-3.89c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l3.89 3.89L3 16.76V21h4.24l4.52-4.52 3.89 3.89c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-3.89-3.89 4.48-4.48zM5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.2 1.2-1.9 1.9-3.88-3.88zm11.23 7.44l-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9-3.89-3.89 1.9-1.9 1.21 1.21zM6.41 19H5v-1.41l9.61-9.61 1.3 1.3.11.11L6.41 19zm9.61-12.44l1.41-1.41 1.41 1.41-1.41 1.41-1.41-1.41z"></path>
              </svg>
              <h1 class="leading-normal text-[#212121] group-hover:opacity-100 group-hover:text-white opacity-75 font-[inter] font-bold text-[20px] text-center md:text-[24px] mb-5">
                {feature1}
              </h1>
              <p class="leading-normal text-[#212121] opacity-75 group-hover:opacity-100 font-[inter] group-hover:text-white font-medium text-base md:text-[18px]  text-center">
                {featureDesc1}
              </p>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-3 flex group justify-center transition-all hover:shadow-lg hover:bg-[#4481eb] rounded-[50px] items-center  p-8 m-4">
            <div class="px-2 ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class=" text-[92px] mx-auto mb-8 text-[#4481eb] group-hover:text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
              </svg>
              <h1 class="leading-normal text-[#212121] group-hover:opacity-100 group-hover:text-white hover:opacity-100 opacity-75 font-[inter] font-bold text-[22px] text-center md:text-[24px] mb-5">
                {feature2}
              </h1>
              <p class="leading-normal text-[#212121] opacity-75 group-hover:opacity-100 font-[inter] group-hover:text-white font-medium text-base md:text-[18px]  text-center">
                {featureDesc2}{" "}
              </p>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-3 flex justify-center transition-all hover:shadow-lg hover:bg-[#4481eb] rounded-[50px] group items-center p-8 m-4">
            <div class="px-2 ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class=" text-[92px] mx-auto mb-8 text-[#4481eb] group-hover:text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path>
              </svg>
              <h1 class="leading-normal text-[#212121] opacity-75 group-hover:opacity-100  group-hover:text-white font-[inter] font-bold text-[22px] text-center md:text-[24px] mb-5">
                {feature3}
              </h1>
              <p class="leading-normal text-[#212121] opacity-75 group-hover:text-white group-hover:opacity-100 font-[inter] font-medium text-base md:text-[18px]  text-center">
                {featureDesc3}
              </p>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-3 flex justify-center transition-all hover:shadow-lg hover:bg-[#4481eb] rounded-[50px] group items-center p-8 m-4">
            <div class="px-2 ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                viewBox="0 0 24 24"
                class=" text-[92px] mx-auto mb-8 text-[#4481eb] group-hover:text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M10.537.904L6.602 12.04l4.798.037-3.748 11.018v.002L17.996 8.39h-5.022L17.847.903h-3.824zM6.903 4.91a.585.585 0 0 0-.412.17L.155 11.285a.682.682 0 0 0 0 .865l6.448 6.396a.625.625 0 0 0 .824 0 .638.638 0 0 0 0-.865l-5.436-5.53a.641.641 0 0 1 0-.865l5.324-5.344a.574.574 0 0 0 0-.865.586.586 0 0 0-.412-.169zm10.193 0a.585.585 0 0 0-.412.17.572.572 0 0 0 0 .864l5.435 5.343a.64.64 0 0 1 0 .866l-5.548 5.53a.64.64 0 0 0 0 .865.625.625 0 0 0 .824 0l6.45-6.396a.68.68 0 0 0 0-.865l-6.337-6.208a.585.585 0 0 0-.412-.169z"></path>
              </svg>
              <h1 class="leading-normal text-[#212121] group-hover:opacity-100 opacity-75 group-hover:text-white font-[inter] font-bold text-[22px] text-center md:text-[24px] mb-5">
                {feature4}
              </h1>
              <p class="leading-normal text-[#212121] group-hover:opacity-100 opacity-75 group-hover:text-white font-[inter] font-medium text-base md:text-[18px]  text-center">
                {featureDesc4}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffectiveFeatures;
