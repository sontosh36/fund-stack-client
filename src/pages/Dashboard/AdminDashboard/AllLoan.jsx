import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FiX } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AllLoan = () => {
  const axiosSecure = useAxiosSecure();
  const [openLoanModal, setOpenLoanModal] = useState(false);
  const [loanId, setLoanId] = useState("");
  const { register, handleSubmit } = useForm();
  const { data: allLoan = [], refetch } = useQuery({
    queryKey: ["allLoan"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-loans/admin");
      return res.data;
    },
  });
  const handleOpenModal = (id) => {
    setLoanId(id);
    setOpenLoanModal(true);
  };
  const handleLoanUpdate = (data) => {
    axiosSecure.patch(`/allLoan/${loanId}`, data).then(() => {
      refetch();
      toast.success("Successful Updated!");
      setOpenLoanModal(false);
    });
  };
  const handleShowOnHome = async (loanId, currentCheckd) => {
    try {
      await axiosSecure.patch(`/show-on-home/loan/${loanId}`, {
        showOnHome: !currentCheckd,
      });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  const handleLoanDelete = (id) => {
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
        axiosSecure.delete(`/allLoans/${id}`).then(() => {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Loan has been deleted.",
            icon: "success",
          });
        });
    });
  };
  console.log(allLoan);
  return (
    <div className="w-full max-w-auto px-2 py-2">
      <div className="hidden lg:block overflow-x-auto rounded-xl shadow">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Interest</th>
              <th>Category</th>
              <th>Created Date</th>
              <th>Show on Home</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allLoan.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <div>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <h2 className="text-sm">{item.title}</h2>
                </td>
                <td>
                  <span className="text-sm">{item.interestRate}%</span>
                </td>
                <td>
                  <span className="text-sm">{item.category}</span>
                </td>
                <td>
                  <span className="text-sm">{new Date(item.createdAt).toLocaleString()}</span>
                </td>
                <td>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={item.showOnHome}
                    onChange={() => handleShowOnHome(item._id, item.showOnHome)}
                  />
                </td>

                <td className="space-x-2">
                  <button
                    onClick={() => handleOpenModal(item._id)}
                    className="btn btn-sm btn-primary"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleLoanDelete(item._id)}
                    className="btn btn-sm btn-warning"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
                placeholder="Title"
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

              <div className="flex items-center justify-end gap-2 mt-2 col-span-2">
                <button
                  onClick={() => setOpenLoanModal(false)}
                  className="btn btn-md bg-amber-400 text-black px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-md bg-purple-500 text-white px-4 py-2 rounded-md"
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

export default AllLoan;
