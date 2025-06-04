import BannerProject from "./CommonCompo/BannerProject";
import bannerimg from "../assets/bannerpic.png";
import { MdOutlineArrowDownward } from "react-icons/md";

const Banner = () => {
  return (
    <div className="bg-background pt-[80px]">
      <div className="container">
        <div className="pb-[200px] flex relative">
          {/* line */}
          <div className="w-[2px] h-[400px] bg-[#ededed] relative mt-[200px]">
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

          <div className="pl-10">
            <div className="flex gap-x-8 pt-14">
              <BannerProject
                title={"+200"}
                description={"Projects Completed"}
              />
              <BannerProject title={"+50"} description={"StartUp Raised"} />
            </div>
            <div className="text-primary flex items-center">
              {/* Banner Text */}
              <div>
                <h1 className="text-[200px] leading-none pt-10">Hello</h1>
                <p className="text-2xl pl-4">--This is Mr. xxx</p>
              </div>
            </div>
            <button className="flex items-center gap-x-3 text-secondary text-2xl mt-[130px]">
              Scroll Down <MdOutlineArrowDownward />
            </button>
          </div>
          <img
            className="absolute top-0 right-0 w-[55%]"
            src={bannerimg}
            alt="bannerimg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
