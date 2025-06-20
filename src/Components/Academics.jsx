import EducationCard from "./CommonCompo/EducationCard";
import sfsLogo from "../assets/academics/st-francis-college-seeklogo.png";
import jahangir from "../assets/academics/jahangirnagar-university-seeklogo.png";
import aiub from "../assets/academics/aiub-logo-white-border.svg";
import tejgaon from "../assets/academics/tejgaon-college-dhaka-seeklogo.png";
import monipur from "../assets/academics/monipur.png";

const Academics = () => {
  return (
    <div className="container">
      <div className="pb-[50px]">
        <h1 className="text-center text-5xl font-bold py-[100px]">Academics</h1>
        <div className="flex flex-wrap justify-start">
          <EducationCard
            degree="Master of Science In Information Technology (IT)"
            institution="St Francis College, Brooklyn, New York"
            icon={sfsLogo}
          />
          <EducationCard
            degree="Master of Science In Applied Physics & Electronics Engineering (APE)"
            institution="Jahangirnagar University, Dhaka"
            icon={jahangir}
          />
          <EducationCard
            degree="Bachelor of Science In Electrical & Electronic Engineering (EEE)"
            institution="Bangladesh University of Business & Technology, Dhaka"
            icon={aiub}
          />
          <EducationCard
            degree="Higher Secondary School Certificate (HSC)"
            institution="Tejgaon College, Dhaka"
            icon={tejgaon}
          />
          <EducationCard
            degree="Secondary School Certificate (SSC)"
            institution="Monipur High School & College, Dhaka"
            icon={monipur}
          />
        </div>
      </div>
    </div>
  );
};

export default Academics;
