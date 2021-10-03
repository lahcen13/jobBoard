import React from 'react';
import styles from './UserProfil.module.css';
import Navbar from '../Navbar/Navbar';
import { Person } from "react-bootstrap-icons";
import UserProfilImage from "../UserProfilImg/UserProfilImg";




const UserProfil = () => (
  <div className="UserProfilBG">
    <Navbar></Navbar>
    <div className={styles.UserProfil}>
      <div className="row justify-content-between">
        <UserProfilImage img="https://picsum.photos/200/250" name="name" gender="gender" ></UserProfilImage>
        <div className="col-sm-12  col-md-3">
          <div className="UserProfilColumn rounded">
            <Person size={36} id="personIcon"></Person>
            <h4> about </h4>
          </div>
        </div>
        <div className="col-sm-12  col-md-6">
          <div className="UserProfilColumn rounded">
            <div className="row justify-content-between">
              <h4> Last applied</h4>
              <div className="col-sm-12 col-md-5">

              </div>
              <div className="col-sm-12 col-md-5 ">

              </div>
            </div>
          </div>
        </div>
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
