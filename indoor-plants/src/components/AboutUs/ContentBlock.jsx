const ContentBlock = ({ title, image, imageAlt, reverse }) => {
  return (
    <div
      className={`flex flex-col items-center lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } gap-5`}
    >
      {/* image */}
      <div className="about-item-1-img w-full lg:w-1/2">
        <img
          src={image}
          className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
          alt={imageAlt}
        />
      </div>

      {/* content */}
      <div className="about-item-1-content w-full lg:w-1/2">
        <div className="space-y-5">
          <h3>{title}</h3>
          <p className="text-slate-300 font-Lobster">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            ratione rem maxime veniam cum libero voluptas tempora aut saepe
            similique, eos corporis. Expedita culpa consequatur animi deleniti
            ullam adipisci iure sequi dolores modi aliquam laudantium, explicabo
            nobis quia id reprehenderit.?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
