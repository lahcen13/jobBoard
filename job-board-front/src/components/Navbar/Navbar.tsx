import React from 'react';
import './Navbar.css';
import Navv from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const Navbar = () => (
  <div className="Navbar">
    <Navv bg="primary" variant="dark">
      <Container>
        <Navv.Brand href="#home">Navbar</Navv.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navv>
  </div>

);

export default Navbar;
