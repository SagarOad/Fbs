import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "As an orthopedic doctor, I'm impressed with their web development and digital marketing. Our revamped website and enhanced online visibility have brought in more patients. Highly recommended!",
      author: "Dr Shohab Hyder Shaikh",
      position: "CEO at Google",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
    {
      quote:
        "Thrilled with the web development service! They created a modern, responsive website that perfectly represents our healthcare services. Seamless communication and exceptional attention to detail.",
      author: "Mussarat Shah",
      position: "CEO at Google",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
    {
      quote:
        "I'm a doctor, and their web development expertise is fantastic. The visually appealing and functional website they created aligns perfectly with my medical practice. Highly recommended for fellow healthcare professionals!",
      author: "Dr Kashif Shaikh",
      position: "CEO at Google",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
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
    <section className="bg-white py-11 dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <h1 className="font-[inter] font-[700] text-center relative mb-8 leading-[50px] text-[2.4rem]">
          What our clients say!
        </h1>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <figure className="max-w-screen-md mx-auto">
                <blockquote>
                  <p className="text-2xl font-[inter] font-medium text-gray-900 dark:text-white">
                    {testimonial.quote}
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      {testimonial.author}
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
