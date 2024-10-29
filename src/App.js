import React, { useContext } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import ProductDetail from "./components/ProductDetail";
import LoginForm from "./components/LoginForm";
import LoginContext, { LoginContextProvider } from "./store/token-context";



function App() {
  const authCtx=useContext(LoginContext);
  console.log(authCtx)

  const router=createBrowserRouter([
    {path:'/store',
      element: authCtx.isLoggedIn===true ? <HomePage/> : <Navigate to="../login"/>
    },

    {path:'/store/:name',element: <ProductDetail />},
    {path:'/about', element: <AboutUs/>},
    {path:'/', element: <Home/>},
    {path:'/contact', element: <ContactUs/>},
    {path:'/login', element: <LoginForm/>},
  ])

  

  return ( <RouterProvider router={router} />
  );
}

export default App;