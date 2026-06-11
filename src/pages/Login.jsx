import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Logo from "../components/logo/Logo";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { CiLogin } from "react-icons/ci";
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser, signInGoogle } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    setLoading(true);
    signInUser(data.email, data.password)
      .then(() => {
        toast.success("Login Successfully");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        let errorMessage = "Something went wrong!";
        if (error.code === "auth/user-not-found") {
          errorMessage = "No user found with this email";
        } else if (error.code === "auth/wrong-password") {
          errorMessage = "Incorrect Password";
        } else if (error.code === "auth/invalid-credential") {
          errorMessage = "Email or Password is Incorrect!";
        }

        toast.error(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleLoginGoogle = () => {
    signInGoogle()
      .then(() => {
        toast.success("Login successfully");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4 py-10 transition-colors duration-300">
      <div className="absolute top-0 left-0 h-72 w-72 bg-pink-600/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-indigo-600/10 blur-3xl"></div>
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="px-8 pt-4 pb-4 text-center">
            <h1 className="mt-5 text-3xl font-bold text-slate-800 dark:text-white">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Sign in to continue managing your account
            </p>

            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Don't have an account?
              <Link
                to="/register"
                state={location.state}
                className="ml-1 font-medium text-blue-600 hover:text-blue-700"
              >
                Register
              </Link>
            </p>
          </div>

          {/* Form */}
          <div className="px-8 pb-8">
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email Address
                </label>

                <div className="relative">
                  <FiMail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Enter your email"
                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">Email is required</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  Password
                </label>

                <div className="relative">
                  <FiLock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                    })}
                    placeholder="Enter your password"
                    className="w-full h-12 pl-11 pr-12 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
                  >
                    {showPassword ? (
                      <FiEyeOff size={20} />
                    ) : (
                      <FiEye size={20} />
                    )}
                  </button>
                </div>

                {errors.password?.type === "required" && (
                  <p className="mt-1 text-sm text-red-500">
                    Password is required
                  </p>
                )}

                {errors.password?.type === "minLength" && (
                  <p className="mt-1 text-sm text-red-500">
                    Password must be at least 6 characters
                  </p>
                )}
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 shadow-lg shadow-blue-600/20"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Logining...
                  </>
                ) : (
                  "Log In"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300 dark:border-slate-600"></div>
              </div>

              <div className="relative flex justify-center text-sm">
                <span className="bg-white dark:bg-slate-800 px-3 text-slate-500">
                  OR CONTINUE WITH
                </span>
              </div>
            </div>

            {/* Google Login */}
            <button
              onClick={handleLoginGoogle}
              className="w-full h-12 flex items-center justify-center gap-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 transition"
            >
              <FcGoogle size={24} />
              <span className="font-medium text-slate-700 dark:text-white">
                Sign in with Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
