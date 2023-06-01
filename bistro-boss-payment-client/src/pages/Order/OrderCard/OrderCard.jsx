import FoodCard from "../../../components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./OrderCard.css";

const OrderCard = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const slides = [];
  const itemsPerSlideDesktop = 6;
  const itemsPerSlideMobile = 1;

  // Determine the number of items per slide based on the screen width
  const itemsPerSlide =
    window.innerWidth < 768 ? itemsPerSlideMobile : itemsPerSlideDesktop;

  for (let i = 0; i < items.length; i += itemsPerSlide) {
    const slideItems = items.slice(i, i + itemsPerSlide);
    slides.push(
      <SwiperSlide key={i}>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-center  gap-10 pt-10 pb-12">
          {slideItems.map((item) => (
            <FoodCard key={item._id} item={item}></FoodCard>
          ))}
        </div>
      </SwiperSlide>
    );
  }

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default OrderCard;
