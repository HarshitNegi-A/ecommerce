import { Button } from "react-bootstrap";
import CartContext from "../store/cart-context";
import { useContext } from "react";
import axios from "axios";
import LoginContext from "../store/token-context";

const CartButton=(props)=>{
    const cartctnx=useContext(CartContext);
    const authCtx=useContext(LoginContext);
    let sanitizedEmail;
    if(authCtx.email){
        sanitizedEmail = authCtx.email.replace(/[@.]/g, '');
    }
   
    console.log(sanitizedEmail)
    const getCartItems=()=>{
        axios.get(
            `https://crudcrud.com/api/fe8b026682e7453ab629d3a4e35ca16b/items`
          )
          .then((res) => {
            console.log(res.data)
            const userItems = res.data.filter(item => item.email === sanitizedEmail);
            console.log('Items for this user:', userItems);
            for(let i of userItems){
                cartctnx.addItem(i)
            } 
          })
          .catch((err) => {
            console.error('Error retrieving data:', err);
          });
    }
    const handleClick=()=>{
        props.onClick();
        getCartItems();
    }
    return <Button onClick={handleClick} >Cart {cartctnx.count}</Button>
}

export default CartButton;