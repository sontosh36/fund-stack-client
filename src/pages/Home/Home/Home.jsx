import React from "react";
import Hero from "../../../components/Hero/Hero";
import FeaturedLoan from "../FeaturedLoan/FeaturedLoan";
import HowItWorks from "../HowItWorks/HowItWorks";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <FeaturedLoan />
      <HowItWorks />
    </div>
  );
};

export default Home;
