import React from "react";
import heroImage from "../../assets/banner-img-1.png";

const Banner = () => {
  return (
    <div
      className="hero w-full h-[654px] rounded-3xl"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70 rounded-3xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div>
          <div className=" flex gap-3 mb-5 text-7xl w-full font-bold text-center text-">
            Our Best{" "}
            <span>
              La<span className="text-green-500">w</span>yers
            </span>
          </div>
          <p className=" text-center">
            "Your Legal Journey Begins Here" <br /> Find verified lawyers for
            any legal issue — anytime, anywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
