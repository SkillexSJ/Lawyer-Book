import React from "react";
import { CiCalendar } from "react-icons/ci";

const Blog = ({ b }) => {
  const currentDate = new Date().toLocaleDateString("en-US");
  return (
    <div className="flex flex-col gap-4 bg-gray-200 shadow p-6 rounded-2xl">
      <h1 className="font-bold text-2xl">{b.title}</h1>
      <div className="border-1 border-dashed border-gray-300"></div>
      <div>
        <h3 className="text-blue-500 font-semibold">Answer :</h3>
        <p>{b.content}</p>
      </div>
      <div className="border-1 border-dashed border-gray-300"></div>
      <div className="flex gap-1 items-center text-gray-500">
        <CiCalendar size={30} /> Added at {currentDate}
      </div>
    </div>
  );
};

export default Blog;
