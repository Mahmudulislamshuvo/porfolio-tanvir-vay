import PortfolioBlogHeadings from "./CommonCompo/PortfolioBlogHeadings";
import Slider from "./CommonCompo/Slider";

const Certifications = () => {
  return (
    <div className="bg-background py-[100px]">
      <div className="container">
        <PortfolioBlogHeadings description={"Certifications"} />
        <Slider />
      </div>
    </div>
  );
};

export default Certifications;
