import AboutMe from "./Components/AboutMe";
import Banner from "./Components/Banner";
import Blogs from "./Components/Blogs";
import Consultation from "./Components/Consultation";
import Experiences from "./Components/Experiences";
import LatestWork from "./Components/LatestWork";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutMe />
      <Experiences />
      <Consultation />
      <LatestWork />
      <Blogs />
    </div>
  );
};

export default App;
