import React, { useEffect, useState } from 'react';
import classes from './AdvertPage.module.css';
import axios from "axios";
import Advert from '../Advert/Advert';
import getUserToken from '../../functions/getUserToken'
import Navbar from '../Navbar/Navbar';

const AdvertPage = () => {
  const [data, setData] = useState<any>(null)
  const token: string = getUserToken()
  useEffect(() => {
    if (!data) {
      axios.get('http://localhost:5000/adverts', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + token
        }
      })
        .then(res => {
          if (res.data.length > 0) {

            setData(res.data)
          }
        }).catch(err => console.error(err))
    }
  })
  return (<div id={classes.page}>
    <Navbar />
    <div className={classes.AdvertPage}>
    
    <div id={classes.filterBlock}>
    <h5 style={{textAlign: "center"}}>Filter</h5>

    </div>
    <div id={classes.advertContainer}>
    {data && data.map((el: advert, i: number) => <Advert key={i} title={el.title} description={el.description} published={el.published} date={el.date} />)}
    </div>
  </div>
  </div>)
};

interface advert {
  title: string,
  description: string,
  published: boolean,
  date: string
}

export default AdvertPage;
