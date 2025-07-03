import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import { useLoaderData } from "react-router";

const Blogs = () => {
  const data = useLoaderData();
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    setBlog(data);
  }, [data]);

  return (
    <div className="flex flex-col justify-center items-center mt-10 mb-15">
      <h1 className="font-bold text-4xl">Blogs</h1>
      <p className="text-gray-500 mt-2">Lets explore some basic concept</p>
      <div className="flex flex-col gap-4 mx-auto mt-10">
        {blog.map((b) => (
          <Blog b={b} key={b.id}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
