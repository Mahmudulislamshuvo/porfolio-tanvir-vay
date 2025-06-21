const EducationCard = ({
  degree,
  institution,
  duration = "2014-2020",
  icon,
}) => {
  return (
    <div className="w-full sm:w-1/2 p-4">
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-xl transition-all duration-500 hover:shadow-2xl">
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-20"></div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 right-0 w-16 h-16">
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-400 rounded-tr-2xl"></div>
        </div>

        <div className="flex items-start space-x-4 p-6">
          {/* Icon with animated border */}
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-white p-2 rounded-xl shadow-md">
              <img src={icon} alt="icon" className="w-16 h-16 object-contain" />
            </div>
          </div>

          <div className="flex flex-col">
            {/* Degree with gradient text */}
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {degree}
            </h3>

            {/* Institution with animated underline */}
            <div className="mt-2 relative">
              <p className="text-md font-medium text-gray-700 inline-block">
                {institution}
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-500 group-hover:w-full"></div>
            </div>

            {/* Duration with decorative icon */}
            <div className="mt-3 flex items-center">
              <svg
                className="w-4 h-4 text-purple-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <p className="text-sm font-semibold text-gray-500">{duration}</p>
            </div>
          </div>
        </div>

        {/* Animated button effect */}
        {/* <div className="px-6 pb-4">
          <div className="relative inline-block">
            <button className="relative z-10 px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transition-all duration-300 group-hover:opacity-90">
              View Details
            </button>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default EducationCard;
