import React from "react";
import footerImg from "../../assets/logo-footer.png";
import { Link } from "react-router";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
const Footer = () => {
  const Links = (
    <>
      <Link to="/">
        {" "}
        <h2 className="mr-2">Home</h2>
      </Link>
      <Link to="/Bookings">
        {" "}
        <h2 className="mr-2">My-Bookings</h2>
      </Link>
      <Link to="/">
        {" "}
        <h2 className="mr-2">Blogs</h2>
      </Link>
      <Link to="/about">
        {" "}
        <h2 className="mr-2">Contact Us</h2>
      </Link>
    </>
  );
  return (
    <footer className="footer flex flex-col justify-center items-center sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <div className="flex gap-2">
        <img src={footerImg} alt="" />
        <h1 className="font-bold text-3xl">Law.BD</h1>
      </div>

      <div className="text-white flex ">{Links}</div>

      <div className="border-1 w-full border-dashed border-gray-500"></div>

      <div className="flex gap-4">
        <Link to="https://www.facebook.com/imam.hussain.883177">
          <FaFacebook size={30} />
        </Link>
        <FaLinkedin size={30} />
        <FaYoutube size={30} />
      </div>
    </footer>
  );
};

export default Footer;
