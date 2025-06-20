const EducationCard = ({ degree, institution, duration, icon }) => {
  return (
    <div>
      <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg w-full max-w-sm">
        <div className="text-4xl text-green-500">{icon}</div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-gray-800">{degree}</h3>
          <p className="text-md text-gray-600">{institution}</p>
          <p className="text-sm text-gray-500">{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
