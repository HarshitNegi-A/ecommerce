import classes from "./Cart.module.css"
import CartItems from "./CartItems";


const Cart=(props)=>{
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
    </div>
}

export default Cart;