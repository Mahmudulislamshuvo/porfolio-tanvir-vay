import { BsPlusCircle } from "react-icons/bs";
import { ImEarth } from "react-icons/im";
import { MdOutlineArrowOutward } from "react-icons/md";
import Slider from "./CommonCompo/Slider";
import GoogleScholer from "../assets/google-scholar.svg";
import ORCID_iD from "../assets/ORCID_iD.svg";
import linkedin from "../assets/linkedin-svgrepo-com.svg";
import { FaHandPointRight } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="bg-background pb-5 pt-[80px]">
      <div className="container">
        <div className="flex">
          <div className="w-[35%] px-10 py-3">
            <h1 className="text-primary text-5xl font-bold">About Me</h1>
            <p className="text-secondary pt-6 loading-lg/5 loading-md/3">
              Hello, -an IT professional and researcher with a strong academic
              foundation and a passion for technology innovation. With two
              master&#39;s degrees — one in Information Technology from St.
              Francis College, New York, and another in Applied Physics and
              Electronics from Jahangirnagar University — along with a
              Bachelor’s in Electrical &amp; Electronics Engineering from
              Bangladesh University of Business &amp; Technology, I bring a
              unique blend of technical expertise and interdisciplinary
              knowledge. Currently, I serve as an IT Administrator at an HVAC
              company, where I manage systems, solve technical challenges, and
              keep everything running smoothly behind the scenes. My role spans
              system integration, data protection, user support, digital
              transformation, and implementing scalable IT solutions that align
              with evolving business needs. (ERP), remote monitoring, and system
              integration projects that enhance operational efficiency.
            </p>
          </div>
          <div className="w-full lg:w-[30%] bg-white rounded-xl p-5">
            {/* Earth Icon */}
            {/* <div className="flex justify-start mb-4">
              <ImEarth className="h-[80px] w-[80px] text-blue-400" />
            </div> */}
            <h2 className="text-primary text-2xl font-bold text-start mb-4">
              My research
            </h2>
            <p className="text-secondary text-start mb-6">
              My research and technical interests lie strongly in Deep Learning
              and Artificial Intelligence, with a focus on practical
              applications across industries. I specialize in potential
              purchaser prediction using AutoGluon ensemble frameworks,
              optimizing accuracy and decision-making in datasets spanning time
              deposits, health insurance, 5G mobile packages, and credit card
              services. I also work extensively with advanced deep learning
              models such as:
            </p>
            <ol className="list-disc pl-5 space-y-2 text-base text-gray-800">
              <li>
                <span className="font-bold">
                  Convolutional Neural Networks (CNNs)
                </span>{" "}
                for image classification and pattern recognition
              </li>
              <li>
                <span className="font-bold">
                  Recurrent Neural Networks (RNNs)
                </span>{" "}
                for sequence modeling and time-series analysis
              </li>
              <li>
                <span className="font-bold">
                  Generative Adversarial Networks (GANs)
                </span>
                for synthetic data generation and enhancement
              </li>
              <li>
                <span className="font-bold">Transformers</span>for handling
                complex data relationships in both visual and textual formats
              </li>
            </ol>

            {/* Image */}
            {/* <img
              className="rounded-lg w-full h-[200px] object-cover"
              src="https://images.pexels.com/photos/5641802/pexels-photo-5641802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Nature"
            /> */}
          </div>
          <div className="w-[35%] px-10 py-5">
            {/* <div className="w-full flex items-center justify-center relative group">
              <img
                className="h-[25%] w-[60%] object-cover rounded-lg"
                src="https://images.pexels.com/photos/31933726/pexels-photo-31933726/free-photo-of-silhouette-by-the-serene-ocean-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <MdOutlineArrowOutward className="h-[50px] w-[50px] bg-white rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div> */}
            <div className="flex gap-x-3 pt-[20px]">
              {/* <div>
                <BsPlusCircle className="bg-primary text-white h-[40px] w-[40px] rounded-full" />
              </div> */}
              <p className="text-secondary">
                Outside of the technical sphere, I’m a cricket enthusiast, a
                poetry writer, a traveler, and a photography lover. I believe
                that creativity and technology go hand in hand — whether
                it&#39;s composing a poem, snapping a sunset, or designing an
                intelligent algorithm. Join me as I continue navigating the
                dynamic world of Information Technology and Deep Learning,
                driven by a relentless curiosity and a commitment to shaping
                smarter, more connected systems for the future.
              </p>
            </div>
            <ol className="list-disc pl-5 space-y-2 text-xl text-gray-800 mt-5">
              <li className="flex items-center gap-x-3">
                <FaHandPointRight className="text-blue-500 animate-bounce" />
                <span>
                  <img
                    src={GoogleScholer}
                    alt="GoogleScholer"
                    className="h-5 w-5"
                  />
                </span>

                <a
                  href="https://scholar.google.com/citations?user=3G8WUu0AAAAJ&hl=en&oi=ao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Google Scholar
                </a>
              </li>

              <li className="flex items-center gap-x-3">
                <FaHandPointRight className="text-blue-500 animate-bounce" />
                <span>
                  <img src={ORCID_iD} alt="GoogleScholer" className="h-5 w-5" />
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://orcid.org/0009-0004-1212-8690"
                  className="text-xl font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  ORCiD
                </a>
              </li>
              <li className="flex items-center gap-x-3">
                <FaHandPointRight className="text-blue-500 animate-bounce" />
                <span>
                  <img src={linkedin} alt="GoogleScholer" className="h-5 w-5" />
                </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/hashibul-shoaib"
                  className="text-xl font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  Linkedin
                </a>
              </li>
            </ol>
            {/* <div className="flex gap-x-3 pt-5">
              <div>
                <BsPlusCircle className="bg-primary text-white h-[40px] w-[40px] rounded-full" />
              </div>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                velit ullam adipisci repellat nobis culpa similique quibusdam
                dolores optio excepturi.
              </p>
            </div> */}
          </div>
        </div>
        {/* <div className="mt-5 bg-white rounded-xl">
          <Slider />
        </div> */}
      </div>
    </div>
  );
};

export default AboutMe;
