import React from 'react';
import styles from './UserProfil.module.css';
import Navbar from '../Navbar/Navbar';

const UserProfil = () => (
  <div className={styles.UserProfil}>
    <Navbar></Navbar>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          One of three columns
        </div>
        <div className="col-sm-12  col-md-4">
          One of three columns
        </div>
        <div className="col-sm-12  col-md-4">
          One of three columns
        </div>
      </div>
    </div >

  </div >
);

export default UserProfil;
