import { Container, Nav, Navbar } from "react-bootstrap";
import { useContext } from "react";
import classes from "./Header.module.css"
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";
import LoginContext from "../store/token-context";

const Header=(props)=>{

    const authCtx=useContext(LoginContext)
    const handleOnClick=()=>{
        authCtx.logout();
    }

    
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
            {authCtx.isLoggedIn && <NavLink  className={classes.nav} onClick={handleOnClick}>LOGOUT</NavLink>}
        </Container>
    </Navbar>
}
export default Header;