const Footer = ({
  aboutMeRef,
  experiencesRef,
  publicationsRef,
  certificationsRef,
  homeRef,
  scrollToSection,
  featureRef,
}) => {
  const links = [
    { name: "Home", id: "home", ref: homeRef },
    { name: "About Me", id: "about", ref: aboutMeRef },
    { name: "Experiences", id: "experiences", ref: experiencesRef },
    { name: "Publications", id: "publications", ref: publicationsRef },
    { name: "Certifications", id: "certifications", ref: certificationsRef },
    { name: "Features", id: "features", ref: featureRef },
  ];

  return (
    <div className="bg-primary py-[70px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <ul className="flex gap-8 text-white pt-5">
            {links.map((link) => (
              <li
                key={link.id}
                onClick={() => scrollToSection(link.ref)}
                className="cursor-pointer py-2 px-4 hover:bg-white hover:text-primary rounded-lg transition-colors duration-300"
              >
                {link.name}
              </li>
            ))}
          </ul>

          {/* Email section */}
          <div className="mt-8 lg:mt-0 text-center lg:text-right">
            <a href="mailto:aahsan.cs@gmail.com" className="text-white text-lg">
              aahsan.cs@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
