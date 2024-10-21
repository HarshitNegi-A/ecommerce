import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Header=()=>{
    return <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/">STORE</Nav.Link>
            <Nav.Link href="/">ABOUT</Nav.Link>
            </Nav>
            <Button >Cart 0</Button>
        </Container>
    </Navbar>
}
export default Header;