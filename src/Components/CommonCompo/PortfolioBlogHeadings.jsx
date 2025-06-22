import { GoDotFill } from "react-icons/go";

const PortfolioBlogHeadings = ({ title, description }) => {
  return (
    <>
      <div className="text-center">
        {/* Create a wrapper for the content */}
        {title && (
          <div className="inline-flex items-center justify-center px-[8px] py-[3px] bg-white rounded-lg">
            <GoDotFill />
            <p className="ml-2">{title}</p>
          </div>
        )}
        <h4 className="text-6xl text-primary pt-5 pb-[60px]">{description}</h4>
      </div>
    </>
  );
};

export default PortfolioBlogHeadings;
