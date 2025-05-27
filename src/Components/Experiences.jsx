import { MdOutlineArrowOutward } from "react-icons/md";
import Accordions from "./CommonCompo/Accordions";

const Experiences = () => {
  const projects = [
    {
      id: 1,
      title: "Creative Minds, New York, UK",
      period: "February 2022 - Present",
      description:
        "Revolutionizing digital experiences through innovative design solutions",
      tags: ["UX/UI", "Branding"],
      content: {
        text: "Led a cross-functional team in developing award-winning digital platforms for Fortune 500 clients. Spearheaded design system implementation that increased development efficiency by 40%. Conducted user research with 500+ participants to inform product strategy.",
        images: [
          "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1559136555-9303baeaee9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        ],
      },
    },
    {
      id: 2,
      title: "Digital Innovations, London, UK",
      period: "June 2020 - January 2022",
      description: "Pioneering mobile-first experiences for global audiences",
      tags: ["Mobile Design", "Product Strategy"],
      content: {
        text: "Developed industry-leading mobile applications with over 2 million active users. Implemented design thinking workshops that boosted client satisfaction by 35%. Created scalable design patterns adopted across 12+ products.",
        images: [
          "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1581291518633-83b4ebdbfd9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        ],
      },
    },
  ];

  return (
    <div className="bg-[#FCFCFC] pt-[80px]">
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
        <div className="py-[10px]">
          <Accordions experienceData={projects} />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
