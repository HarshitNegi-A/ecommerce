import { Container, Nav, Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import classes from "./CommonHeader.module.css"

const CommonHeader=()=>{

    
    
    return <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
            <Nav className="me-auto">
            <NavLink style={({isActive})=>({
                textDecoration:isActive?'underline':undefined
            })} className={classes.nav} to="/">HOME</NavLink>
            <NavLink style={({isActive})=>({
                textDecoration:isActive?'underline':undefined
            })} className={classes.nav} to="/store">STORE</NavLink>
            <NavLink style={({isActive})=>({
                textDecoration:isActive?'underline':undefined
            })} className={classes.nav}  to="/about" end >ABOUT</NavLink>
            <NavLink style={({isActive})=>({
                textDecoration:isActive?'underline':undefined
            })} className={classes.nav}  to="/contact"  >Contact Us</NavLink>
            </Nav>
        </Container>
    </Navbar>
}
export default CommonHeader;