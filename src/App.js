
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";



function App() {

  const router=createBrowserRouter([
    {path:'/',element: <HomePage />},
    {path:'/about', element: <AboutUs/>}
  ])


  return ( <RouterProvider router={router} />
  );
}

export default App;
