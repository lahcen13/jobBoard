import React, { useEffect, useState } from 'react';
import classes from './AdvertPage.module.css';
import axios from "axios";
import Advert from '../Advert/Advert';
import getUserToken from '../../functions/getUserToken'
import Navbar from '../Navbar/Navbar';
import AdvertDetail from '../AdvertDetail/AdvertDetail'

const AdvertPage = () => {
  const [data, setData] = useState<any>(null)
  const [selected, setSelected] = useState<data | null>(null)
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
            console.log(res.data)
            setData(res.data)
          }
        }).catch(err => console.error(err))
    }
  })


  const handleSelect = (i: number) => {
    setSelected(data[i])
  }
  return (<div id={classes.page}>
    <Navbar />
   
    <div className={classes.advertPage}>
    <div className={classes.filter}>
      
      </div>
      <div className={classes.advertContainer}>
      {data && data.map((el: any, i: number) => <Advert select={(i: number) => handleSelect(i)} index={i}  title={el.title} description={el.description} published={el.published} date={el.date} />)}
      </div>

     {selected && <AdvertDetail data={selected} />}
      </div></div>)
};

interface advert {
  title: string,
  description: string,
  published: boolean,
  date: string
}
interface data {
  title: string,
  companyID: number,
  description: string
  }
export default AdvertPage;
