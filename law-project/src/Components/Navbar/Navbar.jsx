import React from "react";
import { Link } from "react-router";
import logoHead from "../../assets/logo.png";

const Navbar = () => {
  const Links = (
    <>
      <Link to="/">
        {" "}
        <li className="mr-2">Home</li>
      </Link>
      <Link to="/Bookings">
        {" "}
        <li className="mr-2">My-Bookings</li>
      </Link>
      <Link to="/blogs">
        {" "}
        <li className="mr-2">Blogs</li>
      </Link>
      <Link to="/about">
        {" "}
        <li className="mr-2">Contact Us</li>
      </Link>
    </>
  );
  return (
    <div>
      <div className="navbar text-black p-5">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <Link to="/">
                <img src={logoHead} alt="" />
              </Link>

              <a className="text-xl font-bold">Law.BD</a>
            </div>

            <div>
              <img src="../assets/logo-footer.png" alt="" />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-4">{Links}</ul>
        </div>
        <div className="navbar-end">
          <a className=" btn btn-neutral bg-[#0EA106] rounded-lg border-none">
            Contact Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
