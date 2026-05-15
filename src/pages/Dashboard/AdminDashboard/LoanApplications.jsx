import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const LoanApplications = () => {
  const axiosSecure = useAxiosSecure();
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const applicationModalRef = useRef(null);
  const { data: allApplication = [] } = useQuery({
    queryKey: ["application"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-loan-application");
      console.log(res.data);
      return res.data;
    },
  });
  const handleViewDetails = (app) => {
    setSelectedApplication(app);
    applicationModalRef.current.showModal();
  };
  return (
    <div className="w-full px-2 py-2">
      <div className="hidden lg:block overflow-x-auto rounded-xl shadow">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Loan ID</th>
              <th>Borrower Name</th>
              <th>Borrower Email</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allApplication.map((app, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{app._id}</td>
                <td>{app.fullName}</td>
                <td>{app.borrowerEmail}</td>
                <td>
                  <p
                    className={`text-xs rounded-xl px-2 py-1 ${app.status === "pending" ? "bg-yellow-300 text-black" : app.status === "approved" ? "bg-green-200 text-black" : "bg-red-200 text-black"}`}
                  >
                    {app.status}
                  </p>
                </td>
                <td>{app.loanAmount}</td>
                <td>
                  <button
                    onClick={() => handleViewDetails(app)}
                    className="btn btn-sm btn-success"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* mobile view */}
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {allApplication.map((app) => (
          <div key={app._id} className="bg-base-200 shadow-md rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-medium text-sm">{app.loanTitle}</h2>
              <span className="text-md text-gray-700 dark:text-white font-semibold">
                ${app.loanAmount}
              </span>
            </div>
            <div className="flex justify-between gap-2 mt-4">
              <p>
                {" "}
                Status{" "}
                <span
                  className={`text-xs rounded-xl px-2 py-1 ${app.status === "pending" ? "bg-yellow-300 text-black" : app.status === "approved" ? "bg-green-200 text-black" : "bg-red-200 text-black"}`}
                >
                  {app.status}
                </span>
              </p>
              <button
                onClick={() => handleViewDetails(app._id)}
                className="btn btn-md btn-outline"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* modal  */}
      <dialog ref={applicationModalRef} className="modal">
        <div className="modal-box w-10/12 max-w-xl max-h-[90vh] bg-base-100">
          {/* Header */}
          <h3 className="font-bold text-2xl text-center mb-3">Application Details</h3>

          {selectedApplication && (
            <div className="space-y-2">
              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-2 rounded-lg bg-base-200">
                  <p className="text-xs opacity-70">Full Name</p>
                  <p className="font-semibold">{selectedApplication.fullName}</p>
                </div>

                <div className="p-2 rounded-lg bg-base-200">
                  <p className="text-xs opacity-70">Email</p>
                  <p className="font-semibold break-all">
                    {selectedApplication.borrowerEmail}
                  </p>
                </div>

                <div className="p-2 rounded-lg bg-base-200">
                  <p className="text-xs opacity-70">Contact</p>
                  <p className="font-semibold">{selectedApplication.contactNumber}</p>
                </div>

                <div className="p-2 rounded-lg bg-base-200">
                  <p className="text-xs opacity-70">Address</p>
                  <p className="font-semibold">{selectedApplication.address}</p>
                </div>
              </div>

              {/* Loan Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-2 rounded-lg bg-base-200">
                  <p className="text-xs opacity-70">Loan Title</p>
                  <p className="font-semibold">{selectedApplication.loanTitle}</p>
                </div>

                <div className="p-2 rounded-lg bg-base-200">
                  <p className="text-xs opacity-70">Loan Amount</p>
                  <p className="font-semibold">${selectedApplication.loanAmount}</p>
                </div>

                <div className="p-2 rounded-lg bg-base-200">
                  <p className="text-xs opacity-70">Interest Rate</p>
                  <p className="font-semibold">{selectedApplication.interestRate}%</p>
                </div>

                <div className="p-2 rounded-lg bg-base-200">
                  <p className="text-xs opacity-70">Monthly Income</p>
                  <p className="font-semibold">${selectedApplication.monthlyIncome}</p>
                </div>
              </div>

              {/* Extra Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Fee Status */}
                <div className="p-2 rounded-lg bg-base-200">
                  <p className="text-xs opacity-70">Fee Status</p>
                  <span
                    className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold ${
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
                  <p className="text-xs opacity-70">Reason for Loan</p>
                  <p className="font-semibold">{selectedApplication.reasonForLoan}</p>
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
                  {new Date(selectedApplication.submitedAt).toLocaleDateString()}
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

export default LoanApplications;
