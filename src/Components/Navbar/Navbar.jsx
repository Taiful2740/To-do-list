import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Log Out Successfully"))
      .catch(error => console.log(error.message));
  };

  const links = (
    <>
      <li>
        <Link
          className="text-xl font-bold hover:bg-[#e363ff] hover:text-white"
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link className="text-xl font-bold hover:bg-[#e363ff] hover:text-white">
          Dashboard
        </Link>
      </li>
      <li>
        <Link className="text-xl font-bold hover:bg-[#e363ff] hover:text-white">
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          className="text-xl font-bold hover:bg-[#e363ff] hover:text-white"
          to="signin"
        >
          Sign In
        </Link>
      </li>
    </>
  );
  return (
    <div className="max-w-6xl mx-auto ">
      <div className="navbar bg-gray-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="Login" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Easy To-do</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-center   md:navbar-center lg:navbar-center ">
          {user ? (
            <>
              <span className="invisible lg:visible ml-4">
                {user?.displayName}
              </span>
              <div className="mx-4">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <img
                    className="w-10 rounded-full ml-2 "
                    src={user?.photoURL}
                    alt=""
                  />
                </label>
              </div>
              <a onClick={handleLogOut} className="btn btn-sm mr-8 lg:mx-4">
                Sign Out
              </a>
            </>
          ) : (
            <Link to="/login">
              <button className="btn  btn-sm">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
