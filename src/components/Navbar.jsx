import React, { useContext } from "react";
import { Navigate, NavLink, useLocation } from "react-router";
import { Auth } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { setLoggedInUser } = useContext(Auth);
  return (
    <div className="h-full border-r border-gray-600 flex flex-col justify-between p-3">
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-semibold">Ecomm</h1>

        <div className="flex flex-col gap-6  ml-4">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-500 border-b border-gray-500"
                : "text-black border-b border-gray-500"
            }
            to={"/main"}
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-500 border-b border-gray-500"
                : "text-black border-b border-gray-500"
            }
            to={"/main/users"}
          >
            Users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-500 border-b border-gray-500"
                : "text-black border-b border-gray-500"
            }
            to={"/main/products"}
          >
            Products
          </NavLink>
        </div>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("loggedInUser");
          toast.warn("User Logged Out");
          setLoggedInUser(null);
        }}
        className="py-3 bg-red-600 text-white rounded cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
