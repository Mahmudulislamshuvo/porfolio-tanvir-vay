import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { GoDotFill } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import ExperiencesSlider from "./ExperiencesSilder";

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
    <div className="w-full mx-auto py-8">
      {experienceData.map((project) => (
        <Accordion
          key={project.id}
          open={open === project.id}
          icon={<Icon id={project.id} open={open} />}
          className="group mb-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="bg-white rounded-2xl p-8">
            {/* <AccordionHeader
              onClick={() => handleOpen(project.id)}
              className="border-none hover:bg-transparent p-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4">
                  <div className="flex items-center space-x-2">
                    <GoDotFill className="text-primary shrink-0" />
                    <span className="text-sm font-semibold text-gray-500 tracking-wide">
                      {project.period}
                    </span>
                  </div>
                  <h3 className="mt-2 text-3xl font-bold text-gray-900 hover:text-primary transition-colors duration-300 text-start">
                    {project.title}
                  </h3>
                </div>

                <div className="md:col-span-4">
                  <p className="text-lg text-gray-600 leading-relaxed text-start">
                    {project.description}
                  </p>
                </div>

                <div className="md:col-span-4">
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionHeader> */}
            <AccordionHeader
              onClick={() => handleOpen(project.id)}
              className="border-none hover:bg-transparent p-0"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
                <div className="flex w-[70%] gap-x-5">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 hover:text-primary transition-colors duration-300 text-start">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[16px] text-gray-700 leading-relaxed text-start mt-2 md:mt-0">
                    {project.description}
                  </p>

                  {/* Date */}
                  <div className="flex items-start space-x-2 test-start justify-start">
                    <GoDotFill className="text-primary shrink-0" />
                    <span className="text-sm font-medium text-gray-500 tracking-wide text-start">
                      {project.period}
                    </span>
                  </div>
                </div>

                {/* Buttons */}
              </div>
            </AccordionHeader>

            <AccordionBody className="pt-8 px-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
              </div>
            </AccordionBody>
          </div>
        </Accordion>
      ))}
    </div>
  );
}
