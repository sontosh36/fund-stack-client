import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaCheckCircle, FaTimesCircle, FaEye } from "react-icons/fa";
import { toast } from "react-toastify";

const PendingApplication = () => {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const applicationModalRef = useRef(null);
  const axiosSecure = useAxiosSecure();
  const { data: pendingApplication = [], refetch } = useQuery({
    queryKey: ["pending"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/looking-pending-application`);
      return res.data;
    },
  });
  const handleViewApplication = (app) => {
    setSelectedApplication(app);
    applicationModalRef.current.showModal();
  };
  const handleApprovedApplication =(id)=>{
    axiosSecure.patch(`/pending-application/approved/${id}`)
    .then(()=>{
        toast.success('Application approved successful');
        refetch();
    })
  }
  const handleRejectedApplication =(id) =>{
    axiosSecure.patch(`/pending-application/rejected/${id}`)
    .then(()=>{
        toast.success('Application rejected successful');
        refetch();
    })
  }
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
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingApplication.map((p, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{p._id}</td>
                <td>{p.fullName}</td>
                <td>{p.borrowerEmail}</td>
                <td>{p.loanAmount}</td>
                <td>{new Date(p.submitedAt).toLocaleString()}</td>
                <td className="space-x-2">
                  <button onClick={()=> handleApprovedApplication(p._id)} className="btn btn-sm bg-green-400">
                    <FaCheckCircle size={20} className="text-white" />
                  </button>
                  <button onClick={()=> handleRejectedApplication(p._id)} className="btn btn-sm bg-red-400">
                    <FaTimesCircle size={20} className="text-black" />
                  </button>
                  <button
                    onClick={() => handleViewApplication(p)}
                    className="btn btn-sm bg-purple-400"
                  >
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
        {pendingApplication.map((p) => (
          <div key={p._id} className="bg-base-200 shadow-md rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="flex flex-col">
                <label className="label">Borrower Name</label>
                <h2 className="font-medium text-sm">{p.fullName}</h2>
              </div>
              <div className="flex flex-col">
                <label className="label">Amount</label>
                <span className="text-md text-gray-700 dark:text-white font-semibold">
                  ${p.loanAmount}
                </span>
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <div>
                <label className="label">Borrower Email</label>
                <p className="text-sm">{p.borrowerEmail}</p>
              </div>
              <div className="flex flex-col">
                <label className="label">Date</label>
                <p className="text-sm">
                  {new Date(p.submitedAt).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-2 mt-4">
              <button onClick={()=> handleApprovedApplication(p._id)} className="btn btn-sm bg-green-400">
                <FaCheckCircle size={20} className="text-white" />
              </button>
              <button onClick={()=> handleRejectedApplication(p._id)} className="btn btn-sm bg-red-400">
                <FaTimesCircle size={20} className="text-black" />
              </button>
              <button onClick={() => handleViewApplication(p)} className="btn btn-sm bg-purple-400">
                <FaEye size={20} className="text-cyan-200" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* modal */}
      <dialog ref={applicationModalRef} className="modal">
        <div className="modal-box w-10/12 max-w-xl max-h-[90vh] bg-base-100">
          {/* Header */}
          <h3 className="font-bold text-2xl text-center mb-3">
            Application Details
          </h3>

          {selectedApplication && (
            <div className="space-y-2">
              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-2 rounded-lg bg-base-200">
                  <p className="text-sm">Borrower Name</p>
                  <p className="text-xs opacity-70">
                    {selectedApplication.fullName}
                  </p>
                </div>

                <div className="p-2 rounded-lg bg-base-200">
                  <p className="text-sm">Borrower Email</p>
                  <p className="text-xs opacity-70">
                    {selectedApplication.borrowerEmail}
                  </p>
                </div>

                <div className="p-2 rounded-lg bg-base-200">
                  <p className="text-sm">Borrower Contact</p>
                  <p className="text-xs opacity-70">
                    {selectedApplication.contactNumber}
                  </p>
                </div>

                <div className="p-2 rounded-lg bg-base-200">
                  <p className="text-sm">Borrower Address</p>
                  <p className="text-xs opacity-70">
                    {selectedApplication.address}
                  </p>
                </div>
              </div>

              {/* Loan Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-2 rounded-lg bg-base-200">
                  <p className="text-sm">Loan Title</p>
                  <p className="text-xs opacity-70">
                    {selectedApplication.loanTitle}
                  </p>
                </div>

                <div className="p-2 rounded-lg bg-base-200">
                  <p className="text-sm">Loan Amount</p>
                  <p className="text-xs opacity-70">
                    ${selectedApplication.loanAmount}
                  </p>
                </div>

                <div className="p-2 rounded-lg bg-base-200">
                  <p className="text-sm">Interest Rate</p>
                  <p className="text-xs opacity-70">
                    {selectedApplication.interestRate}%
                  </p>
                </div>

                <div className="p-2 rounded-lg bg-base-200">
                  <p className="text-sm">Monthly Income</p>
                  <p className="text-xs opacity-70">
                    ${selectedApplication.monthlyIncome}
                  </p>
                </div>
              </div>

              {/* Extra Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Fee Status */}
                <div className="p-2 rounded-lg bg-base-200">
                  <p className="text-sm">Fee Status</p>
                  <span
                    className={`inline-block mt-1 px-3 py-1 rounded-full text-xs opacity-70 font-semibold ${
                      selectedApplication.applicationFeeStatus === "paid"
                        ? "bg-green-500 text-black"
                        : "bg-amber-400 text-black"
                    }`}
                  >
                    {selectedApplication.applicationFeeStatus}
                  </span>
                </div>

                {/* Reason */}
                <div className="p-2 rounded-lg bg-base-200">
                  <p className="text-sm">Reason for Loan</p>
                  <p className="text-xs opacity-70">
                    {selectedApplication.reasonForLoan}
                  </p>
                </div>
              </div>

              {/* Status + Date */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-t border-base-300 pt-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    selectedApplication.status === "approved"
                      ? "bg-green-500 text-black"
                      : selectedApplication.status === "pending"
                        ? "bg-yellow-400 text-black"
                        : "bg-red-400 text-black"
                  }`}
                >
                  {selectedApplication.status}
                </span>

                <span className="text-xs opacity-60">
                  Submitted:{" "}
                  {new Date(
                    selectedApplication.submitedAt,
                  ).toLocaleDateString()}
                </span>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="modal-action mt-3">
            <form method="dialog">
              <button className="btn btn-sm btn-outline">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PendingApplication;
