import React from "react";
import classes from "./Products.module.css";
import CartContext from "../store/cart-context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoginContext from "../store/token-context";


const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 0,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 0,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 0,
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",

    quantity: 0,
  },
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 0,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 0,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 0,
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",

    quantity: 0,
  },
];

const Product = (props) => {
  const cartcntx = useContext(CartContext);
  const authCtx=useContext(LoginContext)
  let sanitizedEmail;
    if(authCtx.email){
        sanitizedEmail = authCtx.email.replace(/[@.]/g, '');
    }

  const handleOnClick = (item) => {
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

axios.post(
  `https://crudcrud.com/api/fe8b026682e7453ab629d3a4e35ca16b/items`, 
  { ...item, email: sanitizedEmail }, 
  { headers: { 'Content-Type': 'application/json' } }
)
.then((res) => {
  console.log('Item saved:', res);
})
.catch((err) => {
  console.error('Error posting data:', err);
});
    
  };

  const products = (
    <div className={classes.main}>
      <h2>Main</h2>
      <ul className={classes.list}>
        {productsArr.map((product) => (
          <li>
            <div className={classes.title}>{product.title}</div>
            <br />{" "}
            <div>
              <Link to={`/store/${product.title}`}>
                <img alt="photo" src={product.imageUrl}></img>
              </Link>
            </div>
            <br />{" "}
            <div className={classes.foot}>
              ${product.price}{" "}
              <button onClick={() => handleOnClick(product)}>
                Add To Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={props.onClick}>See the cart</button>
    </div>
  );
  return <React.Fragment>{products}</React.Fragment>;
};
export default Product;
