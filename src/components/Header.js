import { Button, Container, Nav, Navbar } from "react-bootstrap";
import CartContext from "../store/cart-context";
import { useContext } from "react";

const Header=(props)=>{

    const cartctnx=useContext(CartContext);
    console.log(cartctnx)

    
    return <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
            <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/">STORE</Nav.Link>
            <Nav.Link href="/">ABOUT</Nav.Link>
            </Nav>
            <Button onClick={props.onClick}>Cart {cartctnx.count}</Button>
        </Container>
    </Navbar>
}
export default Header;