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

  // A single source of truth for navigation links
  const navLinks = [
    { name: "About Me", ref: aboutMeRef },
    { name: "Academics", ref: academicsRef },
    { name: "Experiences", ref: experiencesRef },
    { name: "Publications", ref: publicationsRef },
    { name: "Certifications", ref: certificationsRef },
    { name: "Featured", ref: featureRef },
  ];

  // Handler to scroll and then close the mobile menu
  const handleMobileLinkClick = (ref) => {
    scrollToSection(ref);
    setMenuOpen(false);
  };

  return (
    <nav className="w-full border-b-[2px] border-[#ededed] bg-white/80 backdrop-blur-sm">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-10">
            <ul className="flex items-center gap-x-8 text-[16px] font-medium text-primary">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.ref)}
                    className="transition-colors duration-300 hover:text-secondary"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <a
              href="mailto:aahsan.cs@gmail.com"
              className="flex items-center gap-x-2 text-lg font-semibold text-primary underline transition-transform duration-300 hover:scale-105"
            >
              Contact me <MdOutlineArrowOutward />
            </a>
          </div>

          {/* Mobile Hamburger Menu Icon */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-primary"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {/* Uses CSS transitions for a smooth slide-down effect */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            menuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-start gap-y-4 text-lg font-medium text-primary">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button onClick={() => handleMobileLinkClick(link.ref)}>
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-gray-200 pt-4">
            <a
              href="mailto:aahsan.cs@gmail.com"
              className="flex items-center gap-x-2 text-lg font-semibold text-primary underline"
            >
              Contact me <MdOutlineArrowOutward />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
