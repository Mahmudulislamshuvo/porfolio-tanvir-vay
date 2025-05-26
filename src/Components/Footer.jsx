import { useState } from "react";

const Footer = () => {
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Services", id: "services" },
    { name: "Blog", id: "blog" },
  ];

  return (
    <div className="bg-primary py-[70px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <ul className="flex gap-8 text-white">
            {links.map((link) => (
              <li
                key={link.id}
                onClick={() => setActiveLink(link.id)}
                className={`cursor-pointer ${
                  activeLink === link.id
                    ? "bg-white text-primary py-2 px-4 rounded-lg"
                    : ""
                }`}
              >
                {link.name}
              </li>
            ))}
          </ul>

          {/* Email section */}
          <div className="mt-8 lg:mt-0 text-center lg:text-right">
            <p className="text-white text-lg">hello@dnova.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
