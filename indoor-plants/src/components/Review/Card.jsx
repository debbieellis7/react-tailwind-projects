const Card = ({ imgSrc, name, role, quote }) => {
  return (
    <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
      <p className="font-Lobster">{quote}</p>
      <div className="flex items-center">
        <img
          src={imgSrc}
          className="w-12 h-12 rounded-full"
          alt="review_image"
        />
        <div className="ml-2">
          <p className="text-yellow-500">{name}</p>
          <p>{role}</p>
        </div>
        <i className="ri-double-quotes-r text-4xl ml-auto" />
      </div>
    </div>
  );
};

export default Card;
