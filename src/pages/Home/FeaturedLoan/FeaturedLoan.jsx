import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router";

const FeaturedLoan = () => {
  const axiosSecure = useAxiosSecure();
  const { data: loans = [], isLoading } = useQuery({
    queryKey: ["loan"],
    queryFn: async () => {
      const res = await axiosSecure.get("/featured-loans");
      return res.data;
    },
  });
  if (isLoading) {
    return <span>Loading</span>;
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loans.map((l) => (
          <div key={l._id} value={l} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={l.image}
                alt={l.title}
                className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                {l.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <h2 className="text-xl font-semibold text-gray-800 text-center">
                {l.title}
              </h2>
              <p className="text-gray-500 text-sm">
                {l.description}
              </p>

              {/* Loan Info */}
              <div className="flex justify-between items-center text-sm">
                <div>
                  <p className="text-gray-400">Interest</p>
                  <p className="font-semibold text-indigo-600">{l.interestRate}</p>
                </div>

                <div>
                  <p className="text-gray-400">Max Amount</p>
                  <p className="font-semibold text-green-600">${l.maxLoanLimit}</p>
                </div>
              </div>

              {/* Button */}
              <Link
                to={`/loan/${l._id}`}
                className="block mt-4 text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition duration-300 font-medium"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedLoan;
