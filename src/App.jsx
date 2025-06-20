import { useRef } from "react";
import AboutMe from "./Components/AboutMe";
import Banner from "./Components/Banner";
import Blogs from "./Components/Blogs";
import Consultation from "./Components/Consultation";
import Experiences from "./Components/Experiences";
import Footer from "./Components/Footer";
import GotAVision from "./Components/GotAVision";
import LatestWork from "./Components/LatestWork";
import Navbar from "./Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Academics from "./Components/Academics";

AOS.init();

const App = () => {
  // Create refs for each section
  const aboutMeRef = useRef(null);
  const academicsRef = useRef(null);
  const experiencesRef = useRef(null);
  const consultationRef = useRef(null);
  const latestWorkRef = useRef(null);
  const blogsRef = useRef(null);
  const footerRef = useRef(null);
  const homeRef = useRef(null);

  // Scroll to section when clicking on navbar items
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div data-aos="fade-up">Your animated content</div>
      <section ref={homeRef}>
        <Navbar
          scrollToSection={scrollToSection}
          aboutMeRef={aboutMeRef}
          academicsRef={academicsRef}
          experiencesRef={experiencesRef}
          consultationRef={consultationRef}
          latestWorkRef={latestWorkRef}
          blogsRef={blogsRef}
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

      <section ref={consultationRef}>
        <Consultation />
      </section>

      <section ref={latestWorkRef}>
        <LatestWork />
      </section>

      <section ref={blogsRef}>
        <Blogs />
      </section>

      <GotAVision />
      <section ref={footerRef}>
        <Footer
          scrollToSection={scrollToSection}
          aboutMeRef={aboutMeRef}
          experiencesRef={experiencesRef}
          consultationRef={consultationRef}
          latestWorkRef={latestWorkRef}
          blogsRef={blogsRef}
          homeRef={homeRef}
        />
      </section>
    </div>
  );
};

export default App;
