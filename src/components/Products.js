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
    
    },
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

    

const Product=(props)=>{
    const products=(
        <div className={classes.main}>
            <h2>Main</h2>
        <ul className={classes.list}>
            {productsArr.map((product)=>(
                <li><div className={classes.title}>{product.title}</div><br/>  <div><img alt="photo" src={product.imageUrl}></img></div><br/> <div className={classes.foot}>${product.price} <button>Add To Cart</button></div>
                </li>
                
            ))}
        </ul>
        <button onClick={props.onClick}>See the cart</button>
        </div>
    )
    return <React.Fragment>
        {products}
    </React.Fragment>

}
export default Product;