import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoanCard from "../../../components/LoanCard/LoanCard";
import LoadingSkeleton from "../../../components/Loading/LoadingSkeleton";

const FeaturedLoan = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: loans = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["loan"],
    queryFn: async () => {
      const res = await axiosSecure.get("/featured-loans");
      return res.data;
    },
  });
  if (error) {
    return (
      <div className="text-center text-red-500 py-10">Failed to load loans</div>
    );
  }
  return (
    <div className="bg-base-200 py-16 px-4 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-gray-600 text-4xl font-bold mb-4">
          Available Loans
        </h1>
        <p className="text-lg text-gray-600">
          Explore our most popular loan options designed for you
        </p>
      </div>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(6)
            .fill()
            .map((_, i) => (
              <LoadingSkeleton key={i} />
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loans.map((loan) => (
            <LoanCard key={loan._id} loan={loan}></LoanCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedLoan;
