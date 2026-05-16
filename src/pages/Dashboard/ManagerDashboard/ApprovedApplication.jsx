import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEye } from "react-icons/fa";

const ApprovedApplication = () => {
  const axiosSecure = useAxiosSecure();
  const { data: approvedApplication = [] } = useQuery({
    queryKey: ["approved"],
    queryFn: async () => {
      const res = await axiosSecure.get("/approved-loan");
      return res.data;
    },
  });
  return (
    <div className="w-full px-2 py-2">
      <div className="hidden lg:block overflow-x-auto rounded-xl shadow">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Application ID</th>
              <th>Borrower Name</th>
              <th>Borrower Email</th>
              <th>Amount</th>
              <th>Approved Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {approvedApplication.map((approve, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{approve._id}</td>
                <td>{approve.fullName}</td>
                <td>{approve.borrowerEmail}</td>
                <td>{approve.loanAmount}</td>
                <td>{new Date(approve.approvedAt).toLocaleString()}</td>
                <td>
                  <button className="btn btn-sm bg-purple-400">
                    <FaEye size={20} className="text-cyan-200" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* mobile view */}
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {approvedApplication.map((approve) => (
          <div
            key={approve._id}
            className="bg-base-200 shadow-md rounded-xl p-4"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex flex-col">
                <label className="label">Borrower Name</label>
                <h2 className="font-medium text-sm">{approve.fullName}</h2>
              </div>
              <div className="flex flex-col">
                <label className="label">Amount</label>
                <span className="text-md text-gray-700 dark:text-white font-semibold">
                  ${approve.loanAmount}
                </span>
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <div>
                <label className="label">Borrower Email</label>
                <p className="text-sm">{approve.borrowerEmail}</p>
              </div>
              <div className="flex flex-col">
                <label className="label">Date</label>
                <p className="text-sm">
                  {new Date(approve.approvedAt).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <button className="btn btn-sm bg-purple-400">
                <FaEye size={20} className="text-cyan-200" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovedApplication;
