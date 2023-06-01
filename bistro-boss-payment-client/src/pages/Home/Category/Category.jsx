import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="mt-20 mx-10 md:mx-0">
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-12 mt-12"
      >
        <SwiperSlide>
          <img src={slide1} alt="Salads" />
          <Link to="/order/salad">
            <h3 className="text-md md:text-2xl uppercase text-center -mt-12 mb-20  text-white">
              Salads
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Pizzas" />
          <Link to="/order/pizza">
            <h3 className="text-md md:text-2xl uppercase text-center -mt-12  mb-20  text-white">
              Pizzas
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="Soups" />
          <Link to="/order/soup">
            <h3 className="text-md md:text-2xl uppercase text-center -mt-12  mb-20 text-white">
              Soups
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="Desserts" />
          <Link to="/order/dessert">
            <h3 className="text-md md:text-2xl uppercase text-center -mt-12  mb-20 text-white">
              Desserts
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="Salads" />
          <h3 className="text-md md:text-2xl uppercase text-center -mt-12  mb-20 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="Desserts" />
          <h3 className="text-md md:text-2xl uppercase text-center -mt-12  mb-20 text-white">
            Desserts
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
