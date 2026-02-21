import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSkeleton from "../Loading/LoadingSkeleton";

const LoanDetails = () => {
  const { id } = useParams();
  const [loan, setLoan] = useState(null);
  const [loading, setLoading] = useState(true);

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/loan/${id}`).then((res) => {
      setLoan(res.data);
      setLoading(false);
    });
  }, [id, axiosSecure]);

  if (loading) {
    return <LoadingSkeleton></LoadingSkeleton>;
  }
  const {
    image,
    title,
    category,
    description,
    maxLoanLimit,
    interestRate,
    emiPlans,
  } = loan;
  return (
    <div className="bg-base-300 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto bg-base-400 shadow-xl rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-10 p-5 md:p-8">
          {/* Image Section */}
          <div className="relative">
            <img
              src={image}
              alt={title}
              className="rounded-xl object-fill w-full h-80 md:h-125"
            />
            <span className="absolute top-3 left-4 inline-block bg-indigo-500 text-white text-sm font-medium px-3 py-1 rounded-full">
              {category}
            </span>
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl text-center md:text-left  font-bold mb-4">
                {title}
              </h2>

              <p className=" text-center md:text-left mb-6 leading-relaxed">
                {description}
              </p>

              {/* Loan Info */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Max Loan Amount</span>
                  <span className="font-semibold">${maxLoanLimit}</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Interest Rate</span>
                  <span className="font-semibold">{interestRate}%</span>
                </div>
              </div>

              {/* EMI Plans Section */}
              {emiPlans && emiPlans.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Available EMI Plans
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {emiPlans.map((plan, index) => (
                      <div
                        key={index}
                        className="border rounded-xl p-4 text-center hover:shadow-md transition duration-300 bg-base-400"
                      >
                        <h4 className="text-lg font-bold text-blue-600 mb-2">
                          {plan.month} Months
                        </h4>
                        <p className=" text-sm mb-1">
                          Interest: {plan.interest}%
                        </p>
                        <p className=" font-semibold text-lg">
                          EMI: ${plan.monthlyEmi.toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link to={"/apply-loan"}>
              <button className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white font-semibold py-3 rounded-lg shadow-md cursor-pointer">
                Apply for Loan
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanDetails;
