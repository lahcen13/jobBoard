import React, { useEffect, useState } from 'react';
import classes from './AdvertPage.module.css';
import axios from "axios";
import Advert from '../Advert/Advert';
import getUserToken from '../../functions/getUserToken'
import Navbar from '../Navbar/Navbar';
import AdvertDetail from '../AdvertDetail/AdvertDetail'
import Popup from '../Popup/Popup'

const AdvertPage = () => {
  const [data, setData] = useState<any>(null)
  const [selected, setSelected] = useState<data | null>(null)
  const [pop, setPop] = useState<boolean>(false)
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
    console.log(data[i])
    setSelected(data[i])
  }



  const onValid = (data: object) => {

  }

  const onCancel = () => {
    setPop(false)
  }
  return (<div id={classes.page}>
    <Navbar />

    <div className={classes.advertPage}>
      <div className={classes.filter}>

      </div>
      <div className={classes.advertContainer}>
        {data && data.map((el: any, i: number) => <Advert select={(i: number) => handleSelect(i)} index={i} title={el.title} description={el.description} published={el.published} date={el.date} />)}
      </div>

      {selected && <AdvertDetail application={() => setPop(true)} data={selected} />}
      {pop && <Popup valid={(data: object) => onValid(data)} cancel={() => onCancel()} />}
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
  companie_id: number,
  description: string
}
export default AdvertPage;
