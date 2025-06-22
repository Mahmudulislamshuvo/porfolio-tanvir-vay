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
              I am Hashibul Ahsan Shoaib — an IT professional and researcher
              with a robust academic background and a fervor for technological
              innovation. I hold two master's degrees — one in Information
              Technology from St. Francis College, New York, and another in
              Applied Physics and Electronics from Jahangirnagar University — in
              addition to a Bachelor’s degree in Electrical &; Electronics
              Engineering from Bangladesh University of Business &; Technology.
              This educational background equips me with a distinctive
              combination of technical skills and interdisciplinary knowledge.
              At present, I work as an IT Administrator at an HVAC company,
              where I oversee systems, address technical issues, and ensure
              seamless operations behind the scenes. My responsibilities
              encompass system integration, data security, user assistance,
              digital transformation, and the implementation of scalable IT
              solutions that meet the changing demands of the business. This
              includes projects related to Enterprise Resource Planning (ERP),
              remote monitoring, and system integration that improve operational
              efficiency.
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
              My research and technical interests are deeply rooted in Deep
              Learning and Artificial Intelligence, particularly in their
              practical applications across various industries. I focus on
              predicting potential purchasers using AutoGluon ensemble
              frameworks, enhancing accuracy and decision-making in datasets
              that include time deposits, health insurance, 5G mobile packages,
              and credit card services. Additionally, I engage extensively with
              advanced deep learning models such as:
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
          </div>
          <div className="w-[35%] px-10 py-5">
            <div className="flex gap-x-3 pt-[20px]">
              <p className="text-secondary">
                Beyond the realm of technology, I am passionate about cricket,
                enjoy writing poetry, love to travel, and have a keen interest
                in photography. I hold the belief that creativity and technology
                are intertwined — whether it involves crafting a poem, capturing
                a sunset, or developing an advanced algorithm. I invite you to
                accompany me as I explore the ever-evolving landscape of
                Information Technology and Deep Learning, fueled by an
                insatiable curiosity and a dedication to creating more
                intelligent and interconnected systems for the future..
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
