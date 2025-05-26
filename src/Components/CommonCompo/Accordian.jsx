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

export default function AccordionCustomIcon() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  // If you like it I'll map here and it will reduce codes
  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <div className="border-b-2 border-secondary">
          <AccordionHeader onClick={() => handleOpen(1)}>
            <div className="flex justify-between">
              <div className="w-[35%]">
                <h4 className="text-primary text-3xl text-start">
                  Creative Minds, New York, UK
                </h4>
                <p className="flex items-center pt-2">
                  <GoDotFill className="text-primary" />{" "}
                  <span className="text-secondary text-lg">
                    February 2022 - Present
                  </span>
                </p>
              </div>
              <div className="text-secondary w-[30%] text-start">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, laboriosam!
                </p>
              </div>
              <div className="flex gap-x-4 items-center w-[20%]">
                <button className="px-5 py-1 bg-[#eaeaea] text-center rounded-[30px]">
                  UX/UI
                </button>
                <button className="px-5 py-1 bg-[#eaeaea] text-center rounded-[30px]">
                  Branding
                </button>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <div className="flex">
              <div className="w-[50%] flex items-center gap-x-5">
                <img
                  className="object-cover w-[30%] h-[200px] rounded-xl"
                  src="https://images.pexels.com/photos/31984955/pexels-photo-31984955/free-photo-of-charming-outdoor-cafe-setting-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <img
                  className="object-cover w-[30%] h-[200px] rounded-xl"
                  src="https://images.pexels.com/photos/31984955/pexels-photo-31984955/free-photo-of-charming-outdoor-cafe-setting-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <img
                  className="object-cover w-[30%] h-[200px] rounded-xl"
                  src="https://images.pexels.com/photos/31984955/pexels-photo-31984955/free-photo-of-charming-outdoor-cafe-setting-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="w-[50%] flex items-center justify-between">
                <p className="text-secondary w-[85%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio commodi quo ratione tenetur! Aliquam veniam
                  assumenda beatae nisi inventore, porro quasi minus quas sit
                  unde saepe neque consequatur. Necessitatibus officiis beatae
                  totam placeat quisquam possimus quos impedit tempora
                  voluptates blanditiis iste perferendis unde dolorum, atque
                  illum cumque, corporis soluta fugit?
                </p>
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                  <MdArrowOutward className="w-8 h-8 text-white font-bold " />
                </div>
              </div>
            </div>
          </AccordionBody>
        </div>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <div className="border-b-2 border-secondary">
          <AccordionHeader onClick={() => handleOpen(2)}>
            <div className="flex justify-between">
              <div className="w-[35%]">
                <h4 className="text-primary text-3xl text-start">
                  Creative Minds, New York, UK
                </h4>
                <p className="flex items-center pt-2">
                  <GoDotFill className="text-primary" />{" "}
                  <span className="text-secondary text-lg">
                    February 2022 - Present
                  </span>
                </p>
              </div>
              <div className="text-secondary w-[30%] text-start">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, laboriosam!
                </p>
              </div>
              <div className="flex gap-x-4 items-center w-[20%]">
                <button className="px-5 py-1 bg-[#eaeaea] text-center rounded-[30px]">
                  UX/UI
                </button>
                <button className="px-5 py-1 bg-[#eaeaea] text-center rounded-[30px]">
                  Branding
                </button>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <div className="flex">
              <div className="w-[50%] flex items-center gap-x-5">
                <img
                  className="object-cover w-[30%] h-[200px] rounded-xl"
                  src="https://images.pexels.com/photos/31984955/pexels-photo-31984955/free-photo-of-charming-outdoor-cafe-setting-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <img
                  className="object-cover w-[30%] h-[200px] rounded-xl"
                  src="https://images.pexels.com/photos/31984955/pexels-photo-31984955/free-photo-of-charming-outdoor-cafe-setting-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <img
                  className="object-cover w-[30%] h-[200px] rounded-xl"
                  src="https://images.pexels.com/photos/31984955/pexels-photo-31984955/free-photo-of-charming-outdoor-cafe-setting-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="w-[50%] flex items-center justify-between">
                <p className="text-secondary w-[85%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio commodi quo ratione tenetur! Aliquam veniam
                  assumenda beatae nisi inventore, porro quasi minus quas sit
                  unde saepe neque consequatur. Necessitatibus officiis beatae
                  totam placeat quisquam possimus quos impedit tempora
                  voluptates blanditiis iste perferendis unde dolorum, atque
                  illum cumque, corporis soluta fugit?
                </p>
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                  <MdArrowOutward className="w-8 h-8 text-white font-bold " />
                </div>
              </div>
            </div>
          </AccordionBody>
        </div>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <div className="border-b-2 border-secondary">
          <AccordionHeader onClick={() => handleOpen(3)}>
            <div className="flex justify-between">
              <div className="w-[35%]">
                <h4 className="text-primary text-3xl text-start">
                  Creative Minds, New York, UK
                </h4>
                <p className="flex items-center pt-2">
                  <GoDotFill className="text-primary" />{" "}
                  <span className="text-secondary text-lg">
                    February 2022 - Present
                  </span>
                </p>
              </div>
              <div className="text-secondary w-[30%] text-start">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, laboriosam!
                </p>
              </div>
              <div className="flex gap-x-4 items-center w-[20%]">
                <button className="px-5 py-1 bg-[#eaeaea] text-center rounded-[30px]">
                  UX/UI
                </button>
                <button className="px-5 py-1 bg-[#eaeaea] text-center rounded-[30px]">
                  Branding
                </button>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <div className="flex">
              <div className="w-[50%] flex items-center gap-x-5">
                <img
                  className="object-cover w-[30%] h-[200px] rounded-xl"
                  src="https://images.pexels.com/photos/31984955/pexels-photo-31984955/free-photo-of-charming-outdoor-cafe-setting-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <img
                  className="object-cover w-[30%] h-[200px] rounded-xl"
                  src="https://images.pexels.com/photos/31984955/pexels-photo-31984955/free-photo-of-charming-outdoor-cafe-setting-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <img
                  className="object-cover w-[30%] h-[200px] rounded-xl"
                  src="https://images.pexels.com/photos/31984955/pexels-photo-31984955/free-photo-of-charming-outdoor-cafe-setting-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="w-[50%] flex items-center justify-between">
                <p className="text-secondary w-[85%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio commodi quo ratione tenetur! Aliquam veniam
                  assumenda beatae nisi inventore, porro quasi minus quas sit
                  unde saepe neque consequatur. Necessitatibus officiis beatae
                  totam placeat quisquam possimus quos impedit tempora
                  voluptates blanditiis iste perferendis unde dolorum, atque
                  illum cumque, corporis soluta fugit?
                </p>
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                  <MdArrowOutward className="w-8 h-8 text-white font-bold " />
                </div>
              </div>
            </div>
          </AccordionBody>
        </div>
      </Accordion>
    </>
  );
}
