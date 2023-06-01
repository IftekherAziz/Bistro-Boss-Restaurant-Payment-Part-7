import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProviders";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart, , isLoading] = useCart();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/contact-us">Contact us</Link>
      </li>
     {/*  <li>
        <Link to="secret">Secret</Link>
      </li> */}

      <li>
        <Link to="/dashboard/my-cart">
          <span className="flex gap-2">
            <FaShoppingCart></FaShoppingCart>
            {isLoading || (
              <p className="badge badge-primary">+{cart?.length || 0}</p>
            )}
          </span>
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed  z-10 bg-opacity-40 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral-700 rounded-box w-52 "
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/">
            <img className="h-12 ml-4" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              <button onClick={handleLogout} className="btn btn-primary">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn  btn-primary">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
