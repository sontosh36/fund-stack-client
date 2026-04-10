import React from "react";
import Hero from "../../../components/Hero/Hero";
import FeaturedLoan from "../FeaturedLoan/FeaturedLoan";
import HowItWorks from "../HowItWorks/HowItWorks";
import CustomerFeedback from "../CustomerFeedback/CustomerFeedback";
import TrustSecurity from "../TrustSecurity/TrustSecurity";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <FeaturedLoan />
      <HowItWorks />
      <CustomerFeedback/>
      <TrustSecurity/>
    </div>
  );
};

export default Home;
