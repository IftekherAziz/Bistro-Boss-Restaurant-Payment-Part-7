import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12 mx-10 md:mx-0">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center my-10">
        <Link to="/menu">
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            View Full Menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
