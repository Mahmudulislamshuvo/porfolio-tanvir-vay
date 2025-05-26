import { MdOutlineArrowOutward } from "react-icons/md";
import AccordionCustomIcon from "./CommonCompo/Accordian";

const Experiences = () => {
  return (
    <div className="bg-[#FCFCFC] py-[100px]">
      <div className="container">
        <div className="flex justify-between">
          <div className="w-[30%]">
            <div className="flex items-center gap-x-2">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <h2 className="text-xl">Experiences</h2>
            </div>
            <h3 className="text-primary text-4xl pt-5">
              Explore My Design Journey
            </h3>
          </div>
          <div className="w-[40%]">
            <p className="pb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              reprehenderit pariatur molestias dolorem maiores, fugiat tempore
              recusandae iste earum? Architecto cupiditate eos cum, quo ipsum
              reiciendis delectus praesentium vel dignissimos tempora quis
              doloribus tenetur dicta ad ipsam voluptatum doloremque quos
              laboriosam. Explicabo atque soluta, rem rerum quia voluptates sed
              possimus.
            </p>

            <button className="flex items-center text-2xl cursor-pointer gap-x-4 text-primary underline">
              Book A Call <MdOutlineArrowOutward />
            </button>
          </div>
        </div>
        <div className="py-14">
          <AccordionCustomIcon />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
