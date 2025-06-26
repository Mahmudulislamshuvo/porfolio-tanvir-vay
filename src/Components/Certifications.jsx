import Slider from "./CommonCompo/Slider";

const Certifications = () => {
  return (
    <div className="bg-chosenBackground py-12 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-8 md:mb-12 lg:mb-16">
            Certifications
          </h2>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default Certifications;
