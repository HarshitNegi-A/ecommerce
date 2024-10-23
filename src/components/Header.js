import { Container, Nav, Navbar } from "react-bootstrap";
import CartContext from "../store/cart-context";
import { useContext } from "react";
import {NavLink} from "react-router-dom";
import classes from "./Header.module.css"
import CartButton from "./CartButton";

const Header=(props)=>{

    const cartctnx=useContext(CartContext);
    console.log(cartctnx)

    
    return <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
            <Nav className="me-auto">
            <NavLink className={classes.nav} to="/">HOME</NavLink>
            <NavLink className={classes.nav} to="/store">STORE</NavLink>
            <NavLink style={({isActive})=>({
                textDecoration:isActive?'underline':undefined
            })} className={classes.nav}  to="/about" end >ABOUT</NavLink>
            </Nav>
            <CartButton onClick={props.onClick}/>
        </Container>
    </Navbar>
}
export default Header;