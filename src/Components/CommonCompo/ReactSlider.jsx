import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowOutward } from "react-icons/md";

const ReactSlider = () => {
  const Data = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/31837575/pexels-photo-31837575/free-photo-of-savannah-landscape-in-zaria-nigeria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Hello digital Agency website",
      mavigationLink: "",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/31837575/pexels-photo-31837575/free-photo-of-savannah-landscape-in-zaria-nigeria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Hello digital Agency website",
      mavigationLink: "",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/2312365/pexels-photo-2312365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Creative web design portfolio",
      mavigationLink: "",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/2180032/pexels-photo-2180032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "E-commerce website for fashion",
      mavigationLink: "",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/3182787/pexels-photo-3182787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Responsive agency landing page",
      mavigationLink: "",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/20434746/pexels-photo-20434746/free-photo-of-portrait-of-couple-wearing-traditional-clothes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Modern website design trends",
      mavigationLink: "",
    },
    {
      id: 7,
      image:
        "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Creative marketing agency website",
      mavigationLink: "",
    },
    {
      id: 8,
      image:
        "https://images.pexels.com/photos/2184679/pexels-photo-2184679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Custom web design for businesses",
      mavigationLink: "",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {Data.map((item) => (
            <div key={item.id} className="w-[450px] h-[400px] p-5 group">
              <div className="relative">
                <img
                  className="object-cover overflow-hidden rounded-xl w-[400px] h-[300px]"
                  src={item.image}
                  alt={item.id}
                />

                {/* Centered Icon with hover effect */}
                <div className="w-20 h-20 bg-secondary rounded-full text-center flex justify-center items-center absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MdArrowOutward className="text-white w-10 h-10" />
                </div>
              </div>
              <h4 className="text-primary text-[20px] pt-2">{item.title}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ReactSlider;
