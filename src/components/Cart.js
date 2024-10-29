import { useContext } from "react";
import classes from "./Cart.module.css"
import CartItems from "./CartItems";
import CartContext from "../store/cart-context";


const Cart=(props)=>{
    const cartcntx=useContext(CartContext)
    const totalAmount = cartcntx.items.reduce((total, item) => {
        return total + (item.price * item.quantity); 
      }, 0);
    return <div className={classes.main}>
       <button onClick={props.onClose} className={classes.xButton}>X</button>
       <div className={classes.cart}>Cart</div>
       <div className={classes.title}>
        <span>Item</span>
        <span>Price</span>
        <span>Quantity</span>
       </div>
       <hr/>
       <CartItems />
       <div className={classes.total}>Total ${totalAmount}</div>
    </div>
}

export default Cart;