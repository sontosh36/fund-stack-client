import React from "react";
import Logo from "../components/logo/Logo";
import { Link, useNavigate } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { CiLogin } from "react-icons/ci";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const navigate = useNavigate();
  const axios = useAxiosSecure();
  const { registerUser, signInGoogle } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    registerUser(data.email, data.password)
      .then((res) => {
        const userInfo = {
          email: res.user.email,
          name: data.name,
          photoURL: data.photoURL,
          role: 'borrower',
        };
        axios.post("/users", userInfo)
          .then((res) => {
            if (res.data.insertedId) {
              toast.success("Registration Successfully");
              navigate("/");
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        toast.error("Registration Unsuccessfully");
        console.log(error);
      });
  };
  const handleRegisterGoogle = () => {
    signInGoogle()
      .then((res) => {
        const userInfo = {
          email: res.user.email,
          name: res.user.displayName,
          photoURL: res.user.photoURL,
          role: "borrower",
        };
        axios.post("/users", userInfo)
          .then((res) => {
            if (res.data.insertedId) {
              toast.success("Registration successfully");
              navigate("/");
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
    <div className="py-15 dark:bg-slate-800">
      <div className="mx-auto card bg-gray-200 dark:bg-slate-800 w-full max-w-sm shrink-0 shadow-2xl mt-4">
        <div className="card-body">
          <div className="flex flex-col items-center justify-center">
            <h2>{<Logo></Logo>}</h2>
            <p className="mt-2 text-sm text-gray-400">
              Already have an account? Please{" "}
              <Link className="text-indigo-500 hover:underline " to={"/login"}>
                Login
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset">
              {/* name field */}
              <label className="label">Name</label>
              <input
                type="text"
                placeholder="Jon Doe"
                className="input outline-0 w-full"
                {...register("name", {
                  required: true,
                  maxLength: 20,
                })}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500">Name is required</p>
              )}
              {errors.name?.type === "maxLength" && (
                <p className="text-red-500">
                  Please provide a less then 20 letters.
                </p>
              )}
              {/* email field */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                className="input outline-0 w-full"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is required</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-red-500">Enter a valid email</p>
              )}
              {/* photoURL field */}
              <label className="label">PhotoURL</label>
              <input
                type="text"
                className="input outline-0 w-full "
                placeholder="photoURL"
                {...register("photoURL", {required: true})}
              />
              {errors.photoURL?.type === "required" && (
                <p className="text-red-500">photoURL is required</p>
              )}
              {/* role dropdown option */}
              <label className="label">Role</label>
              <select
                defaultValue=""
                className="select select-bordered w-full"
                {...register("role", { required: true })}
              >
                <option value="" disabled>
                  Select Your Role
                </option>
                <option value="borrower">Borrower</option>
                <option value="manager">Manager</option>
              </select>

              {errors.role?.type === "required" && (
                <p className="text-red-500">Role is required</p>
              )}

              {/* password field */}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/,
                })}
                className="input outline-0 w-full"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  {" "}
                  Password must have be 6 character or longer
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-green-500">
                  {" "}
                  Password must be one uppercase, one lowercase, one numbers and
                  One sepcial characters.
                </p>
              )}
              <button type="submit" className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-semibold mt-4">
                Register <CiLogin size={20} className="text-white" />
              </button>
            </fieldset>
          </form>
          <div className="divider">OR</div>
          <button
            onClick={handleRegisterGoogle}
            className="mt-2 btn bg-white text-black border-[#e5e5e5]"
          >
            <FcGoogle size={26} />
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
