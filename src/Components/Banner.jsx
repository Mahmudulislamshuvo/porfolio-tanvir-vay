import bannerimg from "../assets/Image.png";
// import bannerimg from "../assets/IMG_6166 (2).png";
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
    <div className="bg-chosenBackground pt-20 md:pt-24 min-h-screen flex items-center">
      <div className="container">
        {/* Main flex container: breaks to two columns at the SM breakpoint */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 lg:gap-10">
          {/* Vertical Line: Now appears starting from the SM breakpoint */}
          <div className="hidden lg:block">
            <div className="w-[2px] h-[300px] md:h-[400px] bg-[#ededed] relative">
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

          {/* Left Section (Text Content): 50% width from SM upwards */}
          <div className="w-full sm:w-1/2 order-2 sm:order-1 text-center sm:text-left px-4 mt-8 sm:mt-0">
            {/* Typography continues to scale for all device sizes */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[140px] leading-none font-bold text-primary">
              Hello
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mt-2 sm:pl-2">
              This is <span className="font-bold">{text}</span>
            </p>

            <button
              onClick={() => scrollToSection(footerRef)}
              className="flex items-center gap-x-3 text-secondary text-lg md:text-xl mt-12 md:mt-20 mx-auto sm:mx-0"
            >
              Scroll Down <MdOutlineArrowDownward />
            </button>
          </div>

          {/* Right Section (Profile Image): 50% width from SM upwards */}
          <div className="w-full sm:w-1/2 mx-auto order-1 sm:order-2 flex justify-center sm:justify-end">
            <img
              src={bannerimg}
              alt="Hashibul Ahsan Shoaib"
              // Max height is respected on all screens, preventing overflow
              className="max-h-[60vh] sm:max-h-[85vh] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
