import { MdOutlineArrowOutward } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { contactEmail } from "../constants";
import { navLinks } from "../navLinks";

const ContactButton = ({ className }) => (
  <a
    href={`mailto:${contactEmail}`}
    className={`flex items-center gap-x-2 text-lg font-semibold text-primary underline ${className}`}
  >
    Contact me <MdOutlineArrowOutward />
  </a>
);

const Navbar = ({ scrollToSection, sectionRefs, setMenuOpen, menuOpen }) => {
  const handleMobileLinkClick = (ref) => {
    scrollToSection(ref);
    setMenuOpen(false);
  };

  return (
    <nav className="w-full border-b-[2px] border-[#ededed] bg-white/80 backdrop-blur-sm">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="hidden md:flex items-center gap-x-10">
            <ul className="flex items-center gap-x-8 text-[16px] font-medium text-primary">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(sectionRefs[link.id])}
                    className="transition-colors duration-300 hover:text-secondary"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <ContactButton className="transition-transform duration-300 hover:scale-105" />
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-primary"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            menuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-start gap-y-4 text-lg font-medium text-primary">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleMobileLinkClick(sectionRefs[link.id])}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-gray-200 pt-4">
            <ContactButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
