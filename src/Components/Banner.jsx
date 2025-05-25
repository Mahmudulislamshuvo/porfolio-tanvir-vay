import BannerProject from "./CommonCompo/BannerProject";
import bannerimg from "../assets/bannerpic.png";

const Banner = () => {
  return (
    <div className="bg-[#f8f8f8] ">
      {/* [#f8f8f8] */}
      <div className="container">
        <div className="pb-[200px] relative">
          <div className="flex gap-x-8 pt-14">
            <BannerProject title={"+200"} description={"Projects Completed"} />
            <BannerProject title={"+50"} description={"StartUp Raised"} />
          </div>
          <div>
            <h1 className="text-[300px] leading-none pt-14">Hello</h1>
            <p className="text-3xl pl-4">--This is Mr. xxx</p>
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
