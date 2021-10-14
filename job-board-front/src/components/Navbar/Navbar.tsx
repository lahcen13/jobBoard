import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Navv from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';
import { BellFill } from 'react-bootstrap-icons';
import Image from 'react-bootstrap/Image';
import Menu from '../Menu/Menu'
import { getUser } from '../../functions/session';
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleClick = () => {
    console.log('opening')
    setOpen(!isOpen)
  }

  return   <div  className={styles.navbar}>
  <Navv  className={'nav'} variant="dark" >
    <Container>
      <Navv.Brand href="/">JobBoard</Navv.Brand>
      <Navv.Text >
        {getUser() ? <><BellFill size={25} color="white" className={styles.bell}> </BellFill>
        <Image onClick={() => handleClick()} src="https://picsum.photos/200/200" className={styles.userPic} width="35px" roundedCircle /></>: <div className={styles.unRegisteredRedirects}><Link to="/login"><p>Connexion</p></Link> <Link to="/register"><p>Register</p></Link></div>}
      </Navv.Text>
    </Container>
  </Navv>
  <Menu open={isOpen} />
</div>
};

export default Navbar;
