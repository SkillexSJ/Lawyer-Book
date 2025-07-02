import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const LawyerDetails = () => {
  const lawyer = useLoaderData();
  const { name, image, specialty, experience, license, fee, availability, id } =
    lawyer;

  const navigate = useNavigate();

  // book e click korle kaj korbe
  const handleBooking = () => {
    const stored = localStorage.getItem("appointments");
    const appointments = stored ? JSON.parse(stored) : [];

    const alreadyBooked = appointments.find((l) => l.id === id);
    if (alreadyBooked) {
      toast.warning("You already booked this lawyer!");
      return;
    }

    appointments.push(lawyer);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    toast.success("Appointment booked successfully!");
    navigate("/bookings");
  };

  return (
    <div className="flex flex-col mb-10 justify-center mt-5 gap-10">
      {/* section 1 */}
      <div className="flex justify-center flex-col rounded-sm p-10 bg-gray-300 text-center mx-auto">
        <h1 className="font-bold text-4xl">Lawyer’s Profile Details</h1>
        <p className="text-gray-700 mt-2">
          Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum
          magna. Quis vitae tempus facilisis turpis imperdiet mattis donec
          dignissim volutpat.
        </p>
      </div>

      {/* section 2 */}
      <div className="flex flex-col md:flex-row gap-5 mt-10 py-10 shadow p-4">
        {/* image section */}
        <div className="w-full md:w-1/3">
          <img src={image} alt={name} className="w-full rounded-lg" />
        </div>

        {/* details section */}
        <div className="flex flex-col gap-4 w-full md:w-2/3">
          <h3 className="bg-amber-200 text-blue-500 w-fit px-3 py-1 rounded-md">
            {experience} Years Experience
          </h3>
          <h1 className="font-bold text-2xl">{name}</h1>
          <div className="flex flex-wrap gap-4">
            <p>Specialty: {specialty}</p>
            <p>License No: {license}</p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-semibold">Available:</span>
            {availability.map((day, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-700 px-2 py-1 rounded"
              >
                {day}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-semibold">
            Consultation Fee: {fee} Taka
          </h3>
        </div>
      </div>

      {/* section 3 - Book */}
      <div className="flex flex-col gap-6 shadow p-6">
        <h1 className="text-center font-bold text-4xl">Book An Appointment</h1>

        <div className="border border-dashed border-black"></div>

        <div className="flex justify-between items-center font-bold">
          <h1>Availability</h1>
          <h1 className="bg-green-200 text-green-500 p-1 rounded-lg">
            Lawyer Available Today
          </h1>
        </div>

        <div className="border border-gray-300"></div>

        <h3 className="bg-yellow-200 text-yellow-500 text-center rounded-lg p-2">
          ⚠️ Due to high volume, we’re accepting appointments for **today
          only**.
        </h3>

        <div className="flex justify-center">
          <button
            onClick={handleBooking}
            className="p-3 rounded-lg w-10/12 bg-green-500 text-2xl text-white hover:bg-green-600"
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LawyerDetails;
