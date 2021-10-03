import React from 'react';
import styles from './UserProfilApplied.module.css';

const UserProfilApplied = () => (
  <div className="col-sm-5  col-md-5">
    <div className="UserProfilColumn rounded">

      <div className="row justify-content-between">
        <h4> Last applied</h4>

        <div className="col-sm-12 col-md-12 rounded UserProfilAppliedAdvert  ">
          <h5>The title of the advert </h5>
          <div className="col-sm-12 col-md- ">
            The firm
          </div>
          <br />
          <div className="row justify-content-between">
            <div className="col-sm-3 col-md-3">
              <h6>Learn more</h6>
            </div>
            <div className="col-sm-3 col-md-2 ">
              2 min
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 rounded UserProfilAppliedAdvert ">
          <h5>The title of the advert </h5>
          <div className="row justify-content-between">
            <div className="col-sm-5 col-md-5 ">
              The firm
            </div>
          </div>
          <br />
          <div className="row justify-content-between">
            <div className="col-sm-3 col-md-3 CENTER">
              <h6>Learn more</h6>
            </div>
            <div className="col-sm-3 col-md-2 ">
              2 min
            </div>
          </div>
        </div>



      </div>
    </div >
  </div >

);

export default UserProfilApplied;
