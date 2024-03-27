import {  NavLink } from "react-router-dom";


const Navbar = () => {
    return (
      <div className="navbar">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " px-5 py-1  rounded-lg text-white font-bold text-base bg-green-500"
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
                      ? " px-5 py-1  rounded-lg text-white font-bold text-base bg-green-500"
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
                      ? " px-5 py-1  rounded-lg text-white font-bold text-base bg-green-500"
                      : ""
                  }
                  to="/PageToRead"
                >
                  Pages to Read
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " px-5 py-4  rounded-lg text-white font-bold text-base bg-green-500"
                      : ""
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " px-5 py-4  rounded-lg text-white font-bold text-base bg-green-500"
                      : ""
                  }
                  to="/upComing"
                >
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </div>
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
                Pages to Read
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " px-5 py-4  rounded-lg text-white font-bold text-base bg-green-500"
                    : ""
                }
                to="/upComing"
              >
                Upcoming
              </NavLink>
            </li>
            
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " px-5 py-4  rounded-lg text-white font-bold text-base bg-green-500"
                    : ""
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          <button className="md:px-5 p-2  md:py-4 rounded-lg bg-green-500 text-white font-bold">
            Sign In
          </button>
          <button className="md:px-5 p-2 md:py-4 rounded-lg bg-violet-500 text-white font-bold">
            Sign Up
          </button>
        </div>
      </div>
    );
};

export default Navbar;