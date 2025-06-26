import GoogleScholer from "../assets/google-scholar.svg";
import ORCID_iD from "../assets/ORCID_iD.svg";
import linkedin from "../assets/linkedin-svgrepo-com.svg";
import { FaHandPointRight } from "react-icons/fa";

const AboutMe = () => {
  return (
    // The green background wrapper is perfect as it is.
    <div className="py-8 md:py-5 sm:py-3">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* === Column 1: About Me === 
            I removed the horizontal padding (px-4) from here because the new
            container parent now handles all side padding.
          */}
          <div className="w-full lg:w-[35%]">
            <h1 className="text-primary text-4xl lg:text-5xl font-bold">
              About Me
            </h1>
            <p className="text-secondary pt-6 leading-relaxed">
              I am Hashibul Ahsan Shoaib - an IT professional and researcher
              with a robust academic background and a fervor for technological
              innovation. I hold two master&#39;s degrees — one in Information
              Technology from St. Francis College, New York, and another in
              Applied Physics and Electronics from Jahangirnagar University - in
              addition to a Bachelor’s degree in Electrical &amp; Electronics
              Engineering from Bangladesh University of Business &amp;
              Technology. This educational background equips me with a
              distinctive combination of technical skills and interdisciplinary
              knowledge.
              <br />
              <br />
              <span className="text-secondary leading-relaxed">
                At present, I work as an IT Administrator at an HVAC company,
                where I oversee systems, address technical issues, and ensure
                seamless operations behind the scenes. My responsibilities
                encompass system integration, data security, user assistance,
                digital transformation, and the implementation of scalable IT
                solutions that meet the changing demands of the business. This
                includes projects related to Enterprise Resource Planning (ERP),
                remote monitoring, and system integration that improve
                operational efficiency.
              </span>
            </p>
          </div>

          {/* === Column 2: My Research (The Card) === 
            This column is perfect. Its internal padding (p-6) should remain
            to give space inside the white card.
          */}
          <div className="w-full lg:w-[30%] bg-white rounded-xl p-6 mt-12 lg:mt-0">
            <h2 className="text-primary text-3xl font-bold text-start mb-1">
              My research
            </h2>
            <p className="text-secondary text-start leading-relaxed">
              My research and technical interests are deeply rooted in Deep
              Learning and Artificial Intelligence... I focus on predicting
              potential purchasers using AutoGluon ensemble frameworks...
              Additionally, I engage extensively with advanced deep learning
              models such as:
            </p>
            <ul className="list-disc list-outside pl-5 space-y-3 text-secondary">
              <li>
                <span className="font-bold text-primary">
                  Convolutional Neural Networks (CNNs)
                </span>{" "}
                for image classification and pattern recognition.
              </li>
              <li>
                <span className="font-bold text-primary">
                  Recurrent Neural Networks (RNNs)
                </span>{" "}
                for sequence modeling and time-series analysis.
              </li>
              <li>
                <span className="font-bold text-primary">
                  Generative Adversarial Networks (GANs)
                </span>{" "}
                for synthetic data generation and enhancement.
              </li>
              <li>
                <span className="font-bold text-primary">Transformers</span> for
                handling complex data relationships in both visual and textual
                formats.
              </li>
            </ul>
          </div>

          {/* === Column 3: Hobbies & Links ===
             I also removed the horizontal padding from this column.
          */}
          <div className="w-full lg:w-[35%] mt-12 lg:mt-0">
            <div className="pt-5">
              <p className="text-secondary leading-relaxed">
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
            <ul className="space-y-4 mt-2">
              <li className="flex items-center gap-x-2">
                <FaHandPointRight className="text-blue-500 animate-bounce flex-shrink-0" />
                <a
                  href="https://scholar.google.com/citations?user=3G8WUu0AAAAJ&hl=en&oi=ao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-2 text-lg font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  <img
                    src={GoogleScholer}
                    alt="Google Scholar"
                    className="h-6 w-6"
                  />
                  <span>Google Scholar</span>
                </a>
              </li>
              <li className="flex items-center gap-x-3">
                <FaHandPointRight className="text-blue-500 animate-bounce flex-shrink-0" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://orcid.org/0009-0004-1212-8690"
                  className="flex items-center gap-x-2 text-lg font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  <img src={ORCID_iD} alt="ORCiD" className="h-6 w-6" />
                  <span>ORCiD</span>
                </a>
              </li>
              <li className="flex items-center gap-x-3">
                <FaHandPointRight className="text-blue-500 animate-bounce flex-shrink-0" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/hashibul-shoaib"
                  className="flex items-center gap-x-2 text-lg font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  <img src={linkedin} alt="LinkedIn" className="h-6 w-6" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
