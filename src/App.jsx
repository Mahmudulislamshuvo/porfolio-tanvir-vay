import { useRef, useState } from "react";
import AboutMe from "./Components/AboutMe";
import Banner from "./Components/Banner";
import Experiences from "./Components/Experiences";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "aos/dist/aos.css";
import Academics from "./Components/Academics";
import Publication from "./Components/Publication";
import Feature from "./Components/Feature";
import Certifications from "./Components/Certifications";
import { navLinks } from "./navLinks";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    academics: useRef(null),
    experiences: useRef(null),
    publications: useRef(null),
    certifications: useRef(null),
    features: useRef(null),
    footer: useRef(null),
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section ref={sectionRefs.home}>
        <Navbar
          scrollToSection={scrollToSection}
          sectionRefs={sectionRefs}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </section>

      <Banner
        scrollToSection={scrollToSection}
        footerRef={sectionRefs.footer}
        menuOpen={menuOpen}
      />

      {navLinks.map((link) => (
        <section key={link.id} ref={sectionRefs[link.id]}>
          {link.id === "about" && <AboutMe />}
          {link.id === "academics" && <Academics />}
          {link.id === "experiences" && <Experiences />}
          {link.id === "publications" && <Publication />}
          {link.id === "certifications" && <Certifications />}
          {link.id === "features" && (
            <Feature
              scrollToSection={scrollToSection}
              homeRef={sectionRefs.home}
            />
          )}
        </section>
      ))}

      <section ref={sectionRefs.footer}>
        <Footer scrollToSection={scrollToSection} sectionRefs={sectionRefs} />
      </section>
    </div>
  );
};

export default App;
