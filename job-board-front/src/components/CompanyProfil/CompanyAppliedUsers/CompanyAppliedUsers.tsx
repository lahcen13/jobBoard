import React, { useEffect, useState } from 'react';
import styles from './CompanyAppliedUsers.module.scss';
import CloseButton from 'react-bootstrap/CloseButton';
import axios from 'axios';
import getUserToken from '../../../functions/getUserToken';


const CompanyAppliedUsers = (props: any) => {
  const [data, setData] = useState<any>(null);
  const [step, setStep] = useState(0);
  const onClick = () => {
    props.onClick(null)
  }

  if (step == 0) {

    axios.get('http://localhost:5000/company/adverts/user?id=' + props.id, {
      headers: {
        'content-type': 'application/json',
        "authorization": "Bearer " + getUserToken()
      }
    }).then(res => {
      setData(res.data)
      setStep(1);
    }).catch(err => {
      console.log("error")
    })
  }
  console.log(data);
  return <>
    <div className={"col-sm-12 " + styles.closbutton}><CloseButton onClick={() => onClick()} /> </div>
    <div className={styles.CompanyAppliedUsers + " rounded " + styles.scroll} >
      <div className={"row " + styles.flex}>
        <h2> Interessted users :</h2>
        {data && data.map((el: any, i: number) => {
          return <div className={"row " + styles.center}>
            <div className={styles.box}>
              <div className="col-sm-12 ">
                <h4><b>{el.name} {el.first_name}</b></h4>
                <br></br>
              </div>
              <div className="col-sm-12 ">
                <h5>Why i choosed you ?</h5>
                <p>{el.motivation_people} </p>
                <br></br>
              </div>
              <div className={"row justify-content-between " + styles.buttonMargin}>
                <div className="col-sm-6 ">
                  <button type="button" className={"btn btn-primary " + styles.btn}>Download CV</button>
                </div>
                <div className="col-sm-6 ">
                  <button type="button" className={"btn btn-success " + styles.btn}>Contact </button>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
    </div >
  </>
};

export default CompanyAppliedUsers;
