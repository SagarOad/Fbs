import React from "react";
import Slider from "react-slick";

const Awards = () => {
  const awards = [
    {
      award: "Top Android App Development Companies",
      para: "Micheal Gough",
      image: "https://flowhcm.com/wp-content/uploads/2023/08/pash.webp",
    },
    {
      award:
        "Flowbite is just awesome. It contains tons of predesigned components...",
      para: "Micheal Gough",
      image: "https://flowhcm.com/wp-content/uploads/2023/08/psb.webp",
    },
  
    {
      award:
        "Flowbite is just awesome. It contains tons of predesigned components...",
      para: "Micheal Gough",
      image: "https://flowhcm.com/wp-content/uploads/2023/08/sep-logo.webp",
    },
    // Add more testimonials here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="py-16 lg:py-28  border-b-[#e6e6e6] border-b-2">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-[inter] font-[700] text-center relative mb-8 leading-[50px] text-[2.4rem]">
          Registered In
        </h1>
        <Slider {...settings}>
          {awards.map((award, index) => (
            <div className="" key={index}>
              <div className="flex flex-col bg-white shadow-lg m-2 lg:m-6 h-52 justify-center items-center">
                <img className="w-[140px]" src={award.image} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Awards;
