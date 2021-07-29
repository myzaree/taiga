export const Case = ({ title, description, image }) => {
  return (
    <div className="w-case inline-block mt-10 first:mt-1 mr-8 relative">
      <div className="absolute top-12 left-9">
        <h3 className="text-white text-5xl">{title}</h3>
        <p className="text-xl text-white opacity-0.6 mt-5">{description}</p>
      </div>
      <img src={image} className="w-full h-auto"/>
    </div>
  );
};