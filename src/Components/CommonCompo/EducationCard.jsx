const EducationCard = ({
  degree,
  institution,
  duration = "2014-2020",
  icon,
  group,
}) => {
  return (
    // The grid gap handles spacing, so removed p-2 from this wrapper
    <div className="w-full">
      <div className="group h-full relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-md transition-all duration-500 hover:shadow-xl">
        {/* Gradient border effect - no changes needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-500 opacity-0 transition-opacity duration-500 group-hover:opacity-20"></div>

        {/* Decorative corner elements - no changes needed */}
        <div className="absolute top-0 right-0 h-16 w-16">
          <div className="absolute right-0 top-0 h-8 w-8 rounded-tr-2xl border-r-2 border-t-2 border-gray-300"></div>
        </div>

        {/* Main Content Area: Aligns items center on mobile, top on desktop */}
        <div className="relative flex h-full flex-col items-center p-6 text-center md:flex-row md:items-start md:space-x-6 md:p-8 md:text-left">
          {/* Icon with animated border */}
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-1.5 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 opacity-75 blur-sm transition-all duration-500 group-hover:opacity-100 z-0"></div>
            <div className="relative z-10 rounded-xl bg-white p-2 shadow-md">
              {/* FIXED: Used standard and responsive h/w classes */}
              <img
                src={icon}
                alt={`${institution} logo`}
                className="h-20 w-20 object-contain md:h-24 md:w-24"
              />
            </div>
          </div>

          <div className="mt-5 flex h-full w-full flex-col md:mt-0">
            {/* FIXED: Responsive text size and completed the gradient text effect */}
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 md:text-2xl">
              {degree}
            </h3>

            {/* Institution with animated underline */}
            <div className="relative mt-2">
              {/* FIXED: Corrected text-md to text-base */}
              <p className="text-base font-medium text-gray-700 inline-block">
                {institution}
              </p>
              {group && (
                <p className="text-sm font-semibold text-gray-500">{group}</p>
              )}
              {/* The animated underline */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-purple-400 transition-all duration-500 group-hover:w-full"></div>
            </div>

            {/* Pushed duration to the bottom of the card for better layout */}
            <div className="mt-auto pt-4 flex items-center justify-center md:justify-start">
              <svg
                className="h-4 w-4 text-gray-500 mr-2"
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
      </div>
    </div>
  );
};

export default EducationCard;
