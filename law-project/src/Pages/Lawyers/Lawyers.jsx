import React, { useState } from "react";
import Lawyer from "../Lawyer/Lawyer";
import human from "../../assets/success-doctor.png";
import justice from "../../assets/success-patients.png";
import review from "../../assets/success-review.png";
import staff from "../../assets/success-staffs.png";
import CountUp from "react-countup";

const Lawyers = ({ data }) => {
  const [showAll, setShowAll] = useState(false);
  const displayLawyers = showAll ? data : data.slice(0, 6);
  return (
    <>
      {/* lawyer portfolio */}
      <div>
        <div className="flex flex-col items-center justify-center text-center mt-60">
          <h1 className="font-bold text-4xl">Our Best Lawyers</h1>
          <p>
            Our platform connects you with verified, experienced Lawyers across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {displayLawyers.map((lawyer, index) => (
              <Lawyer lawyer={lawyer} key={index}></Lawyer>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-2">
          <button
            onClick={() => setShowAll(true)}
            className="btn btn-primary bg-[#0EA106] p-8 text-2xl rounded-2xl mt-5"
          >
            {" "}
            Show All Lawyer
          </button>
        </div>
      </div>
      {/* success section */}
      <div className="mb-20">
        <div className="flex flex-col items-center justify-center text-center mt-60 mb-10">
          <h1 className="font-bold text-4xl">We Provide Best Law Services</h1>
          <p>
            Our platform connects you with verified, experienced Lawyers across
            various specialities — all at your convenience.
          </p>
        </div>

        <div className="flex items-center gap-8">
          {/* card 1 */}
          <div className="card w-96 bg-gray-100 card-xl shadow-sm">
            <div className="card-body">
              <img className="w-[64px] h-[64px]" src={human} alt="" />
              <h1 className="font-bold text-3xl">
                <CountUp end={199} duration={20} />+
              </h1>
              <p>Total lawyers</p>
            </div>
          </div>
          {/* card2 */}
          <div className="card w-96 bg-gray-100 card-xl shadow-sm">
            <div className="card-body">
              <img className="w-[64px] h-[64px]" src={justice} alt="" />
              <h1 className="font-bold text-3xl">
                <CountUp end={467} duration={20} />+
              </h1>
              <p>Case initated</p>
            </div>
          </div>
          {/* card 3 */}
          <div className="card w-96 bg-gray-100 card-xl shadow-sm">
            <div className="card-body">
              <img className="w-[64px] h-[64px]" src={review} alt="" />
              <h1 className="font-bold text-3xl">
                <CountUp end={1900} duration={20} />+
              </h1>
              <p>Total reviews</p>
            </div>
          </div>
          {/* card 4 */}
          <div className="card w-96 bg-gray-100 card-xl shadow-sm">
            <div className="card-body">
              <img className="w-[64px] h-[64px]" src={staff} alt="" />
              <h1 className="font-bold text-3xl">
                <CountUp end={300} duration={20} />+
              </h1>
              <p>Total Staffs</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lawyers;
