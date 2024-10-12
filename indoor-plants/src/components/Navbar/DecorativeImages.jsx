import leaf1 from "../../assets/leaf-1.png";
import leaf2 from "../../assets/leaf-2.png";

const DecorativeImages = () => (
  <>
    <img
      src={leaf1}
      alt="Leaf decoration 1"
      className="absolute bottom-0 -right-10 w-32 opacity-90 lg:hidden"
    />
    <img
      src={leaf2}
      alt="Leaf decoration 2"
      className="absolute -top-5 -left-5 rotate-90 w-32 opacity-90 lg:hidden"
    />
  </>
);

export default DecorativeImages;
