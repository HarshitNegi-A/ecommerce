import Header from "./Header";
import React, { useState } from "react";
import Title from "./Title";
import Product from "./Products";
import Footer from "./Footer";
import Cart from "./Cart";
import CartProvider from "../store/CartProvider";


const HomePage=()=>{
const [isCartShown,setIsCartShown]=useState(false)

  const handleOnClick=()=>{
    setIsCartShown(true)
  }
  const handleOnClose=()=>{
    setIsCartShown(false)
  }


  return ( <CartProvider>
    {isCartShown && <Cart onClose={handleOnClose}/>}
  <Header onClick={handleOnClick}/>
  <Title/>
  <Product onClick={handleOnClick}/>
  <Footer />
  </CartProvider> 
  );
}

export default HomePage;