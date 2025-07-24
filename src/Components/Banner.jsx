import bannerimg from "../assets/NewTry.png";
import { MdOutlineArrowDownward } from "react-icons/md";
import { useEffect, useState } from "react";

const Banner = ({ scrollToSection, footerRef, menuOpen }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const fullText = "Hashibul Ahsan Shoaib";

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
      } else {
        setText(fullText.substring(0, text.length - 1));
      }

      if (!isDeleting && text === fullText) {
        setSpeed(2000); // Pause before deleting
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setSpeed(500); // Pause before re-typing
        setIsDeleting(false);
      } else {
        setSpeed(isDeleting ? 80 : 150); // Typing/deleting speed
      }
    };

    timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, fullText, speed]);

  return (
    // THE FIX: Removed `items-center`. Added `flex-col` to make it a vertical flex container.
    <div
      className={`bg-chosenBackground 2xl:min-h-screen flex flex-col ${
        menuOpen ? "mt-[-320px]" : ""
      }`}
    >
      {/* THE FIX: Added `flex-grow` to make this container fill the available vertical space. */}
      <div className="w-full flex-grow flex px-4 sm:px-6 lg:px-12">
        <div className="flex w-full flex-col md:flex-row md:items-stretch md:gap- lg:gap-2">
          {/* Vertical Line wrapper */}
          <div className="hidden md:flex items-center py-[175px] md:mt-[50px]">
            <div className="relative h-full w-[2px] bg-[#ededed]">
              <p
                className="absolute whitespace-nowrap"
                style={{
                  top: "-15px",
                  left: "-11px",
                  transform: "rotate(-90deg)",
                  transformOrigin: "top left",
                }}
              >
                IT professional
              </p>
              <p
                className="absolute whitespace-nowrap"
                style={{
                  bottom: "-15px",
                  right: "-11px",
                  transform: "rotate(-90deg)",
                  transformOrigin: "bottom right",
                }}
              >
                Researcher
              </p>
            </div>
          </div>

          {/* Text content block */}
          <div className="order-2 flex w flex-col justify-center px-4 text-center sm:text-left md:order-1 md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-6xl font-bold leading-none text-primary sm:text-7xl md:text-8xl lg:text-[140px] xl:text-[180px] 2xl:text-[220px]">
              Hello
            </h1>
            <p className="mt-2 text-lg sm:pl-2 md:text-xl lg:text-2xl">
              This is <span className="font-bold">{text}</span>
            </p>
            <button
              onClick={() => scrollToSection(footerRef)}
              className="mx-auto mt-12 flex items-center gap-x-3 text-lg text-secondary md:mx-0 md:mt-20 md:text-xl"
            >
              Scroll Down <MdOutlineArrowDownward />
            </button>
          </div>

          {/* Image content block */}
          <div className=" order-1 mx-auto flex w-full items-end justify-center md:order-2 md:w-1/2 md:justify-end">
            <img
              src={bannerimg}
              alt="Hashibul Ahsan Shoaib"
              className="md:max-h-full object-contain object-bottom sm:pt-[50px] h-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
