import React from 'react';
import styles from './UserProfil.module.css';
import Navbar from '../Navbar/Navbar';

import UserProfilImage from "../UserProfilImg/UserProfilImg";

import UserProfilAbout from "../UserProfilAbout/UserProfilAbout";

import UserProfilApplied from "../UserProfilApplied/UserProfilApplied";



const UserProfil = () => (
  <div className="UserProfilBG">
    <Navbar></Navbar>
    <div className={styles.UserProfil}>
      <div className="row justify-content-between">
        <UserProfilImage img="https://picsum.photos/200/250" name="name" gender="gender" ></UserProfilImage>
        <UserProfilAbout />
        <UserProfilApplied />


      </div >

      <div className="row justify-content-between">
        <div className="col-sm-12 col-md-3">
          <div className="UserProfilColumn rounded">
            uploads
          </div>
        </div>
      </div >
    </div >
  </div >
);

export default UserProfil;
