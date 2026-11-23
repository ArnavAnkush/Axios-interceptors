import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen px-8 py-4 flex grid grid-cols-[1fr_7fr]">
      <Navbar />

      <div className="h-full px-6">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
