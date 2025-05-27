import AboutMe from "./Components/AboutMe";
import Banner from "./Components/Banner";
import Blogs from "./Components/Blogs";
import Slider from "./Components/CommonCompo/Slider";
import Consultation from "./Components/Consultation";
import Experiences from "./Components/Experiences";
import Footer from "./Components/Footer";
import GotAVision from "./Components/GotAVision";
import LatestWork from "./Components/LatestWork";
import Navbar from "./Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const App = () => {
  return (
    <div>
      <div data-aos="fade-up">Your animated content</div>
      <Navbar />
      <Banner />
      <AboutMe />
      <Experiences />
      <Consultation />
      <LatestWork />
      <Blogs />
      <GotAVision />
      <Footer />
    </div>
  );
};

export default App;
