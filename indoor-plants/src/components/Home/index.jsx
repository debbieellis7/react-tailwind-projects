import useScrollReveal from "../../hooks/useScrollReveal";
import Blob from "./Blob";
import Button from "./Button";
import SocialIcons from "./SocialIcons";
import DecorativeIcon from "./DecorativeIcon";
import homeImage from "../../assets/home.png";

const Home = () => {
  const decorativeIcons = [
    {
      icon: "ri-leaf-line",
      size: "xlarge",
      color: "yellow-500",
      positionClasses: "-top-10 right-0 xl:top-5",
      animationClasses: "animate-movingY",
    },
    {
      icon: "ri-flower-line",
      size: "xlarge",
      color: "yellow-500",
      positionClasses: "bottom-0 left-0 xl:bottom-12",
      animationClasses: "animate-rotating",
    },
    {
      icon: "ri-plant-line",
      size: "xlarge",
      color: "yellow-500",
      positionClasses: "top-8 -left-5",
      animationClasses: "animate-scalingUp",
      additionalClasses: "hidden lg:block",
    },
  ];

  // Initialize ScrollReveal animations
  useScrollReveal([
    { selector: ".home-data" },
    { selector: ".home-image", options: { delay: 500, scale: 0.5 } },
  ]);

  return (
    <section id="home" className="relative">
      <div className="container">
        {/* Decorative Blobs */}
        <Blob
          size="64"
          color="green-700"
          positionClasses="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <Blob size="64" color="green-700" positionClasses="right-0 bottom-0" />

        <div className="flex flex-col items-center gap-5 lg:flex-row">
          {/* Content */}
          <div className="home-data w-full space-y-5 lg:w-1/2">
            <h1>
              <span className="text-yellow-500">Plants</span> make a <br />{" "}
              positive <span className="text-yellow-500">impact</span> on <br />{" "}
              your environment
            </h1>

            <p className="text-slate-300 font-Lobster">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distincto fugiat evenietm, reprehenderit veritatis aut explicabo
              voluptatum ullam itaque tenetur numquam!
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-5 xl:pt-10">
              <Button text="Shop Now" icon="ri-leaf-line" />
              <Button text="Know More" icon="ri-leaf-line" outline />
            </div>

            <p className="text-xs font-Lobster text-slate-300">
              You will get 30-days free trial.
            </p>

            {/* Social Icons */}
            <SocialIcons />
          </div>

          {/* Image and Decorative Icons */}
          <div className="w-full relative lg:w-1/2">
            <img src={homeImage} className="home-image" alt="home_image" />

            {decorativeIcons.map((icon, index) => (
              <DecorativeIcon
                key={index}
                icon={icon.icon}
                size={icon.size}
                color={icon.color}
                positionClasses={icon.positionClasses}
                animationClasses={icon.animationClasses}
                additionalClasses={icon.additionalClasses}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
