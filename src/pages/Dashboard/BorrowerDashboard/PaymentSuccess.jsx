import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaCheckCircle, FaArrowRight, FaShieldAlt } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  const sessionId = searchParams.get("session_id");
  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          if (res.data.paymentInfo?.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Payment received Successful",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-100 px-4">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-3xl p-8 md:p-10 border border-green-100">
        <div className="text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 dark:bg-green-900/30 p-5 md:p-6 rounded-full shadow-md">
              <FaCheckCircle className="text-5xl sm:text-6xl text-green-600" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
            Payment Successful
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg max-w-lg mx-auto mb-8">
            Your payment has been successfully processed and securely verified.
            Thank you for choosing our platform.
          </p>

         

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              to="/dashboard/my-loans"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Go to Dashboard
              <FaArrowRight />
            </Link>

            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
