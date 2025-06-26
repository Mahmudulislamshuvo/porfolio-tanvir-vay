import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function AccordionCustomIcon({ experienceData }) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="w-full mx-auto py-2 sm:py-1">
      {experienceData.map((project) => (
        <Accordion
          key={project.id}
          open={open === project.id}
          icon={<Icon id={project.id} open={open} />}
          className="group mb-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="bg-white rounded-2xl p-8">
            <AccordionHeader
              onClick={() => handleOpen(project.id)}
              className="border-none hover:bg-transparent p-0"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start justify-between w-full">
                <div className="flex w-full justify-between items-center gap-x-5">
                  {/* Title */}
                  <div className="flex flex-col justify-start items-start">
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-primary transition-colors duration-300 text-start">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-500">{project.subtitle}</p>
                    <p className="text-base text-gray-500">
                      {project.location}
                    </p>
                  </div>

                  {/* Period */}

                  <span className="text-sm font-medium text-gray-500 tracking-wide text-start pr-5">
                    {project.period}
                  </span>
                </div>
              </div>
            </AccordionHeader>

            <AccordionBody className="pt-8 px-0">
              {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="relative">
                  <ExperiencesSlider
                    images={project.content.images}
                    slideWidth={200}
                    slideHeight={200}
                    imgWidth={180}
                    imgHeight={150}
                    arrowSize={30}
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {project.content.text}
                  </p>
                  <button className="self-start flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition-colors duration-300">
                    <span>View Case Study</span>
                    <MdArrowOutward className="w-5 h-5" />
                  </button>
                </div>
              </div> */}
              <ol className="list-disc pl-5 space-y-2 text-base text-gray-800">
                {project.orderlist.map((orderlist) => (
                  <li key={orderlist.id}>{orderlist.task}</li>
                ))}
              </ol>
            </AccordionBody>
          </div>
        </Accordion>
      ))}
    </div>
  );
}
