import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdArrowOutward, MdKeyboardArrowLeft } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { Navigation, FreeMode, Pagination } from "swiper/modules";

import CerTificateModal from "./CertificateModal";

import certifcate1 from "../../assets/Certifications/1_page_1.png";
import certifcate2 from "../../assets/Certifications/2.png";
import certifcate3 from "../../assets/Certifications/3.jpg";
import certifcate4 from "../../assets/Certifications/4.png";
import certifcate5 from "../../assets/Certifications/5.jpg";
import certifcate6 from "../../assets/Certifications/6.jpeg";
import certifcate7 from "../../assets/Certifications/7.jpeg";
import certifcate8 from "../../assets/Certifications/8.png";
import certifcate9 from "../../assets/Certifications/9.png";
import certifcate10 from "../../assets/Certifications/10.png";

export default function Slider() {
  const Data = [
    { id: 1, image: certifcate1, title: "Certificate 1 - Page 1" },
    { id: 2, image: certifcate2, title: "Certificate 2" },
    { id: 3, image: certifcate3, title: "Certificate 3" },
    { id: 4, image: certifcate4, title: "Certificate 4" },
    { id: 5, image: certifcate5, title: "Certificate 5" },
    { id: 6, image: certifcate6, title: "Certificate 6" },
    { id: 7, image: certifcate7, title: "Certificate 7" },
    { id: 8, image: certifcate8, title: "Certificate 8" },
    { id: 9, image: certifcate9, title: "Certificate 9" },
    { id: 10, image: certifcate10, title: "Certificate 10" },
  ];

  const [isModalOpen, setIsOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <div className="container relative z-10">
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
          style={{ zIndex: 1 }}
        >
          {Data.map((item) => (
            <SwiperSlide key={item.id} className="!z-0">
              <div
                onClick={() => openModal(item)}
                className="w-[450px] h-[400px] p-5 group"
              >
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

      {/* Modal Component */}
      {isModalOpen && (
        <CerTificateModal
          modalIsOpen={isModalOpen}
          closeModal={closeModal}
          certificate={selectedCertificate}
          className="inexingZ"
        />
      )}

      {/* 3. Attach refs to buttons */}
      <div
        ref={prevRef}
        className="custom-swiper-button-prev h-15 w-15 rounded-full bg-secondary text-white flex justify-center items-center cursor-pointer absolute top-[45%] left-5 -translate-y-1/2 z-10"
      >
        <MdKeyboardArrowLeft className="text-3xl" />
      </div>
      <div
        ref={nextRef}
        className="custom-swiper-button-next h-15 w-15 rounded-full bg-secondary text-white flex justify-center items-center cursor-pointer absolute top-[45%] right-0 -translate-y-1/2 z-10"
      >
        <RiArrowRightSLine className="text-3xl" />
      </div>
    </div>
  );
}
