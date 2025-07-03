import React from "react";
import errorImg from "../../assets/istockphoto-1404059706-612x612.jpg";
import Navbar from "../../Components/Navbar/Navbar";
const ErrorPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col gap-4 justify-center items-center mt-10">
        <div>
          <img src={errorImg} alt="" />
        </div>
        <div className="text-center ">
          <h1 className="font-bold text-4xl text-red-500">
            404 - Page Not Found
          </h1>
          <p>Oops ! The page you're looking for dosen't exist</p>
        </div>
        <div>
          <button className="btn btn-neutral bg-[#0EA106] rounded-lg border-none">
            {" "}
            Go Back Home
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
