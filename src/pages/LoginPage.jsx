import React, { useContext } from "react";
import { RiMailLine, RiLockPasswordLine } from "@remixicon/react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { registedUsers, loggedInUser, setLoggedInUser } = useContext(Auth);
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm();
  let formSubmit = (data) => {
    let user = registedUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });
    if (!user) {
      toast.error("User not found or Invalid credentails");
      reset();
      return;
    }
    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("user loggedIn");
    navigate("/main");
    reset();
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back👋</h1>
          <p className="text-gray-500 mt-2">Login to your account</p>
        </div>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-black">
              <RiMailLine className="text-gray-400" size={20} />
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 outline-none text-sm"
              />
            </div>
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-black">
              <RiLockPasswordLine className="text-gray-400" size={20} />
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum six characters are required",
                  },
                })}
                type="password"
                placeholder="Create a password"
                className="w-full p-3 outline-none text-sm"
              />
            </div>
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-black font-semibold hover:underline cursor-pointer"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
