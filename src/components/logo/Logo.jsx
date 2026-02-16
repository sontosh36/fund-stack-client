import React from "react";
import logo from "../../assets/bank logo.png";
const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <img className="h-8 w-8 rounded-full" src={logo} alt="" />
      <h3 className="font-bold text-lg md:text-2xl">FundStack</h3>
    </div>
  );
};

export default Logo;