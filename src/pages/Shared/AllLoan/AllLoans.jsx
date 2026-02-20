import React, { useEffect, useState } from "react";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import { motion } from "motion/react";
import LoanCard from './../../../components/LoanCard/LoanCard';

const AllLoans = () => {
  const [loans, setLoans] = useState([]);
  const axios = useAxiosSecure();
  useEffect(() => {
    axios.get("/all-loans?limit=9&skip=0").then((res) => {
      setLoans(res.data.result);
    });
  },[]);
  return (
    <div className="max-w-7xl mx-auto bg-base-300 py-6 md:py-9">
      <div className="text-center">
        <div className="my-8 mx-auto space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl text-center font-bold md:text-3xl"
          >
            All <span className="text-indigo-600 ">Loans</span> Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-gray-600 px-3 md:px-13"
          >
            Explore our complete range of personal, business and home loan
            solutions design to meet your financial goals.
          </motion.p>
        </div>
        <div className="flex flex-col justify-center mb-8 md:mb-15">
          <label className="input outline-0 border-gray-300 rounded-xl mx-auto">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input name="search" type="search" placeholder="Search" className=""/>
          </label>
        </div>

        <div className="bg-gray-50 rounded-lg p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loans.map((loan) => <LoanCard key={loan._id} loan={loan}></LoanCard>)}
        </div>
      </div>
    </div>
  );
};

export default AllLoans;
