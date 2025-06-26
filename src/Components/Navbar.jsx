import { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({
  scrollToSection,
  aboutMeRef,
  academicsRef,
  experiencesRef,
  publicationsRef,
  certificationsRef,
  featureRef,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b-[2px] border-[#ededed] fixed w-full top-0 z-50">
      <div className="bg-background">
        <div className="py-3 container flex justify-between items-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-[40px]">
            <ul className="flex gap-x-8 text-[16px] text-primary">
              <li>
                <button onClick={() => scrollToSection(aboutMeRef)}>
                  About Me
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(academicsRef)}>
                  Academics
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(experiencesRef)}>
                  Experiences
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(publicationsRef)}>
                  Publications
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(certificationsRef)}>
                  Certifications
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(featureRef)}>
                  Featured
                </button>
              </li>
            </ul>
          </div>

          {/* Book a Call Button */}
          <div className="hidden md:block">
            <a
              href="mailto:aahsan.cs@gmail.com"
              className="flex items-center text-2xl cursor-pointer gap-x-4 text-primary underline"
            >
              Contact me <MdOutlineArrowOutward />
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-primary"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white p-4">
            <ul className="flex flex-col items-start gap-y-4 text-xl text-primary">
              <li>
                <button onClick={() => scrollToSection(aboutMeRef)}>
                  About Me
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(experiencesRef)}>
                  Experiences
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection(certificationsRef)}>
                  Research
                </button>
              </li>
            </ul>
            <div className="flex justify-center mt-4">
              {/* Book a Call Button in Mobile Menu */}
              <a
                href="mailto:contact@example.com"
                className="flex items-center text-2xl cursor-pointer gap-x-4 text-primary underline"
              >
                Contact me <MdOutlineArrowOutward />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
