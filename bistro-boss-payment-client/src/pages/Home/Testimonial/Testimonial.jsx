/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
  return (
    <div className="my-10 mx-auto max-w-7xl">
      <div
        className="hero min-h-[450px]"
        style={{
          backgroundImage: `url("https://i.ibb.co/Bzw7MPy/chef-service.jpg")`,

          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-5xl">
            <div className="flex items-center justify-center px-5 py-5">
              <div className="w-full px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white rounded shadow-lg">
                <div className="w-full mb-10">
                  <h2 className="text-3xl font-thin uppercase pt-10 pb-5">
                    Bistro Boss
                  </h2>
                  <p className="px-5 text-md text-center text-gray-600 md:mx-20">
                    Indulge in culinary bliss at "Bistro Boss," where innovative
                    dishes, warm hospitality, and a stylish ambiance await. Our
                    talented chefs create a diverse menu inspired by global
                    cuisines, using only the freshest ingredients. Discover a
                    place where flavors come alive, leaving you utterly
                    satisfied.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
