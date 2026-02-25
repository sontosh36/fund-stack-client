import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { users, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="bg-base-300 min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-spinner loading-xl text-indigo-600"></span>
          <p className="text-md text-gray-500 animate-pulse">
            Loading
          </p>
        </div>
      </div>
    );
  }
  if (users) {
    return children;
  }
  return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
