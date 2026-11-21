import React from "react";
import { RiUserLine, RiMailLine, RiLockPasswordLine } from "@remixicon/react";
import { data, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  let {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm();
  let formSubmit = (data) => {
    console.log(data);
    reset();
  };
  let navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
          <p className="text-gray-500 mt-2">Register to get started</p>
        </div>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-black">
              <RiUserLine className="text-gray-400" size={20} />
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 outline-none text-sm"
              />
            </div>
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>

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

          {/* Register Button */}
          <button
            disabled={!isValid}
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="text-black font-semibold hover:underline cursor-pointer"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
