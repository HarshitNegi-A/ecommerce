import { Container, Nav, Navbar } from "react-bootstrap";
import classes from "./CommonHeader.module.css"
import { NavLink } from "react-router-dom";

const CommonHeader=()=>{

    
    
    return <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
            <Nav className="me-auto">
            <NavLink  className={classes.nav} to="/">HOME</NavLink>
            <NavLink  className={classes.nav} to="/store">STORE</NavLink>
            <NavLink  className={classes.nav}  to="/about"  >ABOUT</NavLink>
            <NavLink  className={classes.nav}  to="/contact"  >Contact Us</NavLink>
            </Nav>
        </Container>
    </Navbar>
}
export default CommonHeader;