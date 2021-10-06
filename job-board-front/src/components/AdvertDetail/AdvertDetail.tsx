import React, { useState, useEffect } from 'react';
import styles from './AdvertDetail.module.css';

import { Building, Envelope, Geo, Link45deg, Mailbox, People, Person } from 'react-bootstrap-icons';
import ReactMarkdown from 'react-markdown';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import getUserToken from '../../functions/getUserToken';


const AdvertDetail = (props: {
  data: dataProps,
  application: Function
}) => {

  const [data, setData] = useState<data | null>(null)
  



  useEffect(() => {
    if (!data) {
      console.log(props.data.companie_id)
      axios.get('http://localhost:5000/company?id='+props.data.companie_id, {
        headers: {
          'content-type': 'application/json',
        "authorization": "Bearer " + getUserToken()
        }
      }).then(res => {
        setData(res.data)
        console.log(res)
      }).catch(err => console.error(err.response))
      
    }
  })

 

 

 
  return   data ?  <div className={styles.AdvertDetail}><h3 className={styles.title}>{props.data.title}</h3>
        <div className={styles.detailHeader}>
          <div className={styles.row}>
            <span className={styles.labelIcon}>
              <Building size={"25px"} />
              <p>{data.name}</p>
            </span>
            <span className={styles.labelIcon}>
              <People size={"25px"} />
              <p>{data.number_employes}</p>
            </span>

          </div>
          <div className={styles.row}>
            <span className={styles.labelIcon + " " + styles.stretch}>
              <Geo size={"25px"} />
              <p>{data.city}, {data.postal_code}</p>
            </span>
          </div>
        </div>
        <p className={styles.paragraph}>
          <ReactMarkdown children={props.data.description} />
        </p>
        <div className={styles.detailFooter}>
        {data.website &&   <span className={styles.labelIcon}>
            <Link45deg size={"25px"} />
            <a href={data.website} target="_blank" >Website</a>
          </span>}
          <h5 className={styles.contactTitle}>Contact</h5>
          <div className={styles.contactSection}>
            <span className={styles.labelIcon}>
              <Envelope size={"25px"} />
              <p>{data.email}</p>
            </span>
            <span className={styles.labelIcon}>
              <Person size={"25px"} />
              <p>{data.contact}</p>
            </span>
          </div>
          <div className={styles.buttonContainer}>
            <input onClick={() => props.application()} className={styles.button} type="button" value="Apply" />
            
          </div>
        </div></div> : <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
  
};

interface dataProps {
  title: string,
  description: string,
  companie_id: number
}

interface data {
  email: string,
  name: string,
  number_employes: number,
  city: string,
  postal_code: number,
  contact: string,
  website: string
}
export default AdvertDetail;
