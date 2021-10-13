import React, { useEffect, useState } from 'react';
import styles from './CompanyAdverts.module.scss';
import CompanyPostedAdvert from './CompanyPostedAdvert/CompanyPostedAdvert'
import getUserToken from '../../../functions/getUserToken';
import { getUser } from '../../../functions/session';
import axios from "axios";
const CompanyAdverts = (props: any) => {
  const [data, setData] = useState<any>(null)
  const [current, setCurrent] = useState<any>(null)
  const [show, setShow] = useState<any>(null)
  const token: string = getUserToken();
  
  const ShowUsers = (id: any) => {
    props.ShowUsers(id);
  }

  const deleteAdvert = (id: any) => {
    axios.get('http://localhost:5000/company/adverts/delete?id=' + id, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + token
      }
    }).then(res => {
      setData(data.filter((el: any) => el.id !== id))
      console.log("deleted")
    }).catch(err => console.log('success'))
  }

  useEffect(() => {
    if (!data) {
      axios.get('http://localhost:5000/company/adverts?id=1', {
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

  return <div className={"col-sm-12 col-md-5 " + styles.box}>
    <h1> Adverts </h1>
    <div className={"rounded"}>
      <div className={"row"}>
        {data && data.map((el: any, i: number) => {
          var event = new Date(el.date)
          return < CompanyPostedAdvert title={el.title} name={el.name} date={event.toLocaleDateString()} id={el.id} show={(id: any) => ShowUsers(id)} Delete={(id: any) => deleteAdvert(id)} />
        }
        )}
      </div>
    </div>
  </div >

};


export default CompanyAdverts;
