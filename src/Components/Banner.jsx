import bannerimg from "../assets/NewTry.png";
import { MdOutlineArrowDownward } from "react-icons/md";
import { useEffect, useState } from "react";

const Banner = ({ scrollToSection, footerRef }) => {
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
        setSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setSpeed(500);
        setIsDeleting(false);
      } else {
        setSpeed(isDeleting ? 80 : 150);
      }
    };

    timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, fullText, speed]);

  return (
    <div className="bg-chosenBackground min-h-screen flex flex-col">
      <div className="w-full flex-grow flex px-4 sm:px-6 lg:px-12">
        <div className="flex w-full flex-col md:flex-row md:items-stretch md:gap-1 lg:gap-2">
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
          <div className="order-2 flex flex-col justify-center px-4 text-center sm:text-left md:order-1 md:w-1/2">
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
          <div className="order-1 mx-auto flex w-full justify-center md:order-2 md:w-1/2 md:justify-end">
            <img
              src={bannerimg}
              alt="Hashibul Ahsan Shoaib"
              className="object-contain object-bottom h-auto max-h-[50vh] md:max-h-full md:pt-[50px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
