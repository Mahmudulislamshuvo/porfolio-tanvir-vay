const Footer = ({
  aboutMeRef,
  experiencesRef,
  publicationsRef,
  certificationsRef,
  scrollToSection,
  featureRef,
}) => {
  const links = [
    { name: "About Me", id: "about", ref: aboutMeRef },
    { name: "Experiences", id: "experiences", ref: experiencesRef },
    { name: "Publications", id: "publications", ref: publicationsRef },
    { name: "Certifications", id: "certifications", ref: certificationsRef },
    { name: "Featured", id: "features", ref: featureRef },
  ];

  return (
    // Responsive vertical padding for the footer section
    <div className="bg-primary py-12 md:py-16">
      {/* Using the robust, full-width container to match the rest of your site */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-white lg:justify-start">
            {links.map((link) => (
              <li
                key={link.id}
                onClick={() => scrollToSection(link.ref)}
                className="cursor-pointer rounded-lg px-3 py-2 text-base font-medium transition-colors duration-300 hover:bg-white hover:text-primary"
              >
                {link.name}
              </li>
            ))}
          </ul>

          {/* Email section - no changes needed, it adapts well */}
          <div className="text-center lg:text-right">
            <a
              href="mailto:aahsan.cs@gmail.com"
              className="text-white text-lg hover:underline"
            >
              aahsan.cs@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
