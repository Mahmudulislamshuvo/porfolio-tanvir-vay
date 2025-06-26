import PortfolioBlogHeadings from "./CommonCompo/PortfolioBlogHeadings";

const Blogs = () => {
  const BlogCart = [
    {
      id: 1,
      avatar:
        "https://images.pexels.com/photos/16093975/pexels-photo-16093975/free-photo-of-parrot-perching-on-twig.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      button: "Marketing",
      title: "5 Minutes Read",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, exercitationem.",
    },
    {
      id: 2,
      avatar:
        "https://images.pexels.com/photos/16093975/pexels-photo-16093975/free-photo-of-parrot-perching-on-twig.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      button: "Marketing",
      title: "5 Minutes Read",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, exercitationem.",
    },
    {
      id: 3,
      avatar:
        "https://images.pexels.com/photos/16093975/pexels-photo-16093975/free-photo-of-parrot-perching-on-twig.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      button: "Marketing",
      title: "5 Minutes Read",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, exercitationem.",
    },
  ];

  return (
    // <div className="bg-background py-[100px]">
    <div className="bg-chosenBackground py-[100px]">
      <div className="container">
        <div>
          <PortfolioBlogHeadings
            title={"Blogs"}
            description={"Design Insides & Trends"}
          />
          <div className="flex flex-wrap justify-between gap-x-5">
            {BlogCart.map((item) => (
              <div
                key={item.id}
                className="h-[450px] w-[30%] bg-white rounded-xl"
              >
                <img
                  className="object-cover h-[60%] w-full rounded-xl"
                  src={item.avatar}
                  alt="Pic"
                />
                <div className="py-7 px-5">
                  <div className="flex items-center gap-x-5">
                    <button className="bg-primary text-white px-[10px] py-[5px] inline-block rounded-4xl">
                      {item.button}
                    </button>
                    <p className="font-bold text-primary">{item.title}</p>
                  </div>
                  <p className="text-primary pt-4">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
