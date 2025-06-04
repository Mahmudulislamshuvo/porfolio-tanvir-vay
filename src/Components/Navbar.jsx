import { MdOutlineArrowOutward } from "react-icons/md";

const Navbar = ({
  scrollToSection,
  aboutMeRef,
  experiencesRef,
  consultationRef,
  latestWorkRef,
  blogsRef,
}) => {
  return (
    <nav className="bg-white border-b-[2px] border-[#ededed] fixed w-full top-0 z-50">
      <div className="bg-background">
        <div className="py-3 container flex justify-between items-center">
          <div className="flex items-center gap-x-[100px]">
            <div className="text-4xl">Logo</div>
            <ul className="flex gap-x-8 text-lg text-primary">
              <li>
                <button onClick={() => scrollToSection(aboutMeRef)}>
                  About Me
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(experiencesRef)}>
                  Experiences
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(consultationRef)}>
                  Consultation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(latestWorkRef)}>
                  Latest Work
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(blogsRef)}>Blogs</button>
              </li>
            </ul>
          </div>
          <div>
            <button className="flex items-center text-2xl cursor-pointer gap-x-4 text-primary underline">
              Book A Call <MdOutlineArrowOutward />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
