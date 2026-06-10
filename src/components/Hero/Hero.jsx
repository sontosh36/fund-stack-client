import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { HiOutlineShieldCheck, HiOutlineArrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 py-12 md:py-16 lg:py-24">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-52 h-52 md:w-72 md:h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 md:w-80 md:h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/70 backdrop-blur-md mb-6">
              <HiOutlineShieldCheck className="text-blue-600 text-lg" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Trusted by NGOs & Microfinance Organizations
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-slate-900 dark:text-white">
              Simplify
              <span className="text-blue-600"> Loan Requests </span>
              &
              <br />
              Approval Workflows
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl">
              Manage loan applications, borrower verification, approvals,
              repayment tracking, and EMI schedules from one secure cloud
              platform built for modern microfinance institutions and NGOs.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/all-loans"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105"
              >
                Apply for Loan
                <HiOutlineArrowRight />
              </Link>

              <Link
                to="/all-loans"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
              >
                Explore Loans
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 backdrop-blur">
                <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Loans Processed
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 backdrop-blur">
                <h3 className="text-3xl font-bold text-blue-600">250+</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Active NGOs
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 backdrop-blur">
                <h3 className="text-3xl font-bold text-blue-600">98%</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Approval Rate
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl">
              <img
                src="https://i.ibb.co.com/BVsY6rZD/economic-held.jpg"
                alt="Loan Management Dashboard"
                className="w-full h-[280px] sm:h-[420px] lg:h-[550px] object-cover"
              />
            </div>

            {/* Floating Card 1 */}
            <div className="hidden sm:block absolute top-6 left-4 lg:-left-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-xl">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Approval Rate
              </p>
              <h3 className="text-2xl font-bold text-green-600">92%</h3>
            </div>

            {/* Floating Card 2 */}
            <div className="hidden sm:block absolute bottom-6 right-4 lg:-right-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-xl">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Disbursed Today
              </p>
              <h3 className="text-2xl font-bold text-blue-600">$45K</h3>
            </div>

            {/* Floating Card 3 */}
            <div className="hidden md:block absolute bottom-24 left-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 shadow-lg">
              <p className="font-medium text-slate-700 dark:text-slate-200">
                1,245 Applications Reviewed
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
