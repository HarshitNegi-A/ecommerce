import { useState } from "react"
import CartContext from "./cart-context"

const CartProvider=(props)=>{

    const [items,setItems]=useState([])
    const [count,setCount]=useState(0)

    const handleAddCount=()=>{
        setCount(count+1)
    }

    const handleAddItem=(item)=>{
        setItems([...items,item])
    }

    const cartContext={
        items:items,
        count:count,
        addCount:handleAddCount,
        addItem:handleAddItem,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>


}

export default CartProvider;