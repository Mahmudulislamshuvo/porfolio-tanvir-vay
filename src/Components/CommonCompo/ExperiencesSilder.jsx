import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Navigation, FreeMode, Pagination } from "swiper/modules";
import { RiArrowRightSLine } from "react-icons/ri";

const defaultData = [
  "https://images.pexels.com/photos/32162465/pexels-photo-32162465/free-photo-of-vibrant-local-market-scene-with-vegetables-and-eggs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/31708892/pexels-photo-31708892/free-photo-of-elegant-fashion-portrait-with-creative-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/31778275/pexels-photo-31778275/free-photo-of-elegant-fashion-portrait-of-a-woman-in-black.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/31110001/pexels-photo-31110001/free-photo-of-elegant-portrait-of-a-woman-in-nature-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/31110021/pexels-photo-31110021/free-photo-of-sophisticated-fashion-portrait-on-london-steps.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/32343599/pexels-photo-32343599/free-photo-of-striking-woodpecker-perched-on-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1226721/pexels-photo-1226721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/185933/pexels-photo-185933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3775553/pexels-photo-3775553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export default function ExperiencesSlider({ images = defaultData }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="relative w-full">
      {swiperReady && (
        <Swiper
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          slidesPerView={3}
          spaceBetween={20}
          freeMode={true}
          loop={false}
          modules={[FreeMode, Navigation]}
          className="h-full"
        >
          {images.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="group relative w-full h-full flex justify-center items-center overflow-hidden rounded-xl">
                <img
                  className="object-cover rounded-xl w-[220px] h-[180px] transition-transform duration-300 hover:scale-105"
                  src={item}
                  alt={item}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div
        ref={prevRef}
        className="rounded-full bg-secondary text-white flex justify-center items-center cursor-pointer absolute top-1/2 left-2 -translate-y-1/2 z-10 h-7 w-7"
      >
        <MdKeyboardArrowLeft className="text-xl" />
      </div>
      <div
        ref={nextRef}
        className="rounded-full bg-secondary text-white flex justify-center items-center cursor-pointer absolute top-1/2 right-2 -translate-y-1/2 z-10 h-7 w-7"
      >
        <RiArrowRightSLine className="text-xl" />
      </div>
    </div>
  );
}
