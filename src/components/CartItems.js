import React from "react"
import classes from "./CartItems.module.css"
import { useContext } from "react"
import CartContext from "../store/cart-context"

// const cartElements = [

//     {
    
//     title: 'Colors',
    
//     price: 100,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
//     quantity: 2,
    
//     },
    
//     {
    
//     title: 'Black Colors',
    
//     price: 50,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
//     quantity: 3,
    
//     },
    
//     {
    
//     title: 'Yellow Colors',
    
//     price: 70,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
//     quantity: 1,
    
//     }
    
//     ]

    const CartItems=()=>{

        const cartcntx=useContext(CartContext)


        const cartItems = (
           
            <ul className={classes.list}>
                {cartcntx.items.map((element)=>(
                    <li className={classes.items}>
                        <div className={classes.title}>
                        <img className={classes.logo} alt="logo" src={element.imageUrl}></img>
                        <div>{element.title}</div></div>
                        <div className={classes.price}>${Number(element.price)*Number(element.quantity)}</div>
                        <div className={classes.quantity}>{element.quantity} <button>Remove</button></div>
                        <hr/>
                    </li>
                    
                ))}
            </ul>
            
        )

        return <React.Fragment>
            {cartItems}
        </React.Fragment>

    }

    export default CartItems;