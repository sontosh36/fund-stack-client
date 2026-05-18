import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { IoCloseSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import useAuth from "./../../hooks/useAuth";
import Swal from "sweetalert2";
import useRole from './../../hooks/useRole';

const LoanDetails = () => {
  const { id } = useParams();
  const [loan, setLoan] = useState(null);
  const [open, setOpen] = useState(false);
  const { users } = useAuth();
  const {role} = useRole();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/loan/${id}`).then((res) => {
      setLoan(res.data);
      setLoading(false);
    });
  }, [id, axiosSecure]);

  if (loading) {
    return (
      <div className="bg-base-300 min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-spinner loading-xl text-indigo-600"></span>
          <p className="text-md text-gray-500 animate-pulse">Loading</p>
        </div>
      </div>
    );
  }
  const {
    image,
    title,
    category,
    description,
    maxLoanLimit,
    interestRate,
    emiPlans,
  } = loan;

  const handleLoanApply = async (data) => {
    if (role === 'admin' || role === 'manager') {
      Swal.fire({
        icon: 'error',
        title: 'Not allowed',
        text: 'Admin or manager cannot apply for loan'
      })
      return
    }
    try {
      Swal.fire({
        title: "Submit Application?",
        text: "Your application won't revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed)
          // send loan application to the database
          axiosSecure.post("/loanApplication", data).then((res) => {
            if (res.data?.insertedId) {
              Swal.fire({
                title: "Done",
                text: "Your Application submitted.",
                icon: "success",
              });
              navigate("/dashboard/my-loans");
              setOpen(false);
            }
          });
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-gray-300 dark:bg-slate-700 py-12 px-4">
      <div className="max-w-7xl mx-auto bg-base-400 shadow-xl rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-10 p-5 md:p-8">
          {/* Image Section */}
          <div className="relative">
            <img
              src={image}
              alt={title}
              className="rounded-xl object-fill w-full h-80 md:h-125"
            />
            <span className="absolute top-3 left-4 inline-block bg-indigo-500 text-white text-sm font-medium px-3 py-1 rounded-full">
              {category}
            </span>
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl text-center md:text-left font-bold mb-4">
                {title}
              </h2>

              <p className=" text-center md:text-left mb-6 leading-relaxed">
                {description}
              </p>

              {/* Loan Info */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between border-b dark:border-gray-500 pb-2">
                  <span className="font-medium">Max Loan Amount</span>
                  <span className="font-semibold">${maxLoanLimit}</span>
                </div>

                <div className="flex justify-between border-b dark:border-gray-500 pb-2">
                  <span className="font-medium">Interest Rate</span>
                  <span className="font-semibold">{interestRate}%</span>
                </div>
              </div>

              {/* EMI Plans Section */}
              {emiPlans && emiPlans.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Available EMI Plans
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {emiPlans.map((plan, index) => (
                      <div
                        key={index}
                        className="border dark:border-gray-500 rounded-xl p-4 text-center hover:shadow-md transition duration-300 bg-base-400"
                      >
                        <h4 className="text-lg font-bold text-blue-600 mb-2">
                          {plan.month} Months
                        </h4>
                        <p className=" text-sm mb-1">
                          Interest: {plan.interest}%
                        </p>
                        <p className=" font-semibold text-lg">
                          EMI: ${plan.monthlyEmi.toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setOpen(true)}
              className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white font-semibold py-3 rounded-lg shadow-md cursor-pointer"
            >
              Apply for Loan
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed flex items-center justify-center z-30 p-3 inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md max-h-[90vh] rounded-xl overflow-y-auto shadow-xl border border-gray-200 dark:border-white/10 bg-white  dark:bg-slate-900">
            <div className="p-2 text-white relative bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700">
              <button
                onClick={() => setOpen(false)}
                className="absolute right-2 top-3 p-2 cursor-pointer"
              >
                <IoCloseSharp size={25} />
              </button>
              <h2 className="text-xl font-bold">Apply for {title}</h2>
              <p className="text-md font-semibold text-cyan-100 mt-1">
                Fill the form with correct information
              </p>
            </div>

            <form
              onSubmit={handleSubmit(handleLoanApply)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2"
            >
              {/* Full name */}
              <div className="sm:col-span-2">
                <input
                  type="text"
                  {...register("fullName", { required: true })}
                  className="input bg-gray-100 dark:bg-gray-700 dark:text-white w-full outline-0"
                  placeholder="Enter Full Name"
                />
              </div>
              {/* borrower email */}
              <div>
                <input
                  type="email"
                  {...register("borrowerEmail")}
                  defaultValue={users?.email}
                  className="input bg-gray-100 dark:bg-gray-700 dark:text-white w-full"
                  readOnly
                />
              </div>
              {/* interest rate */}
              <div>
                <input
                  type="number"
                  {...register("interestRate")}
                  defaultValue={interestRate}
                  className="input bg-gray-100 dark:bg-gray-700 dark:text-white w-full"
                  readOnly
                />
              </div>
              {/* loan title */}
              <div>
                <input
                  type="text"
                  {...register("loanTitle")}
                  defaultValue={title}
                  className="input bg-gray-100 dark:bg-gray-700 dark:text-white w-full"
                  readOnly
                />
              </div>
              {/* NID or passport*/}
              <div>
                <input
                  type="number"
                  {...register("nidOrPassport", { required: true })}
                  className="input bg-gray-100 dark:bg-gray-700 dark:text-white w-full outline-0"
                  placeholder="NID or Passport Number"
                />
              </div>
              {/* Contact Number */}
              <div>
                <input
                  type="number"
                  {...register("contactNumber", { required: true })}
                  className="input bg-gray-100 dark:bg-gray-700 dark:text-white w-full outline-0"
                  placeholder="Contact Number"
                />
              </div>
              {/* Income source */}
              <div>
                <input
                  type="text"
                  {...register("incomeSource", { required: true })}
                  className="input bg-gray-100 dark:bg-gray-700 dark:text-white w-full outline-0"
                  placeholder="Income source"
                />
              </div>
              {/* monthly Income */}
              <div>
                <input
                  type="number"
                  {...register("monthlyIncome", { required: true })}
                  className="input bg-gray-100 dark:bg-gray-700 dark:text-white w-full outline-0"
                  placeholder="Monthly Income"
                />
              </div>
              {/* loan Amount */}
              <div className="sm:col-span-2">
                <input
                  type="number"
                  {...register("loanAmount", { required: true })}
                  className="input bg-gray-100 dark:bg-gray-700 dark:text-white w-full outline-0"
                  placeholder="Loan Amount"
                />
              </div>
              {/* Reason */}
              <div className="sm:col-span-2">
                <textarea
                  {...register("reasonForLoan", { required: true })}
                  rows={2}
                  className="bg-gray-100 dark:bg-gray-700 dark:text-white w-full resize-none outline-0 border dark:border-gray-400 p-2 rounded-sm"
                  placeholder="Why do you need this loan?"
                />
              </div>
              {/* Address */}
              <div className="sm:col-span-2">
                <input
                  type="text"
                  {...register("address", { required: true })}
                  className="input bg-gray-100 dark:bg-gray-700 dark:text-white w-full outline-0"
                  placeholder="Your Address"
                />
              </div>
              {/* extra note */}
              <div className="sm:col-span-2">
                <textarea
                  {...register("note")}
                  rows={2}
                  className="bg-gray-100 dark:bg-gray-700 dark:text-white w-full resize-none outline-0 p-2 border dark:border-gray-400 rounded-sm"
                  placeholder="Optional Note"
                />
              </div>

              {/* button */}
              <div className="sm:col-span-2 flex justify-end gap-3">
                <button
                  type="button"
                  className="btn dark:bg-pink-500"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn bg-purple-600 text-white">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanDetails;
