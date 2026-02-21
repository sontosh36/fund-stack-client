import React, { useEffect, useState } from "react";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import { motion } from "motion/react";
import LoanCard from "./../../../components/LoanCard/LoanCard";

const AllLoans = () => {
  const axios = useAxiosSecure();
  const [loans, setLoans] = useState([]);
  const [totalLoan, setTotalLoan] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] =useState('');
  const limit = 6;

  useEffect(() => {
    axios
      .get(`/all-loans?limit=${limit}&skip=${currentPage * limit}&search=${searchText}`)
      .then((res) => {
        setLoans(res.data.result);
        setTotalLoan(res.data.count);
        const page = Math.ceil(res.data.count / limit);
        setTotalPage(page);
      });
  }, [currentPage, searchText]);

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
            className="text-sm text-gray-400 px-3 md:px-13"
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
            <input
            onChange={(e) => setSearchText(e.target.value)}
              name="search"
              type="search"
              placeholder="Search Loans"
              className=""
            />
          </label>
        </div>
        {loans.length === 0 ? (
          <div className="py-15 mx-auto flex justify-center items-center">
            <p className="text-4xl font-bold">No Loans Available Here.</p>
          </div>
        ) : (
          <div className="bg-base-400 rounded-lg p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loans.map((loan) => (
              <LoanCard key={loan._id} loan={loan}></LoanCard>
            ))}
          </div>
        )}
      </div>

      {/* pagination */}
      <div className="flex flex-wrap justify-center gap-3 mt-5">
        {currentPage > 0 && (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="btn"
          >
            Prev
          </button>
        )}

        {[...Array(totalPage).keys()].map((i, index) => (
          <button
            onClick={() => setCurrentPage(i)}
            key={index}
            className={`btn ${i === currentPage && "btn-primary"}`}
          >
            {i + 1}
          </button>
        ))}
        {currentPage < totalPage - 1 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="btn"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default AllLoans;
