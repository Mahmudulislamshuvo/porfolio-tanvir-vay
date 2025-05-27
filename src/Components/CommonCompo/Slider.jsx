import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdArrowOutward, MdKeyboardArrowLeft } from "react-icons/md";
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import { RiArrowRightSLine } from "react-icons/ri";

export default function Slider() {
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

  // 1. Create refs for navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // 2. Use state to trigger swiper update
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true); // after first render, refs exist, enable swiper init
  }, []);

  return (
    <div className="container relative">
      {swiperReady && (
        <Swiper
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          {Data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-[450px] h-[400px] p-5 group">
                <div className="relative">
                  <img
                    className="object-cover overflow-hidden rounded-xl w-[400px] h-[300px]"
                    src={item.image}
                    alt={item.id}
                  />
                  <div className="w-20 h-20 bg-secondary rounded-full text-center flex justify-center items-center absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <MdArrowOutward className="text-white w-10 h-10" />
                  </div>
                </div>
                <h4 className="text-primary text-[20px] pt-2">{item.title}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* 3. Attach refs to buttons */}
      <div
        ref={prevRef}
        className="custom-swiper-button-prev h-20 w-20 rounded-full bg-secondary text-white flex justify-center items-center cursor-pointer absolute top-1/2 left-[-80px] -translate-y-1/2 z-10"
      >
        <MdKeyboardArrowLeft className="text-3xl" />
      </div>
      <div
        ref={nextRef}
        className="custom-swiper-button-next h-20 w-20 rounded-full bg-secondary text-white flex justify-center items-center cursor-pointer absolute top-1/2 right-[-90px] -translate-y-1/2 z-10"
      >
        <RiArrowRightSLine className="text-3xl" />
      </div>
    </div>
  );
}
