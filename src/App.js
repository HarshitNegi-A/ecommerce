import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import ProductDetail from "./components/ProductDetail";



function App() {

  const router=createBrowserRouter([
    {path:'/store',element: <HomePage />},
    {path:'/store/:name',element: <ProductDetail />},
    {path:'/about', element: <AboutUs/>},
    {path:'/', element: <Home/>},
    {path:'/contact', element: <ContactUs/>},
  ])


  return ( <RouterProvider router={router} />
  );
}

export default App;