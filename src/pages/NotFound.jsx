import React from "react";
import { Link } from "react-router";
import { FaExclamationTriangle, FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
      
      <div className="max-w-xl w-full bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-3xl shadow-2xl p-8 md:p-10 text-center">

        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 dark:bg-red-950 p-5 rounded-full">
            <FaExclamationTriangle className="text-5xl text-red-600" />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-7xl sm:text-8xl font-black text-red-600 mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 mx-auto">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        {/* Buttons */}
          <Link
            to="/"
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
          >
            Go Home
          </Link>
      </div>
    </div>
  );
};

export default NotFound;
