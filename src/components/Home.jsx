import React from "react";
import Hero from "./Hero";
import Offer from "./Offer";
import Experince from "./Experience";
import Categories from "./Categories";
import DetailInfo from "./DetailInfo";
import BgImage from "./BgImage";

const Home = () => {
  return (
    <div>
      
      <Hero />
      <Experince />
      <BgImage />
      <Offer />
      <Categories />
      <DetailInfo />
    </div>
  );
};

export default Home;
