import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-200 via-white to-blue-200 py-20 rounded-lg">
      <div className="max-w-7xl mx-auto px-6 lg-px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* left content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-1"
        >
          <h1 className="text-center md:text-left text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Streamline Microloan <br />
            <span className="text-indigo-600">Request & Approvals</span>
          </h1>
          <p className="mt-6 text-lg text-center md:text-left text-gray-600 max-w-xl">
            FundStack centerlizes loan applications, verification, approvals,
            EMI schedules and repayments into one secure and intelligent
            management system for NGOs and financial institutions.
          </p>
          {/* CTA Button */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to={"/apply-loan"}
              className="text-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 hover:scale-105 transition duration-300 "
            >
              Apply for Loan
            </Link>
            <Link
              to={"/all-loans"}
              className="text-center px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-100 transition duration-300"
            >
              Explore Loans
            </Link>
          </div>
          {/* state section */}
          <div className="mt-10 grid grid-cols-2 gap-6 max-w-md sm:text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">10K+</h3>
              <p className="text-gray-600 text-sm">Loans Processed</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600">250+</h3>
              <p className="text-gray-600 text-sm">Active NGOs</p>
            </div>
          </div>
        </motion.div>
        {/* right images */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative order-2"
        >
          <img
            src="https://i.ibb.co.com/BVsY6rZD/economic-held.jpg"
            alt="microloan management service"
            className="rounded-2xl shadow-2xl w-2xl h-80 md:h-122 object-center"
          />
          {/* floating card effect */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
            <p className="text-sm text-gray-700 font-semibold">Loan Approved</p>
            <p className="text-blue-600 font-bold">$5000 Disbursed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
