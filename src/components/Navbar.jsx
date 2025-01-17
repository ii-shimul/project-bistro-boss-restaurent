import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; 
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/order/salad"}>Order Food</NavLink>
      </li>
    </>
  );
  return (
    <div className={`navbar z-[100] fixed bg-black bg-opacity-30 text-white`}>
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl flex items-center">
          <img src="/logo.png" className="max-h-6" alt="" />
          <h1 className="font-serif">BistroBoss</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <>
            <Tippy content={user.displayName}>
              <div className="avatar online">
                <div className="h-12 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
            </Tippy>
            <button className="btn bg-[#fb8e01] ml-2" onClick={logOut}>
              LogOut
            </button>
          </>
        ) : (
          <Link to={"/login"} className="btn bg-[#fb8e01]">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
