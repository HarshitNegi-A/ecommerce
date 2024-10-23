import Header from "./components/Header";
import React, { useState } from "react";
import Title from "./components/Title";
import Product from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import CartProvider from "./store/CartProvider";



function App() {

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

export default App;
