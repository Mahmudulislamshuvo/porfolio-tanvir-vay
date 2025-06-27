import Slider from "./CommonCompo/Slider";

const Certifications = () => {
  return (
    <div className="bg-chosenBackground py-8 md:py-6 sm:py-4">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-5 md:mb-4 lg:mb-5 sm:mb-2">
            Certifications
          </h2>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default Certifications;
