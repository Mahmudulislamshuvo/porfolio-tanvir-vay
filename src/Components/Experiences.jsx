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
          "https://images.pexels.com/photos/32162465/pexels-photo-32162465/free-photo-of-vibrant-local-market-scene-with-vegetables-and-eggs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/31708892/pexels-photo-31708892/free-photo-of-elegant-fashion-portrait-with-creative-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/31778275/pexels-photo-31778275/free-photo-of-elegant-fashion-portrait-of-a-woman-in-black.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/31110001/pexels-photo-31110001/free-photo-of-elegant-portrait-of-a-woman-in-nature-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/31110021/pexels-photo-31110021/free-photo-of-sophisticated-fashion-portrait-on-london-steps.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/32343599/pexels-photo-32343599/free-photo-of-striking-woodpecker-perched-on-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/1226721/pexels-photo-1226721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/185933/pexels-photo-185933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/3775553/pexels-photo-3775553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
          "https://images.pexels.com/photos/32162465/pexels-photo-32162465/free-photo-of-vibrant-local-market-scene-with-vegetables-and-eggs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/31708892/pexels-photo-31708892/free-photo-of-elegant-fashion-portrait-with-creative-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/31778275/pexels-photo-31778275/free-photo-of-elegant-fashion-portrait-of-a-woman-in-black.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/31110001/pexels-photo-31110001/free-photo-of-elegant-portrait-of-a-woman-in-nature-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/31110021/pexels-photo-31110021/free-photo-of-sophisticated-fashion-portrait-on-london-steps.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/32343599/pexels-photo-32343599/free-photo-of-striking-woodpecker-perched-on-branch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/1226721/pexels-photo-1226721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/185933/pexels-photo-185933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/3775553/pexels-photo-3775553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
      },
    },
  ];

  return (
    <div className="bg-[#FCFCFC] pt-[80px]">
      <div className="container">
        <div className="w-full">
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
                laboriosam. Explicabo atque soluta, rem rerum quia voluptates
                sed possimus.
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
    </div>
  );
};

export default Experiences;
