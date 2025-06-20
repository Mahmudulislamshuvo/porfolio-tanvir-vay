import EducationCard from "./CommonCompo/EducationCard";

const Education = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Education
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <EducationCard
            degree="BSC in Computer Science & Engineering"
            institution="Daffodil International University"
            duration="2016 - 2020"
            icon={<i className="fas fa-graduation-cap"></i>}
          />
          <EducationCard
            degree="Pre-Sea Training Course (Nautical Science)"
            institution="Academy of Marine Education & Technology"
            duration="2013 - 2014"
            icon={<i className="fas fa-anchor"></i>}
          />
          <EducationCard
            degree="Higher Secondary Certificate"
            institution="Satkhira Government College"
            duration="2011 - 2012"
            icon={<i className="fas fa-school"></i>}
          />
          <EducationCard
            degree="Secondary School Certificate"
            institution="Satkhira Government High School"
            duration="2002 - 2010"
            icon={<i className="fas fa-graduation-cap"></i>}
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
