import React, { useState } from "react";
import Logo from "../components/logo/Logo";
import { Link, useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaUserPlus } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const axios = useAxiosSecure();
  const { registerUser, signInGoogle, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    setLoading(true);
    registerUser(data.email, data.password)
      .then((res) => {
        const userInfo = {
          email: res.user.email,
          name: data.name,
          photoURL: data.photoURL,
        };
        axios.post("/users", userInfo).then((res) => {
          if (res.data?.insertedId) {
            toast.success("Registration Successfully");
          }
        });
        // update user profile to firebase
        const userProfile = {
          displayName: data.name,
          photoURL: data.photoURL,
        };
        updateUserProfile(userProfile)
          .then(() => {
            navigate(location.state || "/");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        toast.error("Registration Unsuccessfully");
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleRegisterGoogle = () => {
    signInGoogle()
      .then((res) => {
        const userInfo = {
          email: res.user.email,
          name: res.user.displayName,
          photoURL: res.user.photoURL,
        };
        axios
          .post("/users", userInfo)
          .then((res) => {
            if (res.data?.insertedId) {
              toast.success("Registration successfully");
              navigate(location.state || "/");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center px-4 py-10">
        <div className="absolute top-0 left-0 h-72 w-72 bg-pink-600/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 bg-indigo-600/10 blur-3xl"></div>
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="hidden lg:block">
          <h1 className="text-5xl font-bold text-slate-800 dark:text-white leading-tight">
            Create Your
            <span className="text-blue-600"> FundStack </span>
            Account
          </h1>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
            Join thousands of borrowers and managers using FundStack to manage
            loan applications, approvals and repayments efficiently.
          </p>

          <div className="mt-8">
            <img
              src="https://i.ibb.co.com/HpnH4HV4/sign-Up.png"
              alt="Register"
              className="w-full max-w-md rounded-xl"
            />
          </div>
        </div>
        {/* Form Card */}
        <div className="w-full">
          <div className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-lg border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-2">
                Create Account
              </h2>

              <p className="text-slate-500 dark:text-slate-400 mt-2">
                Start managing loans smarter today.
              </p>
              <p className="text-center mt-2 text-sm text-slate-500 dark:text-slate-400">
                Already have an account?
                <Link
                  to="/login"
                  state={location.state}
                  className="ml-1 text-blue-600 hover:underline font-semibold"
                >
                  Log In
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">
              {/* name field */}
              <div>
                <label className="block mb-2 font-medium text-slate-700 dark:text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Jon Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-blue-600 outline-none"
                  {...register("name", {
                    required: true,
                    maxLength: 20,
                  })}
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-500">Name is required</p>
                )}
                {errors.name?.type === "maxLength" && (
                  <p className="text-red-500 text-sm mt-1">
                    Please provide a less then 20 letters.
                  </p>
                )}
              </div>
              {/* email field */}
              <label className="block mb-2 font-medium text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-blue-600 outline-none"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">Email is required</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-red-500 text-sm mt-1">Enter a valid email</p>
              )}
              {/* photoURL field */}
              <label className="block mb-2 font-medium text-slate-700 dark:text-slate-300">
                PhotoURL
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-blue-600 outline-none"
                placeholder="photoURL"
                {...register("photoURL", { required: true })}
              />
              {errors.photoURL?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">
                  photoURL is required
                </p>
              )}
              {/* role dropdown option */}
              <label className="block mb-2 font-medium text-slate-700 dark:text-slate-300">
                Role
              </label>
              <select
                defaultValue=""
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-blue-600 outline-none"
                {...register("role", { required: true })}
              >
                <option value="" disabled>
                  Select Your Role
                </option>
                <option value="borrower">Borrower</option>
                <option value="manager">Manager</option>
              </select>

              {errors.role?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">Role is required</p>
              )}

              {/* password field */}
              <label className="block mb-2 font-medium text-slate-700 dark:text-slate-300">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/,
                  })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-slate-500"
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">
                  password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm mt-1">
                  {" "}
                  Password must have be 6 character or longer
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-green-500 text-sm mt-1">
                  {" "}
                  Password must be one uppercase, one lowercase, one numbers and
                  One sepcial characters.
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Creating Account...
                  </>
                ) : (
                  <>
                    <FaUserPlus />
                    Registration
                  </>
                )}
              </button>
            </form>
            <div className="divider text-slate-400">OR</div>
            <button
              onClick={handleRegisterGoogle}
              className="w-full h-12 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center gap-3 font-medium"
            >
              <FcGoogle size={26} />
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
