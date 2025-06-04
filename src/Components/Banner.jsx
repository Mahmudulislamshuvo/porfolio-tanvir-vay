import BannerProject from "./CommonCompo/BannerProject";
import bannerimg from "../assets/mainBanner.png";
import { MdOutlineArrowDownward } from "react-icons/md";
import ProfileImage from "./CommonCompo/ProfileImage";

const Banner = ({ scrollToSection, footerRef }) => {
  return (
    <div className="bg-background pt-[5%]">
      <div className="container">
        <div className="pb-[150px] flex relative flex-col lg:flex-row lg:gap-10">
          {/* Line */}
          <div className="pt-[10%]">
            <div className="w-[2px] h-[400px] bg-[#ededed] relative lg:mt-0">
              <p
                className="absolute whitespace-nowrap"
                style={{
                  top: "-15px",
                  left: "-11px",
                  transform: "rotate(-90deg)",
                  transformOrigin: "top left",
                }}
              >
                Product Designer
              </p>
              <p
                className="absolute whitespace-nowrap"
                style={{
                  bottom: "-15px",
                  right: "-11px",
                  transform: "rotate(-90deg)",
                  transformOrigin: "bottom right",
                }}
              >
                2024
              </p>
            </div>
          </div>

          {/* Left Section */}
          <div className="pl-10 lg:w-1/2">
            <div className="flex gap-x-8 pt-14 flex-wrap justify-between w-[65%]">
              <BannerProject
                title={"+200"}
                description={"Projects Completed"}
              />
              <BannerProject title={"+50"} description={"StartUp Raised"} />
            </div>
            <div className="text-primary flex items-center flex-col lg:flex-row">
              {/* Banner Text */}
              <div className="text-center lg:text-left">
                <h1 className="text-[200px] leading-none pt-10 text-4xl md:text-6xl lg:text-[200px]">
                  Hello
                </h1>
                <p className="text-2xl pl-4">--This is Mr. xxx</p>
              </div>
            </div>
            <button
              onClick={() => scrollToSection(footerRef)}
              className="flex items-center gap-x-3 text-secondary text-2xl mt-[130px] mx-auto lg:mx-0"
            >
              Scroll Down <MdOutlineArrowDownward />
            </button>
          </div>

          {/* Right Section (Profile Image) */}
          <div className="absolute top-0 right-0 flex justify-end w-[55%] lg:w-1/2">
            <ProfileImage imgSrc={bannerimg} alt="bannerimg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
