import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Card from "./Card";
import leaf4 from "../../assets/leaf-4.png";
import review1 from "../../assets/review-1.jpg";
import review2 from "../../assets/review-2.jpg";
import review3 from "../../assets/review-3.jpg";
import review4 from "../../assets/review-4.jpg";
import "swiper/css";
import "swiper/css/pagination";

const Review = () => {
  const reviews = [
    {
      imgSrc: review1,
      name: "Alice Pole",
      role: "Designer",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.",
    },
    {
      imgSrc: review2,
      name: "Jane Doe",
      role: "Developer",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.",
    },
    {
      imgSrc: review3,
      name: "Anna Smith",
      role: "Manager",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.",
    },
    {
      imgSrc: review4,
      name: "Michele Lee",
      role: "CEO",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.",
    },
    {
      imgSrc: review1,
      name: "Sophie Turner",
      role: "Photographer",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.",
    },
  ];

  return (
    <section id="review" className="relative mb-20 md:mb-28 overflow-hidden">
      <div className="absolute -top-8 -left-12 opacity-50">
        <img src={leaf4} className="w-40 md:w-52 xl:w-64" alt="leaf_image" />
      </div>

      <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
        <h2 className="title">Customer Review</h2>
        <p className="max-w-2xl">Follow instruction for more</p>
      </div>

      <div className="container">
        <Swiper
          className="swiper py-12"
          modules={[Pagination]}
          spaceBetween={30}
          speed={400}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Card
                imgSrc={review.imgSrc}
                name={review.name}
                role={review.role}
                quote={review.quote}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
