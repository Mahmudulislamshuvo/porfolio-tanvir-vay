import AwardCart from "./CommonCompo/AwardsCart";
import awardpic1 from "../assets/awards/GRA_Hashibul Shoaib_2025.png";

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: "Hashibul Shoaib Celebrates 2025 Global Recognition Award™",
      des: "Hashibul Shoaib has been recognized with a 2025 Global Recognition Award for his exceptional contributions to deep learning research...",
      image: awardpic1,
      link: "https://globalrecognitionawards.org/winners/2025/hashibul-shoaib-recognized-with-a-2025-global-recognition-award/",
    },
  ];

  return (
    <div className="max-xs:px-3 max-xs:mx-0 sm:container sm:mx-auto sm:px-4">
      {/* Added horizontal padding for mobile */}
      <div className="my-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8">
            Awards
          </h2>
        </div>

        <div className="flex flex-wrap justify-start gap-6">
          {awards.map((award) => (
            <AwardCart
              key={award.id}
              title={award.title}
              des={award.des}
              image={award.image}
              link={award.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
