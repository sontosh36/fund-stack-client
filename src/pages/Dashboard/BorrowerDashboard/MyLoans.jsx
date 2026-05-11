import React, { useRef, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const MyLoans = () => {
  const [selectedLoan, setSelectedLoan] = useState(null);
  const modalRef = useRef(null);
  const { users } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: loans = [], refetch } = useQuery({
    queryKey: ["myLoans", users?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(
        `/loanApplication?email=${users?.email}`,
      );
      return result.data;
    },
  });
  const viewLoan = (loan) => {
    setSelectedLoan(loan);
    modalRef.current.showModal();
  };
  const handleLoanCancelation = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure.delete(`/loanApplication/${id}`).then(() => {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your Loan Application has been deleted.",
            icon: "success",
          });
        });
    });
  };
  return (
    <div className="w-full px-2 sm:px-2 md:px-2 py-2">
      <div className="hidden lg:block overflow-x-auto rounded-xl shadow">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Loan ID</th>
              <th>Amount</th>
              <th>Application Fee</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{loan.loanTitle}</td>
                <td>{loan._id}</td>
                <td>{loan.loanAmount}</td>
                <td>
                  {loan.applicationFeeStatus === "paid" ? (
                    <span className="bg-green-500 text-black px-2 py-2 rounded-2xl">
                      Paid
                    </span>
                  ) : (
                    <span className="bg-amber-500 text-white px-2 py-2 rounded-2xl">
                      Unpaid
                    </span>
                  )}
                </td>
                <td>
                  {loan.status === "approved" && (
                    <span className="bg-green-500 text-black px-2 py-2 rounded-2xl">
                      Approved
                    </span>
                  )}
                  {loan.status === "pending" && (
                    <span className="bg-yellow-500 text-black px-2 py-2 rounded-2xl">
                      Pending
                    </span>
                  )}
                  {loan.status === "rejected" && (
                    <span className="bg-red-300 text-black px-2 py-2 rounded-2xl">
                      Rejected
                    </span>
                  )}
                </td>
                <td className="space-x-2">
                  {loan.applicationFeeStatus === "unpaid" && (
                    <button className="btn btn-sm btn-primary">Pay</button>
                  )}
                  {loan.status === "pending" && (
                    <button
                      onClick={() => handleLoanCancelation(loan._id)}
                      className="btn btn-sm bg-pink-500 rounded-md"
                    >
                      Cancel
                    </button>
                  )}
                  {loan.status === "rejected" && (
                    <button
                      onClick={() => handleLoanCancelation(loan._id)}
                      className="btn btn-sm bg-pink-500 rounded-md"
                    >
                      Cancel
                    </button>
                  )}
                  <button
                    onClick={() => viewLoan(loan)}
                    className="btn btn-sm btn-outline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {loans.map((loan) => (
          <div key={loan._id} className="bg-base-200 shadow-md rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-lg">{loan.loanTitle}</h2>

              <span className="text-md text-gray-700 dark:text-white font-semibold">
                ${loan.loanAmount}
              </span>
            </div>

            <div className="space-y-2 text-sm">
              <p>
                <span className="">Loan ID: {loan._id}</span>
              </p>

              <div className="flex justify-between">
                <p>
                  <span className="font-semibold">Application Fee:</span>{" "}
                  {loan.applicationFeeStatus === "paid" ? (
                    <span className="bg-green-500 text-black px-2 py-1 rounded-full text-xs">
                      Paid
                    </span>
                  ) : (
                    <span className="bg-amber-500 text-white px-2 py-1 rounded-full text-xs">
                      Unpaid
                    </span>
                  )}
                </p>

                <p>
                  <span className="font-semibold">Status:</span>{" "}
                  {loan.status === "approved" && (
                    <span className="bg-green-500 text-black px-2 py-1 rounded-full text-xs">
                      Approved
                    </span>
                  )}
                  {loan.status === "pending" && (
                    <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs">
                      Pending
                    </span>
                  )}
                  {loan.status === "rejected" && (
                    <span className="bg-red-400 text-black px-2 py-1 rounded-full text-xs">
                      Rejected
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className="flex justify-between flex-wrap gap-2 mt-4">
              {loan.applicationFeeStatus === "unpaid" && (
                <button className="btn btn-md btn-primary">Pay</button>
              )}

              {loan.status === "pending" && (
                <button
                  onClick={() => handleLoanCancelation(loan._id)}
                  className="btn btn-md bg-pink-500"
                >
                  Cancel
                </button>
              )}
              {loan.status === "rejected" && (
                <button
                  onClick={() => handleLoanCancelation(loan._id)}
                  className="btn btn-md bg-pink-500"
                >
                  Cancel
                </button>
              )}

              <button
                onClick={() => viewLoan(loan)}
                className="btn btn-md btn-outline"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box w-11/12 max-w-3xl bg-base-100 text-base-content">
          {/* Header */}
          <h3 className="font-bold text-2xl text-center mb-6">Loan Details</h3>

          {selectedLoan && (
            <div className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-base-200">
                  <p className="text-xs opacity-70">Full Name</p>
                  <p className="font-semibold">{selectedLoan.fullName}</p>
                </div>

                <div className="p-3 rounded-lg bg-base-200">
                  <p className="text-xs opacity-70">Email</p>
                  <p className="font-semibold break-all">
                    {selectedLoan.borrowerEmail}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-base-200">
                  <p className="text-xs opacity-70">Contact</p>
                  <p className="font-semibold">{selectedLoan.contactNumber}</p>
                </div>

                <div className="p-3 rounded-lg bg-base-200">
                  <p className="text-xs opacity-70">Address</p>
                  <p className="font-semibold">{selectedLoan.address}</p>
                </div>
              </div>

              {/* Loan Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-base-200">
                  <p className="text-xs opacity-70">Loan Title</p>
                  <p className="font-semibold">{selectedLoan.loanTitle}</p>
                </div>

                <div className="p-3 rounded-lg bg-base-200">
                  <p className="text-xs opacity-70">Loan Amount</p>
                  <p className="font-semibold">${selectedLoan.loanAmount}</p>
                </div>

                <div className="p-3 rounded-lg bg-base-200">
                  <p className="text-xs opacity-70">Interest Rate</p>
                  <p className="font-semibold">{selectedLoan.interestRate}%</p>
                </div>

                <div className="p-3 rounded-lg bg-base-200">
                  <p className="text-xs opacity-70">Monthly Income</p>
                  <p className="font-semibold">${selectedLoan.monthlyIncome}</p>
                </div>
              </div>

              {/* Extra Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Fee Status */}
                <div className="p-3 rounded-lg bg-base-200">
                  <p className="text-xs opacity-70">Fee Status</p>
                  <span
                    className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold ${
                      selectedLoan.applicationFeeStatus === "paid"
                        ? "bg-green-500 text-black"
                        : "bg-amber-400 text-black"
                    }`}
                  >
                    {selectedLoan.applicationFeeStatus}
                  </span>
                </div>

                {/* Reason */}
                <div className="p-3 rounded-lg bg-base-200">
                  <p className="text-xs opacity-70">Reason for Loan</p>
                  <p className="font-semibold">{selectedLoan.reasonForLoan}</p>
                </div>
              </div>

              {/* Status + Date */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-t border-base-300 pt-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    selectedLoan.status === "approved"
                      ? "bg-green-500 text-black"
                      : selectedLoan.status === "pending"
                        ? "bg-yellow-400 text-black"
                        : "bg-red-400 text-black"
                  }`}
                >
                  {selectedLoan.status}
                </span>

                <span className="text-xs opacity-60">
                  Submitted:{" "}
                  { new Date(selectedLoan.submitedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="modal-action mt-6">
            <form method="dialog">
              <button className="btn btn-sm btn-outline">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyLoans;
