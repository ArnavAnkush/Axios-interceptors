import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/Register";

import MainLayout from "../layouts/MainLayout";
import ProtectedRoutes from "./ProtectedRoutes";

import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import UsersPage from "../pages/UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/main",
    element: <ProtectedRoutes />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "users",
            element: <UsersPage />,
          },
          {
            path: "products",
            element: <ProductsPage />,
          },
        ],
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
