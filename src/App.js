import Header from "./components/Header";
import React from "react";
import Title from "./components/Title";
import Product from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart";



function App() {
  return ( <React.Fragment>
    <Cart />
  <Header />
  <Title/>
  <Product />
  <Footer />
  
  </React.Fragment>
  
      
    
    
  );
}

export default App;
