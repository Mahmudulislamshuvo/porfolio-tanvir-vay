import EducationCard from "./CommonCompo/EducationCard";
import sfsLogo from "../assets/academics/st-francis-college-seeklogo.png";
import jahangir from "../assets/academics/jahangirnagar-university-seeklogo.png";
import bubt from "../assets/academics/BUBT-Logo.png";
import tejgaon from "../assets/academics/tejgaon-college-dhaka-seeklogo.png";
import monipur from "../assets/academics/monipur.png";

const Academics = () => {
  return (
    // Section wrapper with a light background and responsive vertical padding
    <div className="py-8 md:py-6 sm:py-3 bg-chosenBackground">
      {/* Using the robust, overflow-proof container we built before */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive heading with appropriate spacing */}
        <h1 className="text-center text-4xl sm:text-5xl font-bold text-primary pb-5 lg:mb-4">
          Academics
        </h1>
        {/* এইখানে পরিবর্তন করা হয়েছে। lg:grid-cols-2 ক্লাসটি সরিয়ে ফেলা হয়েছে।
          ফলে এখন ছোট-বড় সব স্ক্রিনেই একটি কলাম দেখাবে।
        */}
        <div className="grid grid-cols-1 gap-8">
          <EducationCard
            degree="Master of Science In Information Technology (IT)"
            institution="St Francis College, Brooklyn, New York"
            icon={sfsLogo}
            duration="2024 - 2025"
          />
          <EducationCard
            degree="Master of Science In Applied Physics & Electronics Engineering (APE)"
            institution="Jahangirnagar University, Dhaka"
            icon={jahangir}
            duration="2021 - 2022"
          />
          <EducationCard
            degree="Bachelor of Science In Electrical & Electronic Engineering (EEE)"
            institution="Bangladesh University of Business & Technology, Dhaka"
            icon={bubt}
            duration="2016 - 2020"
          />
          <EducationCard
            degree="Higher Secondary School Certificate (HSC)"
            institution="Tejgaon College, Dhaka"
            icon={tejgaon}
            duration="2013 - 2015"
            group="Science"
          />
          <EducationCard
            degree="Secondary School Certificate (SSC)"
            institution="Monipur High School & College, Dhaka"
            icon={monipur}
            duration="2003 - 2013"
            group="Science"
          />
        </div>
      </div>
    </div>
  );
};

export default Academics;
