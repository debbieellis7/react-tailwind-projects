import Card from "./Card";

const Services = () => {
  // Array of service card data
  const services = [
    {
      icon: "ri-truck-line",
      title: (
        <>
          Fast <br />
          Delivery
        </>
      ),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis",
    },
    {
      icon: "ri-customer-service-line",
      title: (
        <>
          Great Customer <br />
          Service
        </>
      ),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis",
    },
    {
      icon: "ri-plant-line",
      title: (
        <>
          Original <br />
          Plants
        </>
      ),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis",
    },
    {
      icon: "ri-money-dollar-circle-line",
      title: (
        <>
          Affordable <br />
          Price
        </>
      ),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis",
    },
  ];

  return (
    <div className="bg-white text-green-900 py-20">
      <div
        className="container w-full grid grid-cols-1 gap-8 md:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-4"
      >
        {services.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
