import React from 'react';
import styles from './UserProfilApplied.module.css';
import AppliedAdvert from '../UserProfilAdvert/UserProfilAdvert';
import { useEffect, useState } from 'react';
import axios from "axios";
import getUserToken from '../../functions/getUserToken';
import AdvertDetail from '../AdvertDetail/AdvertDetail';
import { getUser } from '../../functions/session';


const UserProfilApplied = () => {
  const [data, setData] = useState<any>(null)
  const [current, setCurrent] = useState<any>(null)
  const token: string = getUserToken();


  useEffect(() => {
    if (!data && current === null) {
      axios.get('http://localhost:5000/applied?id=' + getUser().id, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + token
        }
      }).then(res => {
        setData(res.data)
        console.log(res.data)
      }).catch(err => console.log('success'))
    }
  })
  const handleClick = (el: any) => {
    setCurrent({ companie_id: el.idCompanie, description: el.description, title: el.title })
  }


  const renderDefault = () => (
    <div className={"UserProfilColumn rounded " + styles.BoxHeight}>
      <div className="col-sm-12  col-md-12">
        <div className="row justify-content-between">
          <h4> Last applied</h4>
          <div className={current ? " " : styles.scroll}>
            {data ? data.map((el: any, i: number) => {
              var event = new Date(el.date);
              return (<AppliedAdvert onClick={() => handleClick(el)} title={el.title} name={el.name} date={event.toLocaleDateString()} />)
            }):
            <div className={styles.noApply}>
              <p>
You haven't applied for any job yet ...
</p>
              </div>}
          </div>
        </div>
      </div>
    </div>
  )



  return <div className="  col-md-6 ">
    {
      !current ? renderDefault() : <AdvertDetail canClose interact={() => setCurrent(null)} data={current}></AdvertDetail>
    }
  </div>

};

export default UserProfilApplied;
