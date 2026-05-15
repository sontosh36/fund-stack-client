import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddLoan = () => {
  const { users } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleAddLoan = (data) => {
    data.email = users?.email;
    axiosSecure.post("/add-loan", data).then((res) => {
      if (res.data?.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Loan has been Added.",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    });
  };
  return (
    <div className="min-h-screen px-2 py-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-4 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
            Add New Loan
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Fill up the form to create a new loan package
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-3 md:p-6 border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit(handleAddLoan)} className="space-y-6">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Loan Title */}
              <div className="md:col-span-2">
                <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Loan Title
                </label>

                <input
                  type="text"
                  placeholder="Enter loan title"
                  {...register("title", { required: true })}
                  className="w-full px-2 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-1 focus:ring-indigo-500 outline-none"
                />
                {errors.title?.type === "required" && (
                  <p className="text-red-500">Loan Title is Required.</p>
                )}
              </div>

              {/* Loan Amount */}
              <div>
                <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Max Loan Amount
                </label>

                <input
                  type="number"
                  placeholder="Enter max loan amount"
                  {...register("maxLoanLimit", { required: true })}
                  className="w-full px-2 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-1 focus:ring-indigo-500 outline-none"
                />
                {errors.maxLoanLimit?.type === "required" && (
                  <p className="text-red-500">Max Loan Amount is Required.</p>
                )}
              </div>
              {/* Interest Rate */}
              <div>
                <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Interest Rate
                </label>

                <input
                  type="number"
                  placeholder="Enter interest Rate"
                  {...register("interestRate", { required: true })}
                  className="w-full px-2 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-1 focus:ring-indigo-500 outline-none"
                />
                {errors.interestRate?.type === "required" && (
                  <p className="text-red-500">Interest Rate is Required.</p>
                )}
              </div>

              {/* Category */}
              <div>
                <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Category
                </label>
                <input
                  {...register("category", { required: true })}
                  className="w-full px-2 py-2 text-sm rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-1 focus:ring-indigo-500 outline-none"
                  placeholder="Category"
                />
                {errors.category?.type === "required" && (
                  <p className="text-red-500">Category is Required.</p>
                )}
              </div>

              {/* Image URL */}
              <div>
                <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Image URL
                </label>

                <input
                  type="text"
                  placeholder="Enter image URL"
                  {...register("image", { required: true })}
                  className="w-full px-2 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-1 focus:ring-indigo-500 outline-none"
                />
                {errors.image?.type === "required" && (
                  <p className="text-red-500">ImageURL is Required.</p>
                )}
              </div>
              {/* Description */}
              <div className="md:col-span-2">
                <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Description
                </label>

                <textarea
                  rows="3"
                  placeholder="Write loan description..."
                  {...register("description", { required: true })}
                  className="w-full px-2 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-1 focus:ring-indigo-500 outline-none resize-none"
                ></textarea>
                {errors.description?.type === "required" && (
                  <p className="text-red-500">Description is Required.</p>
                )}
              </div>

              {/* Checkbox */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("showOnHome")}
                    className="w-5 h-5 accent-indigo-600"
                  />

                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                    Show on homepage
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-col items-center">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 btn"
              >
                Add Loan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLoan;
