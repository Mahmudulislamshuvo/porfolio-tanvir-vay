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
      doi: "DOI: 10.1109/OJCS.2025.3552376",
      link: "https://doi.org/10.1109/ojcs.2025.3552376",
    },
    {
      id: 2,
      type: "Journal Publication",
      title:
        "Advancements and challenges of deep learning architectures for aerial image analysis: A systematic review",
      journal: "Intelligent Systems with Applications",
      year: 2025,
      publicationType: "Journal article",
      doi: "DOI: 10.1016/j.iswa.2025.200537",
      link: "https://doi.org/10.1016/j.iswa.2025.200537",
    },
    {
      id: 3,
      type: "Conference Paper",
      title:
        "A Deep Learning Model for Lane Segmentation in Autonomous Vehicles Navigation",
      journal:
        "IEEE Conference on Computing Applications and Systems, COMPAS 2024",
      year: 2024,
      publicationType: "Conference paper",
      doi: "DOI: 10.1145/3723178.3723232",
      link: "https://doi.org/10.1145/3723178.3723232",
    },
    {
      id: 4,
      type: "Conference Paper",
      title:
        "Multi-Sense Attention Network (MSANet): Enhanced Human Activity Recognition Using Deep Learning Architectures with Self-Attention Mechanisms",
      journal:
        "IEEE Conference on Computing Applications and Systems, COMPAS 2024",
      year: 2024,
      publicationType: "Conference paper",
      doi: "DOI: 10.1145/3723178.3723226",
      link: "https://doi.org/10.1145/3723178.3723226",
    },
    {
      id: 5,
      type: "Conference Paper",
      title: "Yoga Posture Image Classification Using Big Transfer (BiT)",
      journal:
        "IEEE Conference on Computing Applications and Systems, COMPAS 2024",
      year: 2024,
      publicationType: "Conference paper",
      doi: "DOI: 10.1109/COMPAS60761.2024.10796330",
      link: "https://doi.org/10.1109/compas60761.2024.10796330",
    },
    {
      id: 6,
      type: "Book Chapter",
      title:
        "Improved Classification of Kidney Lesions in CT Scans Using CNN with Attention Layers: Achieving High Accuracy and Performance",
      journal: "Studies in Big Data",
      year: 2024,
      publicationType: "Book chapter",
      doi: "DOI: 10.1007/978-981-97-3966-0_8",
      link: "https://doi.org/10.1007/978-981-97-3966-0_8",
    },
  ];

  return (
    <div className="bg-chosenBackground py-8 md:py-6 sm:py-4">
      {/* Using the wide, robust container to match your site's layout */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-5 lg:mb-4 sm:mb-2">
            Publications
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publications.map((publication) => (
            <div
              key={publication.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-200/80"
            >
              {/* Decorative elements (Unchanged) */}
              <div className="absolute right-0 top-0 h-24 w-24">
                <div className="absolute right-0 top-0 h-12 w-12 rounded-tr-2xl border-r-2 border-t-2 border-gray-300/50"></div>
              </div>
              <div className="absolute bottom-0 left-0 h-16 w-16 opacity-10 transition-opacity group-hover:opacity-30">
                <div className="absolute bottom-0 left-0 h-8 w-8 rounded-bl-2xl border-b-2 border-l-2 border-gray-300"></div>
              </div>

              {/* Main content container */}
              <div className="relative z-10 flex h-full flex-col">
                {/* Upper content area that grows to fill space */}
                <div className="flex-grow">
                  <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {publication.type}
                  </span>

                  <h3 className="mb-3 text-xl font-bold text-gray-800 transition-colors md:text-2xl">
                    {publication.title}
                  </h3>

                  <div className="flex items-center gap-x-3">
                    <div className="flex-shrink-0">
                      <EducationPlug />
                    </div>
                    {/* Corrected `text-md` to `text-base` for valid Tailwind class */}
                    <p className="text-base font-medium text-gray-700">
                      {publication.journal}
                    </p>
                  </div>
                </div>

                {/* Footer area that sticks to the bottom */}
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-gray-200/80 pt-4">
                  <div className="flex items-center gap-x-1.5">
                    <CalenderICon />
                    <p className="text-sm font-semibold text-gray-600">
                      {publication.year}
                    </p>
                  </div>

                  <div className="flex items-center gap-x-1.5">
                    <RightSignIcon />
                    <p className="text-sm font-semibold text-gray-600">
                      {publication.publicationType}
                    </p>
                  </div>

                  <div className="flex items-center gap-x-1.5">
                    <LinkIcon />
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-800 hover:underline"
                    >
                      {publication.doi}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publication;
