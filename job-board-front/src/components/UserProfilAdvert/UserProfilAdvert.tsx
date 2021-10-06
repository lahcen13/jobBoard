import React from 'react';
import styles from './UserProfilAdvert.module.css';

const UserProfilAdvert = (props: any) => {
  const onClick = () => {
    props.onClick()
  }
  return (
    <div className={"col-sm-12 col-md-12 rounded " + styles.lastApplied} >
      <h5>{props.title} </h5>
      <div className="col-sm-12 col-md- ">
        {props.name}
      </div>
      <br />
      <div className="row justify-content-between">
        <div className="col-sm-3 col-md-3">
          <h6 onClick={() => onClick()} className={styles.link}>Learn more</h6>
        </div>
        <div className="col-sm-5 col-md-3 ">
          <h6>{props.date}</h6>
        </div>
      </div>
    </div>
  )
};

export default UserProfilAdvert;
