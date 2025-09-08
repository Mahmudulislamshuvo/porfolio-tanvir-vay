import AwardCart from "./CommonCompo/AwardsCart";
import awardpic1 from "../assets/membership/Reviewer_Certificate.png";

const Memberships = () => {
  const awards = [
    {
      id: 1,
      title: "Editorial Board Member",
      des: "Al-Kindi Publisher",
      location: "London, UK",
      image: awardpic1,
      link: "https://al-kindipublisher.com/index.php/jcsts/about/editorialTeam",
    },
  ];

  return (
    <div className="max-xs:px-3 max-xs:mx-0 sm:container sm:mx-auto sm:px-4">
      {/* Added horizontal padding for mobile */}
      <div className="my-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8">
            Memberships
          </h2>
        </div>

        <div className="flex flex-wrap justify-start gap-6">
          {awards.map((award) => (
            <AwardCart
              key={award.id}
              title={award.title}
              image={award.image}
              link={award.link}
              des={award.des}
              location={award.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Memberships;
