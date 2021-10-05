import React, { useState, useEffect } from 'react';
import styles from './AdvertDetail.module.css';

import { Building, Envelope, Geo, Link45deg, Mailbox, People, Person } from 'react-bootstrap-icons';
import ReactMarkdown from 'react-markdown';
import { Spinner } from 'react-bootstrap';

const AdvertDetail = (props: {
  data: dataProps
}) => {

  const [data, setData] = useState<data | null>(null)



  useEffect(() => {
    if (!data) {
      setData({
        email: 'Jean.Ive@gmail.com',
        name: "google",
        number_employes: 369,
        city: "Marseille",
        postal_code: 13003,
        contact: "M. Ive Jean"
      })
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
          <span className={styles.labelIcon}>
            <Link45deg size={"25px"} />
            <a href="http://google.com" target="_blank" rel="noopener noreferrer">Website</a>
          </span>
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
            <input className={styles.button} type="button" value="Apply" />
          </div>
        </div></div> : <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
  
};

interface dataProps {
  title: string,
  description: string,
  companyID: number
}

interface data {
  email: string,
  name: string,
  number_employes: number,
  city: string,
  postal_code: number,
  contact: string
}
export default AdvertDetail;
