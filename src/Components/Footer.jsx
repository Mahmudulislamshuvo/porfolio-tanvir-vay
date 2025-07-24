import { contactEmail } from "../constants";
import { navLinks } from "../navLinks";

const Footer = ({ scrollToSection, sectionRefs }) => {
  return (
    <div className="bg-primary py-12 md:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-white lg:justify-start">
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => scrollToSection(sectionRefs[link.id])}
                className="cursor-pointer rounded-lg px-3 py-2 text-base font-medium transition-colors duration-300 hover:bg-white hover:text-primary"
              >
                {link.name}
              </li>
            ))}
          </ul>

          <div className="text-center lg:text-right">
            <a
              href={`mailto:${contactEmail}`}
              className="text-white text-lg hover:underline"
            >
              {contactEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;