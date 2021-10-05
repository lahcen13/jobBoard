import React from 'react';
import styles from './UserProfilApplied.module.css';
import Advert from '../UserProfilAdvert/UserProfilAdvert';

const UserProfilApplied = () => (
  <div className="col-sm-5  col-md-5 ">

    <div className="UserProfilColumn rounded ">
      <div className="col-sm-12  col-md-12">
        <div className="row justify-content-between">
          <h4> Last applied</h4>
          <div className={styles.scroll}>
            <Advert title="developpement" companyName="google" time="4" ></Advert>
            <Advert title="developpement" companyName="google" time="4" ></Advert>
            <Advert title="developpement" companyName="google" time="4" ></Advert>
            <Advert title="developpement" companyName="google" time="4" ></Advert>
            <Advert title="developpement" companyName="google" time="4" ></Advert>
          </div>
        </div>
      </div >
    </div >
  </div>

);

export default UserProfilApplied;
