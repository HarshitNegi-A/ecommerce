import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Header=(props)=>{
    return <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
            <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/">STORE</Nav.Link>
            <Nav.Link href="/">ABOUT</Nav.Link>
            </Nav>
            <Button onClick={props.onClick}>Cart 0</Button>
        </Container>
    </Navbar>
}
export default Header;