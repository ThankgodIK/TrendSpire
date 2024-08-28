// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import CartPage from "./pages/CartPage";
import BlogPost from "./pages/BlogPost";
import RegisterUser from "./pages/RegisterUser";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Unisex from "./pages/Unisex";
import Kids from "./pages/Kids";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Product",
    element: <Product />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/PlaceOrder",
    element: <PlaceOrder />,
  },
  {
    path: "/CartPage",
    element: <CartPage />,
  },
  {
    path: "/BlogPost",
    element: <BlogPost />,
  },
  {
    path: "/RegisterUser",
    element: <RegisterUser />,
  },
  {
    path: "/Women",
    element: <Women />,
  },
  {
    path: "/Men",
    element: <Men />,
  },
  {
    path: "/Unisex",
    element: <Unisex />,
  },
  {
    path: "/Kids",
    element: <Kids />,
  },
]);
export default router;
