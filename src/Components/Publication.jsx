import Slider from "./CommonCompo/Slider";
import CalenderICon from "./SvgIcons/CalenderICon";
import EducationPlug from "./SvgIcons/EducationPlug";
import LinkIcon from "./SvgIcons/LinkIcon";
import RightSignIcon from "./SvgIcons/RightSignIcon";

const Publication = () => {
  const publications = [
    {
      id: 1,
      type: "Journal Publication",
      title:
        "An Enhanced Deep Learning Approach to Potential Purchaser Prediction: AutoGluon Ensembles for Cross-Industry Profit Maximization",
      journal: "IEEE Open Journal of the Computer Society",
      year: 2025,
      publicationType: "Journal article",
      doi: "10.1109/OJCS.2025.3552376",
    },
    {
      id: 2,
      type: "Conference Paper",
      title: "Yoga Posture Image Classification Using Big Transfer(BiT)",
      journal:
        "IEEE Conference on Computing Applications and Systems, COMPAS 2024",
      year: 2024,
      publicationType: "Conference paper",
      doi: "10.1109/COMPAS60761.2024.10796330",
    },
    {
      id: 3,
      type: "Book Chapter",
      title:
        "Improved Classification of Kidney Lesions in CT Scans Using CNN with Attention Layers: Achieving High Accuracy and Performance",
      journal: "Studies in Big Data",
      year: 2024,
      publicationType: "Book chapter",
      doi: "10.1007/978-981-97-3966-0_8",
    },
    // New entries added here
    {
      id: 4,
      type: "Conference Paper",
      title:
        "Multi-Sense Attention Network (MSANet): Enhanced Human Activity Recognition Using Deep Learning Architectures with Self-Attention Mechanisms",
      journal:
        "IEEE Conference on Computing Applications and Systems, COMPAS 2024",
      year: 2024,
      publicationType: "Conference paper",
      doi: "10.1145/3723178.3723226",
    },
    {
      id: 5,
      type: "Conference Paper",
      title: "Yoga Posture Image Classification Using Big Transfer (BiT)",
      journal:
        "IEEE Conference on Computing Applications and Systems, COMPAS 2024",
      year: 2024,
      publicationType: "Conference paper",
      doi: "10.1109/COMPAS60761.2024.10796330",
    },
    {
      id: 6,
      type: "Book Chapter",
      title:
        "Improved Classification of Kidney Lesions in CT Scans Using CNN with Attention Layers: Achieving High Accuracy and Performance",
      journal: "Studies in Big Data",
      year: 2024,
      publicationType: "Book chapter",
      doi: "10.1007/978-981-97-3966-0_8",
    },
  ];

  return (
    <div className="bg-[#FCFCFC]">
      <div className="container">
        <div className="py-10">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-x-2">
              <h2 className="text-5xl py-10 text-center">Publications</h2>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-y-5">
            {publications.map((publication) => (
              <div
                key={publication.id}
                className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl p-6 max-w-2xl w-[49%]"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-24 h-24">
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-blue-400 rounded-tr-2xl"></div>
                </div>

                <div className="absolute bottom-0 left-0 w-16 h-16 opacity-10 group-hover:opacity-30 transition-opacity">
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-400 rounded-bl-2xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Category badge */}
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                    {publication.type}
                  </span>

                  {/* Title */}
                  <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-3  transition-colors">
                    {publication.title}
                  </h1>

                  {/* Journal info */}
                  <div className="flex items-center mb-2">
                    <EducationPlug />
                    <p className="text-md font-medium text-gray-700">
                      {publication.journal}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                    {/* Year */}
                    <div className="flex items-center">
                      <CalenderICon />
                      <p className="text-sm font-semibold text-gray-600">
                        {" "}
                        {publication.year}
                      </p>
                    </div>

                    {/* Publication Type */}
                    <div className="flex items-center">
                      <RightSignIcon />
                      <p className="text-sm font-semibold text-gray-600">
                        {publication.publicationType}
                      </p>
                    </div>

                    {/* DOI */}
                    <div className="flex items-center">
                      <LinkIcon />
                      <a
                        href={publication.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                      >
                        {publication.doi}
                      </a>
                    </div>
                  </div>
                  {/* Button place */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;
