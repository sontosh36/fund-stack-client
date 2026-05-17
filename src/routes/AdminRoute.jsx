import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import { FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router";

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();
  if (loading || roleLoading) {
    return (
      <div className="bg-base-300 min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-spinner loading-xl text-indigo-600"></span>
          <p className="text-md text-gray-500 animate-pulse">Loading</p>
        </div>
      </div>
    );
  }
  if (role !== "admin") {
    return (
      <div className="bg-base-300 min-h-screen py-15 justify-center">
        <div className="bg-pink-100 max-w-sm mx-auto p-4 rounded-xl flex flex-col items-center space-y-5">
          <span>
            <FaTimesCircle size={50} className="text-black" />
          </span>
          <p className="text-xl text-black animate-pulse">
            You are Forbidden to access the page
          </p>
          <div className="flex justify-center gap-6">
            <Link to={'/'} className="btn btn-primary">Go to Home</Link>
            <Link to={'/dashboard'} className="btn bg-green-500 text-black">Go to Dashboard</Link>
          </div>
        </div>
      </div>
    );
  }
  return children;
};

export default AdminRoute;
