
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";



function App() {

  const router=createBrowserRouter([
    {path:'/store',element: <HomePage />},
    {path:'/about', element: <AboutUs/>},
    {path:'/', element: <Home/>}
  ])


  return ( <RouterProvider router={router} />
  );
}

export default App;
