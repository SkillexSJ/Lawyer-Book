import React from "react";
import { Link } from "react-router";

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
              <h3 className="bg-green-200 text-green-400 p-2 rounded-sm">
                Available
              </h3>
              <h3 className="bg-[#76a7f1] p-2 rounded-sm">{experience}</h3>
            </div>
            <div className="flex flex-col mt-2 gap-1">
              <h1 className="text-3xl font-bold">{name}</h1>
              <h2 className="text-gray-300">{specialty}</h2>
              <h2>{license}</h2>
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
