import { MdOutlineArrowOutward } from "react-icons/md";
import Accordions from "./CommonCompo/Accordions";

const Experiences = () => {
  const projects = [
    {
      id: 1,
      title: "IT Administrator Superior Hvac New York",
      period: "February 2022 - Present",
      orderlist: [
        {
          id: 1,
          task: "Monitoring and maintaining networks and servers to ensure optimal performance.",
        },
        {
          id: 2,
          task: "Upgrading, installing, and configuring new hardware and software to align with company objectives.",
        },
        {
          id: 3,
          task: "Implementing robust security protocols and procedures to safeguard against potential threats.",
        },
        {
          id: 4,
          task: "Creating user accounts and managing access control to protect sensitive data.",
        },
        {
          id: 5,
          task: "Performing diagnostic tests and debugging procedures to optimize computer systems.",
        },
        {
          id: 6,
          task: "Documenting processes, performing data backups, and ensuring efficient data archiving.",
        },
        {
          id: 7,
          task: "Handling customer and colleague queries regarding networks, systems and applications, often through a help desk.",
        },
        {
          id: 8,
          task: "Various ongoing tasks such as checking and proofreading content, data entry, database maintenance and using printers, copiers, and the like.",
        },
        {
          id: 9,
          task: "Pricing out equipment for bid jobs, preparing proposals, and updating/renewing insurance documents.",
        },
        {
          id: 10,
          task: "Scheduling service calls, meetings and coordinating with technicians and clients.",
        },
        {
          id: 11,
          task: "Maintain and update financial records using QuickBooks.",
        },
      ],
    },
    {
      id: 2,
      title: "SQA Engineer BizMotion Limited Dhaka",
      period: "February 2022 - Present",
      orderlist: [
        {
          id: 1,
          task: "Create tests to identify software problems, analyze bugs and errors found during tests.",
        },
        {
          id: 2,
          task: "Document results of tests for the software development team, recommend improvements in software to enhance user experience.",
        },
        {
          id: 3,
          task: "Develop testing programs that address areas such as database impacts, software scenarios, regression testing, negative testing, error or bug retests, or usability.",
        },
        {
          id: 4,
          task: "Create or maintain databases of known test defects.",
        },
        {
          id: 5,
          task: "Participate in product design reviews to provide input on functional requirements, product designs, schedules, or potential problems.",
        },
        {
          id: 6,
          task: "Investigate customer problems referred by technical support.",
        },
        {
          id: 7,
          task: "Review software documentation to ensure technical accuracy, compliance, or completeness, or to mitigate risks.",
        },
        {
          id: 8,
          task: "Install and configure recreations of software production environments to allow testing of software performance.",
        },
        {
          id: 9,
          task: "Support clients with transition projects to include product upgrade training.",
        },
      ],
    },
    {
      id: 3,
      title: "Business Development Manager Rijuk Limited (www.iferi.com) Dhaka",
      period: "February 2022 - Present",
      orderlist: [
        {
          id: 1,
          task: "Research and identify new business opportunities - including new markets, growth areas, trends, customers, partnerships, products, and services - or new ways of reaching existing markets.",
        },
        {
          id: 2,
          task: "Seek out the appropriate contact in an organization.",
        },
        {
          id: 3,
          task: "Generate leads and cold call prospective customers.",
        },
        {
          id: 4,
          task: "Understand the needs of your customers and be able to respond effectively with a plan of how to meet these needs.",
        },
        {
          id: 5,
          task: "Have a good understanding of the businesses' products or services and be able to advise others about them.",
        },
      ],
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
                <h2 className="text-5xl">Experiences</h2>
              </div>
              {/* <h3 className="text-primary text-4xl pt-5">
                Explore My Design Journey
              </h3> */}
            </div>
            {/* <div className="w-[40%]">
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
            </div> */}
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
