import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.Footer}>
    <p className={styles.loginLink} onClick={() => window.location.href = '/admin/login'}>Admin</p>
  </div>
);

export default Footer;
