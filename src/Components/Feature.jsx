import { FaHandPointRight } from "react-icons/fa";

const Feature = () => {
  return (
    // Responsive vertical padding for the section
    <div className="bg-chosenBackground py-16 md:py-24">
      {/* Using a robust, centered container. 
        max-w-4xl is a good width for a text-focused section to ensure readability.
      */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Responsive heading */}
          <h2 className="text-primary text-4xl sm:text-5xl font-bold">
            Featured
          </h2>

          {/* RESPONSIVE PARAGRAPH:
            - Removed the harmful `px-[300px]`.
            - `max-w-3xl mx-auto` keeps the paragraph nicely centered and readable within the container.
            - `text-left` aligns the text inside the block, as intended.
          */}
          <p className="text-secondary mt-6 mb-10 max-w-3xl mx-auto text-left text-base md:text-lg leading-relaxed">
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

          {/* CORRECTED LINK:
            - Replaced the <button> with an <a> tag for correct semantics and accessibility.
            - Styled the link to look like the original button.
            - Added a subtle hover effect.
          */}
          <a
            href="https://tinyurl.com/5bhsaepm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-x-3 text-lg md:text-xl font-medium text-blue-500 underline transition-transform duration-300 hover:scale-105"
          >
            <FaHandPointRight className="animate-bounce" />
            <span>Full Summary</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feature;
