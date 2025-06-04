import { MdOutlineArrowOutward } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-white border-b-[2px] border-[#ededed] fixed w-full top-0 z-50">
      <div className="bg-background">
        <div className="py-6 container flex justify-between items-center">
          <div className="flex items-center gap-x-[100px]">
            <div className="text-4xl">Logo</div>
            <ul className="flex gap-x-8 text-lg text-primary">
              <li className="cursor-pointer">About Me</li>
              <li className="cursor-pointer">Portfolio</li>
              <li className="cursor-pointer">Service</li>
              <li className="cursor-pointer">Blog</li>
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
