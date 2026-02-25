import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Logo from "../components/logo/Logo";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { CiLogin } from "react-icons/ci";
import Swal from "sweetalert2";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const axios = useAxiosSecure();
  const { signInUser, signInGoogle } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
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
      });
  };
  const handleLoginGoogle = () => {
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
            if (res.data.insertedId) {
              toast.success("Login successfully");
            }
            navigate(location?.state || "/");
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
    <div className="py-13">
      <div className="mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-4">
        <div className="card-body">
          <div className="flex flex-col items-center justify-center">
            <h2>{<Logo></Logo>}</h2>
            <p className="mt-2 text-sm text-gray-400">
              Don't have an account? Please{" "}
              <Link className="text-blue-500 hover:underline" to="/register">
                Register
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">
              {/* email field */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input outline-0 w-full"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is required</p>
              )}
              {/* password field */}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
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
              <div>
                <button className="link link-hover">Forgot password?</button>
              </div>
              <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-semibold mt-4">
                Login <CiLogin size={20} className="text-white" />
              </button>
            </fieldset>
          </form>
          <div className="divider">OR</div>
          <button
            onClick={handleLoginGoogle}
            className="mt-2 btn bg-white text-black border-[#e5e5e5]"
          >
            <FcGoogle size={26} />
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
