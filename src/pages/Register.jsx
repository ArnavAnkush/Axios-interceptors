import React from "react";
import { RiUserLine, RiMailLine, RiLockPasswordLine } from "@remixicon/react";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  let navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
          <p className="text-gray-500 mt-2">Register to get started</p>
        </div>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-black">
              <RiUserLine className="text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 outline-none text-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-black">
              <RiMailLine className="text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 outline-none text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-black">
              <RiLockPasswordLine className="text-gray-400" size={20} />
              <input
                type="password"
                placeholder="Create a password"
                className="w-full p-3 outline-none text-sm"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-black">
              <RiLockPasswordLine className="text-gray-400" size={20} />
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full p-3 outline-none text-sm"
              />
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <p
            onClick={() => navigate("/")}
            className="text-black font-semibold hover:underline cursor-pointer"
          >
            Login
          </p>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
