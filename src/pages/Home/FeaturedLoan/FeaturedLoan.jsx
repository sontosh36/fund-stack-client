import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoanCard from "../../../components/LoanCard/LoanCard";
import LoadingSkeleton from "../../../components/Loading/LoadingSkeleton";
import { FiTrendingUp, FiUsers, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router";

const FeaturedLoan = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: loans = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["featured-loans"],
    queryFn: async () => {
      const res = await axiosSecure.get("/featured-loans");
      return res.data;
    },
  });

  if (error) {
    return (
      <div className="py-20 text-center">
        <p className="text-red-500 font-medium">
          Failed to load featured loans
        </p>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 py-10 md:py-15 lg:py-17">
      {/* Background Blur */}
      <div className="absolute bottom-[50%] right-[50%] h-100 w-150 rounded-full bg-indigo-500/10 blur-3xl transition"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 mb-5">
            Featured Loans
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            Smart Financing Solutions
            <span className="block text-blue-600">
              For Every Need
            </span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-slate-600 dark:text-slate-400">
            Discover our most trusted loan programs with competitive interest
            rates, flexible repayment plans, and fast approval processes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 lg:mb-16">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur p-6 text-center shadow-sm">
            <FiTrendingUp className="mx-auto text-3xl text-blue-600 mb-3" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              95%
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Approval Success
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur p-6 text-center shadow-sm">
            <FiUsers className="mx-auto text-3xl text-blue-600 mb-3" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              25K+
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Happy Customers
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur p-6 text-center shadow-sm">
            <FiCheckCircle className="mx-auto text-3xl text-blue-600 mb-3" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              50+
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Active Loan Programs
            </p>
          </div>
        </div>

        {/* Loan Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[...Array(6)].map((_, index) => (
              <LoadingSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {loans.map((loan) => (
                <LoanCard key={loan._id} loan={loan} />
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link to="/all-loans" className="inline-flex items-center rounded-xl bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                View All Loans
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedLoan;