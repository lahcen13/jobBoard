import React, { useEffect, useState } from 'react';
import classes from './AdvertPage.module.css';
import axios from "axios";
import Advert from '../Advert/Advert';

const AdvertPage = () => {
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    if (!data) {
      axios.get('http://localhost:5000/adverts', {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
        .then(res => {
          if (res.data.length > 0) {

            setData(res.data)
          }
        }).catch(err => console.error(err))
    }
  })
  return (<div className={classes.AdvertPage}>
    <div id={classes.filterBlock}>
    <h5 style={{textAlign: "center"}}>Filter</h5>

    </div>
    <div id={classes.advertContainer}>
    {data && data.map((el: advert, i: number) => <Advert key={i} title={el.title} description={el.description} published={el.published} date={el.date} />)}
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
