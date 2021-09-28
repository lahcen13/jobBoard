import React from 'react';
import './Navbar.css';
import Navv from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';
import { BellFill } from 'react-bootstrap-icons';
import Image from 'react-bootstrap/Image';

const Navbar = () => (
  <div className="Navbar">
    <Navv bg="primary" variant="dark" fixed="top" >

      <Container>
        <Navv.Brand href="#home">JobBoard</Navv.Brand>
        <Navv.Text>
          <BellFill size={25} color="white" className="logoCloche"> </BellFill>
          <Image src="https://picsum.photos/200/200" className="photo" width="35px" roundedCircle />
        </Navv.Text>
      </Container>
    </Navv>
  </div>

);

export default Navbar;
