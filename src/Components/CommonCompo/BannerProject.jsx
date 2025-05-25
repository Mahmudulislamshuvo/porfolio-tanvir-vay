const BannerProject = ({
  title = "+200",
  description = "Projects Completed",
}) => {
  return (
    <div>
      <h4 className="text-5xl">{title}</h4>
      <p className="text-xl pl-5 pt-2">{description}</p>
    </div>
  );
};

export default BannerProject;
