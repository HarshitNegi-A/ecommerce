import { Button } from "react-bootstrap";
import CartContext from "../store/cart-context";
import { useContext } from "react";

const CartButton=(props)=>{
    const cartctnx=useContext(CartContext);
    return <Button onClick={props.onClick}>Cart {cartctnx.count}</Button>
}

export default CartButton;