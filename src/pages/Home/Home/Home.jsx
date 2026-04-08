import React from "react";
import Hero from "../../../components/Hero/Hero";
import FeaturedLoan from "../FeaturedLoan/FeaturedLoan";
import HowItWorks from "../HowItWorks/HowItWorks";
import CustomerFeedback from "../CustomerFeedback/CustomerFeedback";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <FeaturedLoan />
      <HowItWorks />
      <CustomerFeedback/>
    </div>
  );
};

export default Home;
