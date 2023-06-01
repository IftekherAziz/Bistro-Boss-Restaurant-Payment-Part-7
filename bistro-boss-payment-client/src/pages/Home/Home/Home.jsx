import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Products from "../Products/Products";
import Review from "../Review/Review";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Testimonial></Testimonial>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Products></Products>
      <Featured></Featured>
      <Review></Review>
    </div>
  );
};

export default Home;
