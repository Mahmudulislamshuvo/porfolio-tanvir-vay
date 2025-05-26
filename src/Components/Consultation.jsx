import { MdOutlineArrowOutward } from "react-icons/md";

const Consultation = () => {
  return (
    <div className="bg-white py-14">
      <div className="container">
        <div className="h-[500px] w-full px-10 relative">
          <img
            className="object-cover rounded-xl w-full h-full"
            src="https://images.pexels.com/photos/31047866/pexels-photo-31047866/free-photo-of-scarlet-backed-flowerpecker-on-vibrant-blossoms.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="pic"
          />
          <div className="h-full w-full text-center py-10 absolute top-0 left-0 px-10 text-white flex flex-col justify-center items-center">
            <p className="text-lg">Book your free Consultation now</p>
            <h3 className="text-3xl font-bold mb-4">
              Exclusive Winter Deal Days Get a Free Consultation
            </h3>
            <p className="text-sm mb-6 px-[250px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              fugiat dolore cupiditate nostrum voluptate aspernatur, et possimus
              modi labore fuga.
            </p>
            <button className="flex items-center justify-center text-2xl cursor-pointer gap-x-4 text-white underline">
              Book A Call <MdOutlineArrowOutward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
