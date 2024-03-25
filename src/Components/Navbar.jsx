import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
      <div className="navbar">
        <div className="navbar-start ">
          <a className="text-3xl text-green-600 font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex font-semibold gap-8">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " px-5 py-4  rounded-lg text-white font-bold text-base bg-green-500"
                    : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " px-5 py-4  rounded-lg text-white font-bold text-base bg-green-500"
                    : ""
                }
                to="/listedBooks"
              >
                Listed Books
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " px-5 py-4  rounded-lg text-white font-bold text-base bg-green-500"
                    : ""
                }
                to="/PageToRead"
              >
                Page to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          <button className="px-5 py-4 rounded-lg bg-green-500 text-white font-bold">
            Sign In
          </button>
          <button className="px-5 py-4 rounded-lg bg-violet-500 text-white font-bold">
            Sign Up
          </button>
        </div>
      </div>
    );
};

export default Navbar;