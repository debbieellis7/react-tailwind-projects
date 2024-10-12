const Card = ({ icon, title, description }) => {
  return (
    <div
      className="service-card border border-green-900 p-5 cursor-pointer rounded-md 
      hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5"
    >
      <div className="flex items-center gap-5">
        <i className={`${icon} text-3xl md:text-4xl xl:text-5xl`} />
        <p className="md:text-lg font-bold">{title}</p>
      </div>
      <p className="font-Lobster">{description}</p>
    </div>
  );
};

export default Card;
