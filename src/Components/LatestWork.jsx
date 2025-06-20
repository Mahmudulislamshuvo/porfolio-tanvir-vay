import { FaArrowRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import PortfolioBlogHeadings from "./CommonCompo/PortfolioBlogHeadings";
import Slider from "./CommonCompo/Slider";

const LatestWork = () => {
  return (
    <div className="bg-background py-[100px]">
      <div className="container">
        <PortfolioBlogHeadings
          title={"Research"}
          description={"Latest Works"}
        />
        <Slider />
      </div>
    </div>
  );
};

export default LatestWork;
