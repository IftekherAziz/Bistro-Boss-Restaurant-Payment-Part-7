import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import contact from "../../assets/contact/banner.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Swal from "sweetalert2";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // get form element
    const form = e.target;
    // get form data
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const comment = form.comment.value;
    // console.log(name, email, phone, comment);

    // post data to mongodb:
    fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        comment,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message has been sent.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Contact Us</title>
      </Helmet>
      {/* Main Cover Section */}
      <Cover
        img={contact}
        title="Contact Us"
        subTitle="Reach out to Us for Any Inquiries or Assistance - We're Here to Help"
      ></Cover>

      <div className="mb-12 mx-10 ">
        <SectionTitle
          subHeading="Visit Us"
          heading="Our Location"
        ></SectionTitle>
        <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
          <div className="w-full px-4 py-8 mt-6 bg-zinc-50 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 ">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                <FaPhone></FaPhone>
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
              Phone
            </h3>
            <p className="py-4 text-gray-500 text-md ">+38 (012) 34 56 789</p>
          </div>
          <div className="w-full px-4 py-8 mt-6 bg-zinc-50 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 ">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                <FaMapMarkerAlt></FaMapMarkerAlt>
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
              Address
            </h3>
            <p className="py-4 text-gray-500 text-md ">
              123 ABS Street, Uni 21, Bangladesh
            </p>
          </div>
          <div className="w-full px-4 py-8 mt-6 bg-zinc-50 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 ">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                <FaClock></FaClock>
              </div>
            </div>
            <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
              Working Hours
            </h3>
            <p className="py-4 text-gray-500 text-md ">
              Mon - Fri: 08:00 - 22:00
              <br /> Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle
            subHeading="Send Us a Message"
            heading="Write Your Message"
          ></SectionTitle>
          <form
            onSubmit={handleSubmit}
            className="flex w-full  space-x-3 mb-20"
          >
            <div className="w-full max-w-4xl px-5 py-12 m-auto mt-10 bg-zinc-50 rounded-lg shadow ">
              <div className="grid max-w-3xl grid-cols-2 gap-4 m-auto">
                <div className="col-span-2 lg:col-span-1 mb-5">
                  <div className=" relative ">
                    <input
                      type="text"
                      name="name"
                      required
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1 mb-5">
                  <div className=" relative ">
                    <input
                      type="email"
                      name="email"
                      required
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="col-span-2 mb-3">
                  <div className=" relative ">
                    <input
                      type="number"
                      name="phone"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="col-span-2 mb-3">
                  <label className="text-gray-700">
                    <textarea
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Enter your comment"
                      required
                      name="comment"
                      rows="5"
                      cols="40"
                    ></textarea>
                  </label>
                </div>
                <div className="col-span-2 text-right">
                  <button
                    type="submit"
                    className="py-2 px-4  bg-gradient-to-r from-black to-blue-700 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
