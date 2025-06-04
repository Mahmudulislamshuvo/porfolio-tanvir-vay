const ProfileImage = ({ imgSrc, alt }) => (
  <div className="relative flex justify-center">
    <div className="w-[600px] h-[600px] rounded-full bg-white shadow-lg overflow-hidden flex items-end">
      <img src={imgSrc} alt={alt} className="w-full object-cover -mt-10" />
    </div>
  </div>
);

export default ProfileImage;
