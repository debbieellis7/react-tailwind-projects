import useScrollReveal from "../../hooks/useScrollReveal";
import Card from "./Card";
import cart1 from "../../assets/cart-1.png";
import cart2 from "../../assets/cart-2.png";
import cart3 from "../../assets/cart-3.png";
import cart4 from "../../assets/cart-4.png";

const Popular = () => {
  const plants = [
    {
      image: cart1,
      species: "Nephrolepis exaltata",
      name: "Boston Fern",
      price: 5,
      rating: 3.5,
    },
    {
      image: cart2,
      species: "Ficus elastica",
      name: "Rubber Plant",
      price: 5,
      rating: 4.5,
    },
    {
      image: cart3,
      species: "Spathiphyllum wallisii",
      name: "Peace Lily",
      price: 5,
      rating: 4,
    },
    {
      image: cart4,
      species: "Adenium obesum",
      name: "Desert Rose",
      price: 5,
      rating: 3,
    },
  ];

  // Initialize ScrollReveal animations
  useScrollReveal([
    { selector: ".popular-top" },
    { selector: ".popular__card", options: { interval: 100 } },
  ]);

  return (
    <section id="popular" className="bg-green-900">
      <div className="popular-top flex flex-col items-center gap-3 text-center mb-40">
        <h2 className="title">Your Choice Plant</h2>
        <p className="max-w-2xl">Follow instruction for more</p>
      </div>

      <div
        className="container w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-4"
      >
        {plants.map((plant, index) => (
          <Card
            key={index}
            image={plant.image}
            species={plant.species}
            name={plant.name}
            price={plant.price}
            rating={plant.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default Popular;
