import { FaHandPointRight } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const Feature = () => {
  return (
    <div className="bg-[#ededed] py-[35px]">
      <div className="container">
        <div className="text-center">
          <h2 className="text-primary text-5xl">Featured</h2>
          <p className="text-secondary px-[300px] pt-5 pb-10 text-start">
            After completing my Bachelor's in Electrical and Electronic
            Engineering from BUBT, I started my career at bKash as a Merchant
            Development Officer, gaining experience in business relationships. I
            then worked as a Business Development Manager at Iferi.com and as a
            Software Quality Assurance Engineer at BizMotion Limited. While
            working, I pursued a Master’s in Applied Physics and Electronics at
            Jahangirnagar University. Currently, I am pursuing a Master’s in
            Information Technology at St. Francis College in the United States,
            aiming to contribute to the global IT industry...
          </p>
          <button className="inline-flex items-center text-2xl cursor-pointer gap-x-4 text-primary underline">
            <FaHandPointRight className="text-blue-500 animate-bounce" />
            <a
              href="https://tinyurl.com/5bhsaepm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Full Summary
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
