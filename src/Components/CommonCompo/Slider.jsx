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

  useEffect(() => {
    setSwiperReady(true);
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
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const truncateTitle = (title) => {
    const threshold = 100;
    return title.length > threshold ? title.slice(0, threshold) + "..." : title;
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
            <SwiperSlide key={item.id} className="!z-0 ">
              <div className="w-[450px] p-5 group">
                <div className="relative">
                  <img
                    onClick={() => openModal(item)}
                    className="object-cover overflow-hidden rounded-xl w-[380px] h-[300px]"
                    src={item.image}
                    alt={item.id}
                  />
                  <div className="w-20 h-20 bg-secondary rounded-full text-center flex justify-center items-center absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <MdArrowOutward className="text-white w-10 h-10" />
                  </div>
                </div>

                {/* Title with "See more" functionality */}
                <h4 className="text-primary text-[20px] pt-2">
                  {expandedId === item.id
                    ? item.title
                    : truncateTitle(item.title)}{" "}
                  {item.title.length > 100 && (
                    <button
                      onClick={() => handleSeeMore(item.id)}
                      className="text-sm text-blue-600 mt-2"
                    >
                      {expandedId === item.id ? "See less" : "See more"}
                    </button>
                  )}
                </h4>
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
        />
      )}

      {/* Navigation buttons */}
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
