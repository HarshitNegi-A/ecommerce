import React from "react";
import classes from "./Products.module.css"

const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]

    

const Product=()=>{
    const products=(
        <ul>
            {productsArr.map((product)=>(
                <li>{product.title}<br/>  <img alt="photo" src={product.imageUrl}/><br/> {product.price}</li>
                
            ))}
        </ul>
    )
    return <React.Fragment>
        {products}
    </React.Fragment>

}
export default Product;