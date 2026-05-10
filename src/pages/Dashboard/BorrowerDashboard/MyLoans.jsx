import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const MyLoans = () => {
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
    <div>
      <div className="overflow-x-auto">
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
                    <span className="badge badge-success badge-sm">Paid</span>
                  ) : (
                    <span className="bg-amber-500 text-white px-2 py-2 rounded-2xl">
                      Unpaid
                    </span>
                  )}
                </td>
                <td>{loan.status}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => handleLoanCancelation(loan._id)}
                    className="btn"
                  >
                    Cancel
                  </button>
                  <button className="btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLoans;
