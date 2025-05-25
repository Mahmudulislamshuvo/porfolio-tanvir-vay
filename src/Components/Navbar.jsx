import { MdOutlineArrowOutward } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="py-6 container flex justify-between items-center">
        <div>
          <ul className="flex gap-x-8 text-2xl">
            <li className="cursor-pointer">About Me</li>
            <li className="cursor-pointer">Portfolio</li>
            <li className="cursor-pointer">Service</li>
            <li className="cursor-pointer">Blog</li>
          </ul>
        </div>
        <div>
          <button className="flex items-center text-2xl cursor-pointer">
            Book A Call <MdOutlineArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
