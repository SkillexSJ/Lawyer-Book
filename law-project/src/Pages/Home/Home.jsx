import React from "react";
import { useLoaderData } from "react-router";
import Banner from "../../Components/Banner/Banner";
import Lawyers from "../Lawyers/Lawyers";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Lawyers data={data}></Lawyers>
    </div>
  );
};

export default Home;
