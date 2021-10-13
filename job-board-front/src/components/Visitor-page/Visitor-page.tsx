import React from 'react';
import styles from './Visitor-page.module.scss';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import AdvertPage from '../AdvertPage/AdvertPage';

const Visitorpage = () => (

  <div className="Visitor-page">
    <Navbar />
    <div className={styles.main}>
      <div className={styles.introSection}>
        <p className={styles.intro}>Find your dream job among a list of 1000+ companies.</p>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.redirects}>
        <div className={styles.redirectLogin}>
          <input className={styles.logButton} type='button' value="I'm looking for a company" />
          <input className={styles.logButton} type='button' value="I'm a company" />
        </div>
        <input className={styles.button} type='button' value="See all advertisments" />
      </div>
    </div>
    <Footer />
  </div>
);

export default Visitorpage;
