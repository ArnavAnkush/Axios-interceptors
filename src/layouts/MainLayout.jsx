import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="h-screen px-8 py-4 grid grid-cols-[1fr_7fr] gap-6 overflow-hidden">
      <Navbar />

      <div className="h-full px-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
