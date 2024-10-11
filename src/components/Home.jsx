import React from "react";
import ImpAterts from "./ImpAterts";
import Hero from "./Hero";
import Offer from "./Offer";
import Experince from "./Experience";
import Categories from "./Categories";
import DetailInfo from "./DetailInfo";
import BgImage from "./BgImage";
import Register from "./Register";

const Home = ({register, setRegister}) => {
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
