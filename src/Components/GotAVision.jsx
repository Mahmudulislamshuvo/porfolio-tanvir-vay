import { MdOutlineArrowOutward } from "react-icons/md";

const GotAVision = () => {
  return (
    <div className="bg-[#ededed] py-[100px]">
      <div className="container">
        <div className="text-center">
          <h2 className="text-primary text-5xl">
            Got A Vision? Let's Bring It To Life!
          </h2>
          <p className="text-secondary px-[300px] pt-5 pb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
            voluptatem velit tempore iste sapiente harum atque quas alias hic
            excepturi?
          </p>
          <button className="inline-flex items-center text-2xl cursor-pointer gap-x-4 text-primary underline">
            Book A Call <MdOutlineArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GotAVision;
