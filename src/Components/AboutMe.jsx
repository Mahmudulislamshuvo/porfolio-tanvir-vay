import { BsPlusCircle } from "react-icons/bs";
import { ImEarth } from "react-icons/im";
import { MdOutlineArrowOutward } from "react-icons/md";
import ReactSlider from "./CommonCompo/ReactSlider";

const AboutMe = () => {
  return (
    <div className="bg-background">
      <div className="container">
        <div className="flex">
          <div className="w-[35%] px-10 py-5">
            <h1 className="text-primary text-5xl font-bold">About Me</h1>
            <p className="text-secondary pt-6 loading-lg/5 loading-md/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, blanditiis? Dolores perferendis sit ipsum aspernatur
              corrupti reiciendis, laudantium minus ducimus ut, dolorum optio
              aliquid molestiae voluptatibus iste voluptas impedit et esse ipsa
              alias maiores nulla! Voluptatibus maxime modi corporis numquam
              suscipit quia consequuntur sed, corrupti laudantium vel, quo
              perspiciatis libero!
            </p>
          </div>
          <div className="w-[30%] bg-white rounded-xl px-5 py-8">
            <ImEarth className="h-[100px] w-[100px] text-blue-400" />
            <h2 className="text-primary text-6xl pt-6">120%</h2>
            <p className="text-secondary pt-6 loading-lg/5 loading-md/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              exercitationem, ea vel soluta error molestias voluptatum ipsum
              veritatis nostrum! At.
            </p>
            <img
              className="rounded-lg h-[40%] w-full pt-6 object-cover overflow-hidden"
              src="https://images.pexels.com/photos/5641802/pexels-photo-5641802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="w-[35%] px-10 py-5">
            <div className="w-full flex items-center justify-center relative group">
              <img
                className="h-[25%] w-[60%] object-cover rounded-lg"
                src="https://images.pexels.com/photos/31933726/pexels-photo-31933726/free-photo-of-silhouette-by-the-serene-ocean-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <MdOutlineArrowOutward className="h-[50px] w-[50px] bg-white rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex gap-x-3 pt-[100px]">
              <div>
                <BsPlusCircle className="bg-primary text-white h-[40px] w-[40px] rounded-full" />
              </div>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                velit ullam adipisci repellat nobis culpa similique quibusdam
                dolores optio excepturi.
              </p>
            </div>
            <div className="flex gap-x-3 pt-10">
              <div>
                <BsPlusCircle className="bg-primary text-white h-[40px] w-[40px] rounded-full" />
              </div>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                velit ullam adipisci repellat nobis culpa similique quibusdam
                dolores optio excepturi.
              </p>
            </div>
          </div>
        </div>
        <div className="pb-[60px] pt-10">
          <ReactSlider />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
