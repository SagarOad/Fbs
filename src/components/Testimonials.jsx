import React from "react";
import { useEffect } from "react";
import Slider from "react-slick";

const Testimonials = () => {
  useEffect(() => {
    console.log("Slider component mounted");
    return () => {
      console.log("Slider component unmounted");
    };
  }, []);

  const testimonials = [
    {
      quote:
        "Flowbite is just awesome. It contains tons of predesigned components...",
      author: "Micheal Gough",
      position: "CEO at Google",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
    {
      quote:
        "Flowbite is just awesome. It contains tons of predesigned components...",
      author: "Micheal Gough",
      position: "CEO at Google",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
    {
      quote:
        "Flowbite is just awesome. It contains tons of predesigned components...",
      author: "Micheal Gough",
      position: "CEO at Google",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
    {
      quote:
        "Flowbite is just awesome. It contains tons of predesigned components...",
      author: "Micheal Gough",
      position: "CEO at Google",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
    // Add more testimonials here
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "custom-slider", // Add a custom class
  };

  return (
    <section className="bg-[#f9fafb] pt-20 pb-11 dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <figure className="max-w-screen-md mx-auto">
                <h1 className="font-[inter] font-[700] text-center relative mb-8 leading-[50px] text-[2.4rem]">
                  We develop enterprise-grade software solutions for businesses.
                </h1>
                <blockquote>
                  <p className="text-2xl font-[inter] font-medium text-gray-900 dark:text-white">
                    {testimonial.quote}
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={testimonial.image}
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      {testimonial.position}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
