import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/navbar.css'

export default function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="">
      <Container className='py-0 d-flex'>
        <Navbar.Brand href="#home" className='py-0 rounded'>
          <img src = "./brand-logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle className = "py-0"aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
       
          <Nav className='ms-auto'>
            <Nav.Link  href="#deets">About</Nav.Link>
            <Nav.Link  href="#deets">FAQ</Nav.Link>
            <Nav.Link  eventKey={2} href="#memes">
              Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

