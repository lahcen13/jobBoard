import React, { useEffect, useState } from 'react';
import classes from './AdvertPage.module.css';
import axios from "axios";
import Advert from '../Advert/Advert';
import getUserToken from '../../functions/getUserToken'
import Navbar from '../Navbar/Navbar';
import AdvertDetail from '../AdvertDetail/AdvertDetail'
import Popup from '../Popup/Popup'
import Notification from '../Notification/Notification'
import {getUser} from '../../functions/session'

const AdvertPage = () => {
  const [data, setData] = useState<any>(null)
  const [selected, setSelected] = useState<any>(null)
  const [noti, setNoti] = useState<boolean>(false)
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



  const onValid = (data: popupData) => {
    const header = {
      headers: {
        'content-type': 'application/json',
        "authorization": "Bearer " + getUserToken()
      }
    }
   if (selected) {
    axios.post('http://localhost:5000/applied', {
      firstName: data.firstName,
      lastName: data.lastName,
      motivation: data.text,
      advertID: selected.id,
      userID: getUser().id
    }, header).then(res => {
      setPop(false)
      setNoti(true)
    })
    .catch(err => console.error(err))
   }
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
      {pop && <Popup valid={(data: popupData) => onValid(data)} cancel={() => onCancel()} />}
      <Notification bg="success" header="Success" body="You successfully applied to this advert" changeState={() => setNoti(false)} isShown={noti} time={4000}/>
    </div></div>)
};

interface popupData {
  firstName: string,
  lastName: string,
  text: string
}
interface data {
  title: string,
  companie_id: number,
  description: string
}
export default AdvertPage;
