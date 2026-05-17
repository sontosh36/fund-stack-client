import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

const ManagerDashboardHome = () => {
  const axiosSecure = useAxiosSecure();
  const { users } = useAuth();
  const { data: pendingApplication = [] } = useQuery({
    queryKey: ["pending"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/looking-pending-application`);
      return res.data;
    },
  });
  const { data: approvedApplication = [] } = useQuery({
    queryKey: ["approved"],
    queryFn: async () => {
      const res = await axiosSecure.get("/approved-loan");
      return res.data;
    },
  });
  const { data: managerLoan = [] } = useQuery({
    queryKey: ["loanManager", users?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-loan/${users?.email}/manageLoan`);
      return res.data;
    },
  });
  const { data: rejectedApplication = [] } = useQuery({
    queryKey: ["reject", users?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/rejected-application`);
      return res.data;
    },
  });
  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-6">
        <div className="flex flex-col items-center justify-center border rounded-md shadow-sm">
          <h2 className="text-md">Pending Application</h2>
          <p className="text-2xl font-bold mt-2">{pendingApplication.length}</p>
        </div>
        <div className="flex flex-col items-center justify-center border p-2 rounded-md shadow-sm">
          <h2 className="text-md">Approved Application</h2>
          <p className="text-2xl font-bold mt-2">
            {approvedApplication.length}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center border p-2 rounded-md shadow-sm">
          <h2 className="text-md">Total Add Loan</h2>
          <p className="text-2xl font-bold mt-2">{managerLoan.length}</p>
        </div>
        <div className="flex flex-col items-center justify-center border p-2 rounded-md shadow-sm">
          <h2 className="text-md">Rejected Application</h2>
          <p className="text-2xl font-bold mt-2">
            {rejectedApplication.length}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ManagerDashboardHome;
