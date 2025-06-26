import { useRef } from "react";
import AboutMe from "./Components/AboutMe";
import Banner from "./Components/Banner";
// import Blogs from "./Components/Blogs";
// import Consultation from "./Components/Consultation";
import Experiences from "./Components/Experiences";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "aos/dist/aos.css";
import Academics from "./Components/Academics";
import Publication from "./Components/Publication";
import Feature from "./Components/Feature";
import Certifications from "./Components/Certifications";

const App = () => {
  // Create refs for each section
  const aboutMeRef = useRef(null);
  const academicsRef = useRef(null);
  const experiencesRef = useRef(null);
  const certificationsRef = useRef(null);
  const publicationsRef = useRef(null);
  const footerRef = useRef(null);
  const homeRef = useRef(null);
  const featureRef = useRef(null);

  // Scroll to section when clicking on navbar items
  const scrollToSection = (ref) => {
    console.log(ref);

    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section ref={homeRef}>
        <Navbar
          scrollToSection={scrollToSection}
          aboutMeRef={aboutMeRef}
          academicsRef={academicsRef}
          experiencesRef={experiencesRef}
          publicationsRef={publicationsRef}
          certificationsRef={certificationsRef}
          featureRef={featureRef}
        />
      </section>

      <Banner scrollToSection={scrollToSection} footerRef={footerRef} />

      <section ref={aboutMeRef}>
        <AboutMe />
      </section>

      <section ref={academicsRef}>
        <Academics />
      </section>

      <section ref={experiencesRef}>
        <Experiences />
      </section>

      <section ref={publicationsRef}>
        <Publication />
      </section>

      <section ref={certificationsRef}>
        <Certifications />
      </section>

      <section ref={featureRef}>
        <Feature />
      </section>

      <section ref={footerRef}>
        <Footer
          scrollToSection={scrollToSection}
          aboutMeRef={aboutMeRef}
          academicsRef={academicsRef}
          experiencesRef={experiencesRef}
          publicationsRef={publicationsRef}
          certificationsRef={certificationsRef}
          featureRef={featureRef}
        />
      </section>
    </div>
  );
};

export default App;
