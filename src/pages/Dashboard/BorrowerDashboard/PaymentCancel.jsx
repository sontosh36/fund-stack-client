import React from "react";
import { Link } from "react-router";
import { FaTimesCircle, FaArrowLeft, FaHome } from "react-icons/fa";

const PaymentCancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-red-50 via-white to-rose-100 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-all duration-300">
      <div className="w-full max-w-2xl">
        <div className="bg-gray-100 dark:bg-gray-900/90 backdrop-blur-lg border border-red-100 dark:border-gray-800 rounded-3xl shadow-2xl p-6 md:p-8">
          <div className="text-center">
            {/* Cancel Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-red-100 dark:bg-red-900/20 p-5 md:p-6 rounded-full shadow-md">
                <FaTimesCircle className="text-5xl sm:text-6xl text-red-600" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
              Payment Cancelled
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-lg max-w-lg mx-auto mb-8">
              Your payment process has been cancelled.
              <br />
              No money has been charged from your account.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/dashboard/my-loans"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <FaArrowLeft />
                Try Again
              </Link>

              <Link
                to="/"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                <FaHome />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;
