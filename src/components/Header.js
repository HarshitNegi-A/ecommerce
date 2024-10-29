import { Container, Nav, Navbar } from "react-bootstrap";
import CartContext from "../store/cart-context";
import { useContext } from "react";
import classes from "./Header.module.css"
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";

const Header=(props)=>{

    const cartctnx=useContext(CartContext);
    console.log(cartctnx)

    
    return <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
            <Nav className="me-auto">
            <NavLink  className={classes.nav} to="/" >HOME</NavLink>
            <NavLink  className={classes.nav} to="/store">STORE</NavLink>
            <NavLink  className={classes.nav}  to="/about"  >ABOUT</NavLink>
            <NavLink  className={classes.nav}  to="/login"  >LOGIN</NavLink>
            <NavLink  className={classes.nav}  to="/contact"  >Contact Us</NavLink>
            
            </Nav>
            <CartButton onClick={props.onClick}/>
        </Container>
    </Navbar>
}
export default Header;