const Footer = ({
  aboutMeRef,
  experiencesRef,
  publicationsRef,
  latestWorkRef,
  blogsRef,
  homeRef,
  scrollToSection,
}) => {
  const links = [
    { name: "Home", id: "home", ref: homeRef },
    { name: "About Me", id: "about", ref: aboutMeRef },
    { name: "Portfolio", id: "portfolio", ref: latestWorkRef },
    { name: "Experiences", id: "experiences", ref: experiencesRef },
    { name: "PubLications", id: "services", ref: publicationsRef },
    { name: "Blog", id: "blog", ref: blogsRef },
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
            <p className="text-white text-lg">hello@dnova.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
