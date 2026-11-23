import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="border-r border-gray-600 flex flex-col gap-10">
      <h1>Logo</h1>

      <div className="flex flex-col gap-6  ml-4">
        <NavLink to={"/main"}>Home</NavLink>
        <NavLink to={"/main/users"}>Users</NavLink>
        <NavLink to={"/main/products"}>Products</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
