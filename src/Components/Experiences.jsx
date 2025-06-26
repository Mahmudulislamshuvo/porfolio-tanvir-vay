import Accordions from "./CommonCompo/Accordions";

const Experiences = () => {
  const projects = [
    {
      id: 1,
      title: "IT Administrator",
      subtitle: "Superior Hvac",
      location: "New York",
      period: "2024 - Present",
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
      title: "SQA Engineer",
      subtitle: "BizMotion Limited",
      location: "Dhaka",
      period: "2021 - 2023",
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
        { id: 4, task: "Create or maintain databases of known test defects." },
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
      title: "Business Development Manager ",
      subtitle: "Rijuk Limited (www.iferi.com)",
      location: "Dhaka",
      period: "2020 - 2021",
      orderlist: [
        {
          id: 1,
          task: "Research and identify new business opportunities - including new markets, growth areas, trends, customers, partnerships, products, and services - or new ways of reaching existing markets.",
        },
        { id: 2, task: "Seek out the appropriate contact in an organization." },
        { id: 3, task: "Generate leads and cold call prospective customers." },
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
    <div className="bg-chosenBackground py-16 md:py-24">
      {/* THE FIX: Changed max-w-4xl to max-w-7xl to match your site's main container width. */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="flex items-center justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-12 lg:mb-16">
              Experiences
            </h2>
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
