import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu
    .filter((item) => item.category === "offered")
    .slice(0, 6);
  const desserts = menu
    .filter((item) => item.category === "dessert")
    .slice(0, 6);
  const pizzas = menu.filter((item) => item.category === "pizza").slice(0, 6);
  const salads = menu.filter((item) => item.category === "salad").slice(0, 6);
  const soups = menu.filter((item) => item.category === "soup").slice(0, 6);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Main Cover Section */}
      <Cover
        img={menuImg}
        title="Our Menu"
        subTitle="Would you like to try a dish?"
      ></Cover>
      {/* Offered Section */}
      <div className="mb-12 mx-10 md:mx-40">
        <SectionTitle
          subHeading="Dont Miss"
          heading="Today's Offer"
        ></SectionTitle>
        <MenuCategory items={offered} title={"offered"}></MenuCategory>
      </div>
      {/* Dessert Section */}
      <Cover
        img={dessertImg}
        title="Desserts"
        subTitle="Desserts are delectable treats that satisfy your sweet tooth. From cakes to cookies, ice cream to pies, they offer a delightful indulgence and a perfect ending to any meal."
      ></Cover>
      <div className="mb-12 mx-10 md:mx-40">
        <MenuCategory items={desserts} title={"dessert"}></MenuCategory>
      </div>
      {/* Pizza Section */}
      <Cover
        img={pizzaImg}
        title="Pizza"
        subTitle="Pizza, a beloved culinary creation, combines a crispy crust with savory tomato sauce and a variety of toppings. Its irresistible flavors, gooey cheese, and satisfying chew make it a timeless favorite worldwide."
      ></Cover>
      <div className="mb-12 mx-10 md:mx-40">
        <MenuCategory items={pizzas} title={"pizza"}></MenuCategory>
      </div>
      {/* Salad Section */}
      <Cover
        img={saladImg}
        title="Salad"
        subTitle="Salads are refreshing and healthy culinary creations that offer a burst of flavors and textures. With a vibrant mix of fresh greens, vegetables, fruits, and dressings, they provide a nourishing and satisfying dining experience."
      ></Cover>
      <div className="mb-12 mx-10 md:mx-40">
        <MenuCategory items={salads} title={"salad"}></MenuCategory>
      </div>
      {/* Soup Section */}
      <Cover
        img={soupImg}
        title="Soup"
        subTitle="Soups are a staple in many countries around the world. They are a healthy option for a variety of tastes and cuisines."
      ></Cover>
      <div className="mb-12 mx-10 md:mx-40">
        <MenuCategory items={soups} title={"soup"}></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
