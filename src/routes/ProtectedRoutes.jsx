import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router";
import { Auth } from "../contexts/AuthContext";

const ProtectedRoutes = () => {
  const { loggedInUser } = useContext(Auth);
  if (!loggedInUser) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedRoutes;
