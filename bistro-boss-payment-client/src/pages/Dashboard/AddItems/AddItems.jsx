import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

// import img api:
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItems = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        const imgURL = imgResponse.data.display_url;
        const { name, price, category, recipe } = data;
        const newItem = {
          name,
          price,
          category,
          recipe,
          image: imgURL,
        };
        axiosSecure.post("/menu", newItem).then((res) => {
          //  console.log('After posting new menu item: ', res.data);
          if (res.data.insertedId) {
            reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Item added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      });
  };

  return (
    <div className="w-full px-10  ">
      <SectionTitle
        subHeading="What's New ?"
        heading="Add an item"
      ></SectionTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border p-10 bg-zinc-50"
      >
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Category*</span>
            </label>
            <select
              defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick One</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="salad">Salad</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
              <option value="offered">On Sale</option>
            </select>
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              step="any"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Recipe Details*</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
          ></textarea>
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text font-semibold">Item Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-6/12 "
          />
        </div>
        <input className="btn w-full mt-4" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItems;
