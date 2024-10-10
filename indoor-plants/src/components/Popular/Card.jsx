import StarRating from "./StarRating";

const Card = ({ image, species, name, price, rating }) => {
  return (
    <div className="popular__card bg-green-950 p-10 pt-24 rounded-md relative">
      <img
        src={image}
        className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
        alt={`${name}_image`}
      />
      <p className="italic">{species}</p>
      <h3>{name}</h3>

      <StarRating rating={rating} />

      <div className="flex items-center justify-between">
        <p className="text-xl">${price}</p>
        <button className="bg-yellow-500 px-2 py-1 rounded-sm text-xl">
          <i className="ri-shopping-cart-fill" />
        </button>
      </div>
    </div>
  );
};

export default Card;
