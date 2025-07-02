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

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("appointments");
    if (stored) {
      setAppointments(JSON.parse(stored));
    }
  }, []);

  // Cancel appointment handler
  const handleCancel = (id) => {
    const updated = appointments.filter((item) => item.id !== id);
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
    toast.info("Appointment cancelled.");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Chart Section */}
      {appointments.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Appointment Fee Chart</h2>
          <TriangleChart data={appointments} />
        </div>
      )}

      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">My Today's Appointments</h1>
        <p className="text-gray-600">
          Here are all the lawyers you've booked for consultation.
        </p>
      </div>

      {/* Appointment Cards */}
      <div className="flex flex-col gap-4">
        {appointments.length > 0 ? (
          appointments.map((lawyer) => (
            <div
              key={lawyer.id}
              className="p-4 border rounded-lg shadow flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-bold">{lawyer.name}</h2>
                <p>Speciality: {lawyer.specialty}</p>
                <p>Fee: {lawyer.fee} Taka</p>
              </div>
              <button
                onClick={() => handleCancel(lawyer.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Cancel Appointment
              </button>
            </div>
          ))
        ) : (
          <div className="text-center mt-10">
            <h2 className="text-xl font-bold text-red-500">
              No Appointments Found
            </h2>
            <Link to="/">
              <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded">
                Go to Homepage
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
