import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen linear-gradient-to-br from-gray-800 via-black to-gray-500 text-white text-center">
      <h1 className="text-5xl font-extrabold mb-5">404</h1>
      <h3 className="text-3xl font-semibold mb-3">Oops! Page not found</h3>
      <p className="mb-8 leading-relaxed max-w-md">
        The page you are looking for might have been removed or Temporarily
        unavailable.
      </p>
      <button className="px-4 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg">
        <Link to={"/"}>Back to Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
