import React from "react";
import classes from "./Products.module.css"
import CartContext from "../store/cart-context";
import { useContext } from "react";

const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    quantity:0,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    quantity:0,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    quantity:0,
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    quantity:0,
    
    },
    {
    
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        quantity:0,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        quantity:0,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        quantity:0,
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        quantity:0,
        
        }
    
    
    ]

    

const Product=(props)=>{

    const cartcntx=useContext(CartContext);

    const handleOnClick=(item)=>{
    let count = 0;
    for (let i of cartcntx.items) {
      if (i.title === item.title) {
        count++;
        break;
      }
    }
    if (count === 0) {
      item.quantity = 1;
      cartcntx.addItem(item);
    } else {
      item.quantity++;
    }
    cartcntx.addCount();
    }

    const products=(
        <div className={classes.main}>
            <h2>Main</h2>
        <ul className={classes.list}>
            {productsArr.map((product)=>(
                <li><div className={classes.title}>{product.title}</div><br/>  <div><img alt="photo" src={product.imageUrl}></img></div><br/> <div className={classes.foot}>${product.price} <button onClick={()=>handleOnClick(product)}>Add To Cart</button></div>
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