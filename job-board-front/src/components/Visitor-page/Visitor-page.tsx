import React from 'react';
import styles from './Visitor-page.module.scss';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import AdvertPage from '../AdvertPage/AdvertPage';
import Footer from '../Footer/Footer'

const Visitorpage = () => (

  <div className={styles.VisitorPage}>
    <Navbar />

    <div className={styles.introSection}>
      <p className={styles.intro}>Find your dream job among a list of 1000+ companies.</p>
      <div className={styles.underline}></div>
    </div>
    <div className={styles.redirects}>
      <div className={styles.redirectLogin}>
        <input onClick={() => window.location.href = '/login'} className={styles.logButton} type='button' value="I'm looking for a company" />
        <input onClick={() => window.location.href = '/company/login'} className={styles.logButton} type='button' value="I'm a company" />
      </div>
      <input onClick={() => window.location.href = '/adverts'} className={styles.button} type='button' value="See all advertisments" />
    </div>

    <Footer />
  </div>
);

export default Visitorpage;
