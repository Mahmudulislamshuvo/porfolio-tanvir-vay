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
    {
      id: 1,
      image: certifcate1,
      title:
        "Best researcher of the year 2024-2025 for the article: An Enhanced Deep Learning Approach to Potential Purchaser Prediction: AutoGluon Ensembles for Cross-Industry Profit Maximization. Journal: IEEE Open Journal of the Computer Society. Publisher: IEEE.",
    },
    {
      id: 2,
      image: certifcate2,
      title:
        "Certificate of presentation for the paper: Yoga Posture Image Classification Using Big Transfer(BiT) at IEEE Conference on Computing Applications and Systems (COMPAS 2024).",
    },
    {
      id: 3,
      image: certifcate3,
      title:
        "Certificate of Certified Salesforce Administrator from Salesforce.",
    },
    {
      id: 4,
      image: certifcate4,
      title:
        "Certificate for 2025 Aspire Leaders Program from Aspire Institute.",
    },
    {
      id: 5,
      image: certifcate5,
      title:
        "Certificate for Cyber Awareness for Digital Bangladesh from Digital Security Agency.",
    },
    {
      id: 6,
      image: certifcate6,
      title:
        "Certificate for Information Technology Passport Examination (IP) of Information technology Engineers Examination (ITEE) from Bangladesh IT - engineers Examination Center (BD-ITEC) & Bangladesh Computer Council (BCC).",
    },
    {
      id: 7,
      image: certifcate7,
      title:
        "Certificate for Acquiring Competencies for Employment (ACE) form Bangladesh Youth Leadership Center (BYLC).",
    },
    {
      id: 8,
      image: certifcate8,
      title:
        "Certificate for 18th International Conference on Computer and Information Technology (ICCIT) from Department of CSE of Military Institute of Science and Technology.",
    },
    {
      id: 9,
      image: certifcate9,
      title:
        "Certificate for Software Engineering Job Simulation (Wells Fargo) from Forage.",
    },
    {
      id: 10,
      image: certifcate10,
      title:
        "Certificate for Data Science Job Simulation (British Airways) from Forage.",
    },
  ];

  const [isModalOpen, setIsOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setSwiperReady(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCertificate(null);
  };

  const handleSeeMore = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const truncateTitle = (title, maxLength = 100) => {
    return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  };

  return (
    <div className="container relative z-10 w-full">
      {swiperReady && (
        <Swiper
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
          style={{ zIndex: 1 }}
        >
          {Data.map((item) => (
            <SwiperSlide key={item.id} className="!z-0">
              <div className="w-full  p-2 sm:p-3 md:p-4 lg:p-5 group">
                <div className="relative">
                  <div className="flex justify-center items-center h-[30vh] sm:h-[35vh] md:h-[40vh] w-full overflow-hidden rounded-xl">
                    <img
                      onClick={() => openModal(item)}
                      className="object-contain w-auto h-full rounded-xl cursor-pointer transition-transform duration-300 group-hover:scale-105"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-secondary rounded-full text-center flex justify-center items-center absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <MdArrowOutward className="text-white w-8 h-8 md:w-10 md:h-10" />
                  </div>
                </div>

                <div className="pt-2 md:pt-3">
                  <h4 className="text-primary text-sm sm:text-base md:text-lg">
                    {expandedId === item.id
                      ? item.title
                      : truncateTitle(item.title, windowWidth < 640 ? 80 : 100)}
                  </h4>
                  {item.title.length > 100 && (
                    <button
                      onClick={() => handleSeeMore(item.id)}
                      className="text-xs sm:text-sm text-blue-600 mt-1 md:mt-2"
                    >
                      {expandedId === item.id ? "See less" : "See more"}
                    </button>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {isModalOpen && (
        <CerTificateModal
          modalIsOpen={isModalOpen}
          closeModal={closeModal}
          certificate={selectedCertificate}
        />
      )}

      {/* Navigation buttons - Hidden on mobile */}
      <div
        ref={prevRef}
        className={`${
          windowWidth < 640 ? "hidden" : "flex"
        } custom-swiper-button-prev h-10 w-10 md:h-12 md:w-12 rounded-full bg-secondary text-white justify-center items-center cursor-pointer absolute top-[45%] left-0 md:left-2 -translate-y-1/2 z-10`}
      >
        <MdKeyboardArrowLeft className="text-2xl md:text-3xl" />
      </div>
      <div
        ref={nextRef}
        className={`${
          windowWidth < 640 ? "hidden" : "flex"
        } custom-swiper-button-next h-10 w-10 md:h-12 md:w-12 rounded-full bg-secondary text-white justify-center items-center cursor-pointer absolute top-[45%] right-0 md:right-2 -translate-y-1/2 z-10`}
      >
        <RiArrowRightSLine className="text-2xl md:text-3xl" />
      </div>

      {/* Mobile pagination indicator */}
      {windowWidth < 640 && (
        <div className="swiper-pagination flex justify-center mt-4 space-x-2"></div>
      )}
    </div>
  );
}
