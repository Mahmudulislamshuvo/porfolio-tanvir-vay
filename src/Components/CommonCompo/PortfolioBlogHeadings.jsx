import { GoDotFill } from "react-icons/go";

const PortfolioBlogHeadings = ({ title, description }) => {
  return (
    <>
      <div className="text-center">
        {title && (
          <div className="inline-flex items-center justify-center px-3 py-1 bg-white rounded-lg shadow-sm">
            <GoDotFill className="text-primary" />
            <p className="ml-2 font-medium">{title}</p>
          </div>
        )}
        {/* Responsive heading size and bottom margin */}
        <h4 className="text-4xl sm:text-5xl lg:text-6xl text-primary font-bold pt-5 pb-12 md:pb-16">
          {description}
        </h4>
      </div>
    </>
  );
};

export default PortfolioBlogHeadings;
