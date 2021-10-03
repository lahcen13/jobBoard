import React from 'react';
import styles from './UserProfil.module.css';
import Navbar from '../Navbar/Navbar';

const UserProfil = () => (
  <div>
    <Navbar></Navbar>

    <div className={styles.UserProfil}>
      <div className="row justify-content-between">
        <div className="col-sm-12 col-md-3">
          <div className="UserProfilColumn rounded">
            <img src="https://picsum.photos/200/250" className="img-fluid rounded" alt='Profil picture'></img>
          </div>
        </div>
        <div className="col-sm-12  col-md-3">
          <div className="UserProfilColumn rounded">
            <h4> about </h4>
          </div>
        </div>
        <div className="col-sm-12  col-md-6">
          <div className="UserProfilColumn rounded">
            <div className="row justify-content-between">
              <h4> Last applied</h4>
              <div className="col-sm-12 col-md-5 s">
                test test test test test test test test test test test test test
              </div>
              <div className="col-sm-12 col-md-5 ">
                col col col col col col col col col col col col col col col col
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
    </div>
  </div >
);

export default UserProfil;
