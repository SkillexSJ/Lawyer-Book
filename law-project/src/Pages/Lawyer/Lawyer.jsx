import React from "react";
import { Link } from "react-router";
import { SiUnlicense } from "react-icons/si";

const Lawyer = ({ lawyer }) => {
  const { id, name, image, specialty, experience, license } = lawyer;
  return (
    <div className="card card-side bg-base-white rounded-md shadow-sm border-gray-300">
      <div className="card-body">
        <div className="flex items-center justify-around ">
          {/* img section */}
          <div>
            <img src={image} alt="" />
          </div>
          {/* details section 3ta div */}
          <div className="flex flex-col">
            <div className="flex gap-2">
              <h3 className="bg-green-200 text-green-500 p-2 rounded-2xl">
                Available
              </h3>
              <h3 className="bg-[#b0ccf5] p-2 rounded-2xl text-blue-500">
                {experience} Year+ Experience
              </h3>
            </div>
            <div className="flex flex-col mt-2 gap-1">
              <h1 className="text-3xl font-bold">{name}</h1>
              <h2 className="text-gray-500">{specialty}</h2>
              <div className="flex gap-2 items-center text-gray-500">
                <SiUnlicense />
                <h2>License No: {license}</h2>
              </div>
            </div>
            <div>
              <Link to={`/lawyerDetails/${id}`}>
                <button className="btn btn-outline btn-primary w-full mt-2">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
