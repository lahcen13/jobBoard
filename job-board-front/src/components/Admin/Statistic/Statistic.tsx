import React, { useState, useEffect } from 'react';
import styles from './Statistic.module.css';
import { Building, PencilSquare, People } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import axios from "axios";
import getUserToken from '../../../functions/getUserToken';

const Statistic = (props: any) => {
  const [show, setShow] = useState("user");
  const token: string = getUserToken()
  const [data, setData] = useState({ count_people: 0, count_companies: 0, count_adverts: 0 });




  useEffect(() => {
    if (data.count_people == 0) {
      axios.get('http://localhost:5000/admin/user', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + token
        }
      }).then(res => {
        setData({ ...data, count_people: res.data[0]["count_people"] })
      }).catch(err => console.error(err))
    }
    if (data.count_companies == 0) {
      axios.get('http://localhost:5000/admin/companies', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + token
        }
      }).then(res => {
        setData({ ...data, count_companies: res.data[0]["count_companies"] })
      }).catch(err => console.error(err))
    }
    if (data.count_adverts == 0) {
      axios.get('http://localhost:5000/admin/adverts', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + token
        }

      }).then(res => {
        setData({ ...data, count_adverts: res.data[0]["count_adverts"] })

      }).catch(err => console.error(err))
    }
  })




  return <div className={styles.ParentA}>
    <div className={styles.box}>
      <h3 className={styles.h3} > Users</h3>
      <h1 className={styles.h1}> {data.count_people}  <People /></h1>
      <Button onClick={() => props.render('user')} className={styles.Button} > Manage </Button>
      <Button onClick={() => window.location.href = '/admin/users'} className={styles.ButtonSmall} > Manage </Button>
    </div>

    <div className={styles.box}>
      <h3 className={styles.h3} > Adverts </h3>
      <h1 className={styles.h1}>{data.count_adverts}  <PencilSquare /> </h1>
      <Button onClick={() => props.render('adverts')} className={styles.Button} > Manage </Button>
      <Button onClick={() => window.location.href = '/admin/adverts'} className={styles.ButtonSmall} > Manage </Button>
    </div>

    <div className={styles.box}>
      <h3 className={styles.h3} > Companies</h3>
      <h1 className={styles.h1}> {data.count_companies}  <Building /></h1>
      <Button onClick={() => props.render('companies')} className={styles.Button} > Manage </Button>
      <Button onClick={() => window.location.href = '/admin/companies'} className={styles.ButtonSmall} > Manage </Button>
    </div>
  </div>
};
interface props {
  Users: number,
  Adverts: number,
  Companies: number
}

export default Statistic;
