import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import styles from './CompanyPostedAdvert.module.scss';

const CompanyPostedAdvert = (props: any) => {
  const Delete = (param: any) => {
    props.Delete(param);
  }
  const show = (param: any) => {
    props.show(param);
  }
  return (
    <div className={"col-sm-12 col-md-12 rounded " + styles.lastAdvert} >
      <h5>{props.title} </h5>
      <div className="col-sm-12 col-md- ">
        {props.name}
      </div>
      <br />
      <div className="row justify-content-between">
        <div className="col-sm-12 col-md-12 ">
          <h6>{props.date}</h6>
        </div>
      </div>
      <div className="row justify-content-between">

        <div className="col-6 col-md-6">
          <Button onClick={() => show(props.id)} className={styles.show}>Users</Button>
        </div>

        <div className="col-5 col-md-5">
          <Button onClick={() => Delete(props.id)} className={styles.delete} >DELETE</Button>
        </div>
        
      </div>
    </div>
  )
};

export default CompanyPostedAdvert;
