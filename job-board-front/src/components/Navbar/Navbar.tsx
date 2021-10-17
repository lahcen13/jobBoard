import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import Navv from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';
import { BellFill } from 'react-bootstrap-icons';
import Image from 'react-bootstrap/Image';
import { getUser } from '../../functions/session';
import { Link } from 'react-router-dom'
import AnimatedNavigation from '../AnimatedNavigation/AnimatedNavigation'
import getUserToken from '../../functions/getUserToken';

const Navbar = () => {
  const [isOpen, setOpen] = useState<any>(false)
  const [triggerAnimation, setTrigger] = useState<any>(null)

  useEffect(() => {
    console.log('updating')
  })

  const trigger = () => {
    console.log('click')
    setTrigger(Math.random())
  }

  return <div className={styles.navbar}>
    <h4 onClick={() => window.location.href = '/'}>Job board | Job</h4>

    {getUser() && (<> <AnimatedNavigation animState={triggerAnimation} />

      <div className={styles.imgWrapper}>

        {/* {getUser() && <img onClick={() => trigger()} className={styles.image} src="https://picsum.photos/50" />} */}

      </div></>)}

  </div>
};

export default Navbar;
