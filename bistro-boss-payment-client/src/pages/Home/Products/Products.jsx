import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import productImage from "../../../assets/home/slide1.jpg";
import productImage2 from "../../../assets/home/slide2.jpg";
import productImage3 from "../../../assets/home/slide3.jpg";

const Products = () => {
  return (
    <section className="mb-12 mx-10 md:mx-0">
      <SectionTitle
        heading="CHEF RECOMMENDS"
        subHeading="Should Try"
      ></SectionTitle>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20">
        <div className="card w-96 bg-base-100 shadow-md mb-10">
          <figure className="">
            <img
              src={productImage}
              alt="Salads"
              className="w-full max-h-[280px]"
            />
          </figure>
          <div className="card-body items-center text-center bg-zinc-50">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="btn  text-yellow-600  btn-outline border-0 border-b-2 mt-4">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-md mb-10">
          <figure className="">
            <img
              src={productImage3}
              alt="Salads"
              className="w-full max-h-[280px]"
            />
          </figure>
          <div className="card-body items-center text-center bg-zinc-50">
            <h2 className="card-title">Escalope de Veau</h2>
            <p>Pan roasted haddock fillet wrapped in smoked French bacon</p>
            <button className="btn text-yellow-600 border-0 border-b-2 mt-4">
              Add To Cart
            </button>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-md mb-10">
          <figure className="">
            <img
              src={productImage2}
              alt="Salads"
              className="w-full max-h-[280px]"
            />
          </figure>
          <div className="card-body items-center text-center bg-zinc-50">
            <h2 className="card-title"> American Pizza</h2>
            <p>
              Chargrilled chicken with avocado, baby gem lettuce, baby spinach,
            </p>
            <button className="btn  text-yellow-600  btn-outline border-0 border-b-2 mt-4">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
