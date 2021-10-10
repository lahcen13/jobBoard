import React, { useEffect, useState } from 'react';
import styles from './List.module.css';
import { Pencil, PersonDash } from 'react-bootstrap-icons';
import axios from "axios";
import getUserToken from '../../../../functions/getUserToken';

const List = (props: any) => {
  const [data, setData] = useState<any>(null)
  const [id, setId] = useState<any>(null)
  const [deleteStatus, setDeleteStatus] = useState<any>({ status: false, id: "" })
  const [deleteTable, setDeleteTable] = useState<any>(null);
  const token: string = getUserToken()
  const onClick = (param: any) => {
    props.id(param)
  }

  const deleteFromTable = (param: any) => {
  
    axios.get(`http://localhost:5000/admin/delete?table=${deleteTable}&id=${param}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + token
      }
    }).then(res => {
      
      console.log("deleted with success")
      setData(data.filter((el: any) => el.id !== param))
    }).catch(err => console.error(err))
  }

  useEffect(() => {

    if (deleteStatus.status == true) {
      deleteFromTable(deleteStatus.id);
      setDeleteStatus({ status: false, id: "" })
    }
    if (!data && props.list == "user") {
      axios.get('http://localhost:5000/admin/user?list=list', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + token
        }
      }).then(res => {
        setData(res.data)
        setDeleteTable('people')
        console.log(res.data)
      }).catch(err => console.error(err))
    }
    if (!data && props.list == "companies") {
      axios.get('http://localhost:5000/admin/companies?list=list', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + token
        }
      }).then(res => {
        setData(res.data)
        setDeleteTable('companies')
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
        setDeleteTable('advertisements')
        console.log(res.data)
      }).catch(err => console.error(err))
    }
  });




  return <div className={styles.BoxA} >
    {data && data.map((el: any) => (<div className={'rounded ' + styles.list}>

      <h3 className={styles.h3}> {el.full_name} </h3>
      <Pencil className={styles.icons} onClick={() => onClick(el.id)} color='white' size={30}></Pencil>
      <div className={styles.margin}>
        <PersonDash onClick={() => setDeleteStatus({ status: true, id: el.id })} className={styles.icons} color='white' size={30}></PersonDash>
      </div>
    </div>))
    }
  </div >
};

export default List;
