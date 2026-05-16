import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { FiX } from "react-icons/fi";

const ManageLoans = () => {
  const { users } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [openLoanModal, setOpenLoanModal] = useState(false);
  const { register, handleSubmit } = useForm();
  const [manageLoanId, setManageLoanId] = useState(null);
  const { data: managerLoan = [], refetch } = useQuery({
    queryKey: ["loanManager", users?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-loan/${users?.email}/manageLoan`);
      return res.data;
    },
  });
  const openManageModal = (loan) => {
    setManageLoanId(loan);
    setOpenLoanModal(true);
  };
  const handleLoanUpdate = (data) => {
    axiosSecure.patch(`/manage-loan/${manageLoanId}`, data)
    .then(() => {
      refetch();
      toast.success("Successful Updated!");
      setOpenLoanModal(false);
    });
  };
  const handleLoanTrush = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert Loan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure.delete(`/manageLoan/${id}`)
        .then(() => {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Loan has been deleted.",
            icon: "success",
          });
        });
    });
  };
  return (
    <div className="w-full max-w-auto px-2 py-2">
      <div className="hidden lg:block overflow-x-auto rounded-xl shadow">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Interest Rate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {managerLoan.map((loan, i) => (
              <tr key={i}>
                <td>
                  <div>
                    <div className="avatar">
                      <div className="mask mask-squircle h-10 w-10">
                        <img src={loan.image} alt={loan.title} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <h2 className="text-sm">{loan.title}</h2>
                </td>
                <td>
                  <span className="text-sm">{loan.category}</span>
                </td>
                <td>
                  <span className="text-sm">{loan.interestRate}%</span>
                </td>
                <td>
                  <button
                    onClick={() => openManageModal(loan)}
                    className="btn btn-sm mr-4 bg-green-500 text-black"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleLoanTrush(loan._id)}
                    className="btn btn-sm bg-red-500 text-black"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* mobile view screen */}
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {managerLoan.map((loan, i) => (
          <div key={i} className="bg-base-200 shadow-md rounded-xl p-2">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-medium text-sm">{loan.title}</h2>
              <span className="text-sm text-gray-700 dark:text-white">
                {loan.interestRate}%
              </span>
            </div>
            <div className="flex justify-between gap-3 text-sm">
              <p className="">{loan.category}</p>
              <p className="text-xs">
                {new Date(loan.createdAt).toLocaleString()}
              </p>
            </div>

            <div className="flex justify-between flex-wrap gap-2 mt-2">
              <button
                onClick={() => openManageModal(loan)}
                className="btn btn-sm mr-4 bg-green-500 text-black"
              >
                Update
              </button>
              <button
                onClick={() => handleLoanTrush(loan._id)}
                className="btn btn-sm bg-red-500 text-black"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* open modal */}
      {openLoanModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center px-2">
          <div className="relative z-10 bg-indigo-600 text-white rounded-xl shadow-md p-4 w-full max-w-lg">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="text-md font-semibold">Update Loan</h5>
              </div>
              <button
                onClick={() => setOpenLoanModal(false)}
                className="rounded-md "
              >
                <FiX />
              </button>
            </div>
            <form
              onSubmit={handleSubmit(handleLoanUpdate)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3"
            >
              <input
                {...register("title", { required: true })}
                className="rounded-md bg-black/20 p-2 text-white text-md outline-0 w-full col-span-2"
                placeholder="Loan Title"
              />
              <input
                {...register("category", { required: true })}
                className="rounded-md p-2 bg-black/20 text-white text-md outline-0 w-full"
                placeholder="Category"
              />
              <input
                {...register("maxLoanLimit", { required: true })}
                className="rounded-md p-2 bg-black/20 text-white text-md outline-0 w-full"
                placeholder="Max Loan Limit"
              />
              <input
                {...register("interestRate", { required: true })}
                className="rounded-md p-2 bg-black/20 text-white text-md outline-0 w-full"
                placeholder="Interest Rate"
              />
              <input
                {...register("image", { required: true })}
                className="rounded-md p-2 bg-black/20 text-white text-md outline-0 w-full col-span-2"
                placeholder="ImageURL"
              />
              <textarea
                {...register("description", { required: true })}
                rows={3}
                className="resize-none rounded-md p-2 bg-black/20 text-white text-md outline-0 w-full col-span-2"
                placeholder="description"
              ></textarea>

              <div className="flex items-center justify-end gap-4 mt-2 col-span-2">
                <button
                  type="button"
                  onClick={() => setOpenLoanModal(false)}
                  className="btn btn-md bg-red-400 text-black px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-md bg-green-500 text-black px-4 py-2 rounded-md"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageLoans;
