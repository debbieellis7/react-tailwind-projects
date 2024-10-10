import ContentBlock from "./ContentBlock";
import leaf3 from "../../assets/leaf-3.png";
import plant1 from "../../assets/plant-1.png";
import plant2 from "../../assets/plant-2.png";

const AboutUs = () => {
  const contentBlocks = [
    {
      title: (
        <>
          Make your <span className="text-yellow-500">organic</span> <br />
          garden
        </>
      ),
      image: plant1,
      imageAlt: "about_image_plant_1",
      reverse: false,
    },
    {
      title: (
        <>
          Come with us <br />
          <span className="text-yellow-500">grow up</span> your plant
        </>
      ),
      image: plant2,
      imageAlt: "about_image_plant_2",
      reverse: true,
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute -top-8 -right-12 opacity-50">
        <img src={leaf3} className="w-40 md:w-52 xl:w-64" alt="leaf-image" />
      </div>

      <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
        <h2 className="title">About Us</h2>
        <p className="max-w-2xl">Follow instruction for more</p>
      </div>

      <div className="container space-y-10 xl:space-y-0">
        {contentBlocks.map((block, index) => (
          <ContentBlock
            key={index}
            title={block.title}
            image={block.image}
            imageAlt={block.imageAlt}
            reverse={block.reverse}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
