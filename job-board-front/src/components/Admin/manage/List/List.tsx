import React, { useEffect, useState } from 'react';
import styles from './List.module.css';
import { Pencil, PersonDash } from 'react-bootstrap-icons';
import axios from "axios";
import getUserToken from '../../../../functions/getUserToken';

const List = (props: any) => {
  const [data, setData] = useState<any>(null)
  const token: string = getUserToken()

  useEffect(() => {
    if (!data && props.list == "user") {
      axios.get('http://localhost:5000/admin/user?list=list', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + token
        }
      }).then(res => {
        setData(res.data)
        console.log(res.data)
      }).catch(err => console.log("fuuuuuuuuck"))
    }
    if (!data && props.list == "companies") {
      axios.get('http://localhost:5000/admin/companies?list=list', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + token
        }
      }).then(res => {
        setData(res.data)
        console.log(res.data)
      }).catch(err => console.error(err))
    }
    if (!data && props.list == "adverts") {
      axios.get('http://localhost:5000/admin/adverts?list=list', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + token
        }
      }).then(res => {
        setData(res.data)
        console.log(res.data)
      }).catch(err => console.error(err))
    }
  });


  return <div className={styles.BoxA} >
    {data && data.map((el: any) => (<div className={'rounded ' + styles.list}>
      <h3 className={styles.h3}> {el.full_name} </h3>
      <Pencil className={styles.icons} color='white' size={30}></Pencil>
      <div className={styles.margin}>
        <PersonDash className={styles.icons} color='white' size={30}></PersonDash>
      </div>
    </div>))}
  </div>
};

export default List;
