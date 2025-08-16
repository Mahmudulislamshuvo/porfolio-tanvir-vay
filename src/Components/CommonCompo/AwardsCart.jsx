const AwardCart = ({ title, des, image, link }) => {
  return (
    <div className="w-full md:w-[48%] lg:w-[31%] flex flex-col border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 my-2 transition-transform transform hover:scale-105">
      {/* Image container */}
      <div>
        <img
          className="rounded-t-lg w-full h-60 object-cover"
          src={image}
          alt={title || "Award Image"}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x400/2D3748/E2E8F0?text=Image+Not+Found";
          }}
        />
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="mb-4 font-normal text-gray-700 dark:text-gray-400 flex-grow">
          {des}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-auto" // mt-auto pushes the button to the bottom of the card
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default AwardCart;
