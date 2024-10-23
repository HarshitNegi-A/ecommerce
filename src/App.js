import Header from "./components/Header";
import React, { useState } from "react";
import Title from "./components/Title";
import Product from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart";



function App() {

  const [isCartShown,setIsCartShown]=useState(false)

  const handleOnClick=()=>{
    setIsCartShown(true)
  }
  const handleOnClose=()=>{
    setIsCartShown(false)
  }


  return ( <React.Fragment>
    {isCartShown && <Cart onClose={handleOnClose}/>}
  <Header onClick={handleOnClick}/>
  <Title/>
  <Product onClick={handleOnClick}/>
  <Footer />
  
  </React.Fragment>
  
      
    
    
  );
}

export default App;
