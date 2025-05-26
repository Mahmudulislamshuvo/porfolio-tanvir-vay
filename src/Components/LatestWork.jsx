import { FaArrowRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import PortfolioBlogHeadings from "./CommonCompo/PortfolioBlogHeadings";

const LatestWork = () => {
  const latestwork = [
    {
      id: 1,
      avatar:
        "https://images.pexels.com/photos/11123753/pexels-photo-11123753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Hello Digital Agency Website",
    },
    {
      id: 2,
      avatar:
        "https://images.pexels.com/photos/11123753/pexels-photo-11123753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Hello Digital Agency Website",
    },
    {
      id: 3,
      avatar:
        "https://images.pexels.com/photos/11123753/pexels-photo-11123753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Hello Digital Agency Website",
    },
  ];
  return (
    <div className="bg-background py-[100px]">
      <div className="container">
        <PortfolioBlogHeadings
          title={"Portfolio"}
          description={"Latest Works"}
        />
        <div className="flex flex-wrap items-center justify-between gap-y-14">
          {latestwork.map((item) => (
            <div key={item.id} className="w-[32%] relative group">
              <img
                className="object-cover w-full rounded-lg"
                src={item.avatar}
                alt="pic"
              />
              <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] h-20 w-20 rounded-full bg-primary flex justify-center items-center opacity-0 group-hover:opacity-100">
                <MdArrowOutward className="text-white w-10 h-10" />
              </div>
              <p className="pt-2 text-primary text-xl">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-14">
          <p className="inline-flex justify-center items-center text-secondary gap-x-5 text-xl">
            Checkou For More{" "}
            <button className="text-primary inline-flex items-center gap-x-2">
              <FaArrowRight />
              View More
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestWork;
