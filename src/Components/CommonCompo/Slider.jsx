import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required icons and modules
import { MdArrowOutward, MdKeyboardArrowLeft } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { Navigation, FreeMode, Pagination } from "swiper/modules";

// Import the modal component and certificate images
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
  const [windowWidth, setWindowWidth] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
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
    <div className="relative w-full">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        // THE FIX: Using onSwiper to reliably initialize navigation
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {Data.map((item) => (
          <SwiperSlide key={item.id} className="self-stretch">
            <div className="group flex h-full flex-col p-2">
              <div
                onClick={() => openModal(item)}
                className="relative cursor-pointer"
              >
                <img
                  className="w-full rounded-xl object-cover aspect-[4/3] bg-gray-200"
                  src={item.image}
                  alt={item.title}
                />
                <div className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:h-20 md:w-20">
                  <MdArrowOutward className="h-8 w-8 md:h-10 md:w-10" />
                </div>
              </div>

              <div className="flex flex-grow flex-col pt-4">
                <h4 className="flex-grow text-primary text-base md:text-lg">
                  {expandedId === item.id
                    ? item.title
                    : truncateTitle(item.title, windowWidth < 768 ? 80 : 120)}
                </h4>
                {item.title.length > 100 && (
                  <button
                    onClick={() => handleSeeMore(item.id)}
                    className="mt-2 text-sm font-semibold text-blue-600 hover:underline self-start"
                  >
                    {expandedId === item.id ? "See less" : "See more"}
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons: These will now work correctly */}
      <div
        ref={prevRef}
        className="custom-swiper-button-prev absolute top-1/2 left-0 z-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-secondary text-white hidden md:flex h-12 w-12"
      >
        <MdKeyboardArrowLeft className="text-3xl" />
      </div>
      <div
        ref={nextRef}
        className="custom-swiper-button-next absolute top-1/2 right-0 z-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-secondary text-white hidden md:flex h-12 w-12"
      >
        <RiArrowRightSLine className="text-3xl" />
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <CerTificateModal
          modalIsOpen={isModalOpen}
          closeModal={closeModal}
          certificate={selectedCertificate}
        />
      )}
    </div>
  );
}
