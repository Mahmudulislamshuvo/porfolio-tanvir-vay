import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { GoDotFill } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";

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

  // If you like it I'll map here and it will reduce codes
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
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
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4">
                  <div className="flex items-center space-x-2">
                    <GoDotFill className="text-primary shrink-0" />
                    <span className="text-sm font-semibold text-gray-500 tracking-wide">
                      {project.period}
                    </span>
                  </div>
                  <h3 className="mt-2 text-3xl font-bold text-gray-900 hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <div className="md:col-span-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
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
            </AccordionHeader>

            <AccordionBody className="pt-8 px-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="grid grid-cols-3 gap-6">
                  {project.content.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative overflow-hidden rounded-xl aspect-square transform transition-transform duration-300 hover:scale-105"
                    >
                      <img
                        src={img}
                        alt={`Project ${idx + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
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
