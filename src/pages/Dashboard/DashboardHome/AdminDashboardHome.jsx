import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AdminDashboardHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: all = [] } = useQuery({
    queryKey: ["all-loans"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-loans/admin");
      return res.data;
    },
  });
  const { data: allApplication = [] } = useQuery({
    queryKey: ["application"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-loan-application");
      return res.data;
    },
  });
  const { data: user = [] } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/borrowers");
      return res.data;
    },
  });
  const data = [
    { name: "January", loans: 3 },
    { name: "February", loans: 3 },
    { name: "March", loans: 2 },
  ];
  return (
    <div className="w-full p-2 md:px-4">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-6">
        <div className="flex flex-col items-center justify-center border p-2 rounded-md shadow-sm">
          <h2 className="text-lg">Total Loans</h2>
          <p className="text-4xl font-bold mt-2">{all.length}</p>
        </div>
        <div className="flex flex-col items-center justify-center border p-2 rounded-md shadow-sm">
          <h2 className="text-lg">Total Application</h2>
          <p className="text-4xl font-bold mt-2">{allApplication.length}</p>
        </div>
        <div className="flex flex-col items-center justify-center border p-2 rounded-md shadow-sm">
          <h2 className="text-lg">Total Borrower</h2>
          <p className="text-4xl font-bold mt-2">{user.length}</p>
        </div>
      </section>

      <section>
        <div className="lg:col-span-2 text-white/30 dark:bg-gray-800 p-4 rounded-lg border dark:border-gray-700">
          <h3 className="mb-6 font-bold">Loans per Month</h3>
          <div style={{ width: "100%", height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="loans" />
              </BarChart>
              <Legend></Legend>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboardHome;
