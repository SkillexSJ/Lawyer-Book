import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import TriangleChart from "../../Components/TriangleChart/TriangleChart";
import { toast } from "react-toastify";

const Bookings = () => {
  const [appointments, setAppointments] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("appointments");
    if (stored) {
      setAppointments(JSON.parse(stored));
    }
  }, []);

  // Cancel appointment
  const handleCancel = (id) => {
    const updated = appointments.filter((item) => item.id !== id);
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
    toast.info("Appointment cancelled.");
  };

  return (
    <div className="p-6  mx-auto flex flex-col mb-50 justify-center ">
      {/* Chart Section */}
      {appointments.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Appointment Fee Chart</h2>
          <TriangleChart data={appointments} />
        </div>
      )}

      {/* Heading */}
      <div className="text-center mb-6 mt-10">
        <h1 className="text-3xl font-bold">My Today's Appointments</h1>
        <p className="text-gray-500">
          Here are all the lawyers you've booked for consultation.
        </p>
      </div>

      {/* Appointment Cards */}
      <div className="flex flex-col">
        {appointments.length > 0 ? (
          appointments.map((lawyer) => (
            <div
              key={lawyer.id}
              className="p-4 border rounded-lg shadow flex-col gap-5 justify-between items-center"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">{lawyer.name}</h2>
                  <p className="text-gray-500">{lawyer.specialty}</p>
                </div>
                <div>
                  <p className="text-gray-500">
                    Appointment Fee Fee: {lawyer.fee} Taka
                  </p>
                </div>
              </div>

              <div className="border-1 border-dashed border-gray-200 mt-1"></div>
              <button
                onClick={() => handleCancel(lawyer.id)}
                className="btn btn-outline hover:bg-gray-200 w-full  mt-5 text-[#FF0000] px-4 py-2 rounded"
              >
                Cancel Appointment
              </button>
            </div>
          ))
        ) : (
          <div className="text-center mt-10  flex flex-col translate-x-3 justify-center">
            <h2 className="text-xl font-bold text-red-500">
              No Appointments Found!
            </h2>
            <Link to="/">
              <button className="mt-4 w-full px-6 py-2 bg-green-600  text-white rounded">
                Book an appointment
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
