import React from "react";
import useRole from "../../../hooks/useRole";
import AdminDashboardHome from "./AdminDashboardHome";
import ManagerDashboardHome from "./ManagerDashboardHome";
import BorrowerDashboardHome from "./BorrowerDashboardHome";

const DashboardHome = () => {
  const { role, roleLoading } = useRole();
  if (roleLoading) {
    return (
      <div className="bg-base-300 min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-spinner loading-xl text-indigo-600"></span>
          <p className="text-md text-gray-500 animate-pulse">Loading</p>
        </div>
      </div>
    );
  }
  if (role === 'admin') {
    return <AdminDashboardHome></AdminDashboardHome>
  }else if(role === 'manager'){
    return <ManagerDashboardHome></ManagerDashboardHome>
  }else{
    return <BorrowerDashboardHome></BorrowerDashboardHome>
  }
};

export default DashboardHome;
