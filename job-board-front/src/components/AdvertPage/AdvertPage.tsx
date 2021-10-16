import React, { useEffect, useState } from 'react';
import classes from './AdvertPage.module.css';
import axios from "axios";
import Advert from '../Advert/Advert';
import getUserToken from '../../functions/getUserToken'
import Navbar from '../Navbar/Navbar';
import AdvertDetail from '../AdvertDetail/AdvertDetail'
import Popup from '../Popup/Popup'
import Notification from '../Notification/Notification'
import { getUser } from '../../functions/session'

const AdvertPage = () => {
  const [data, setData] = useState<any>(null)
  const [selected, setSelected] = useState<any>(null)
  const [displayDetails, setDetails] = useState<boolean>(false)
  const [noti, setNoti] = useState<notif>({
    bg: "success",
    header: "Oops",
    body: "Please, fill all the fields",
    isShown: false,
    time: 4000
  })
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
            setSelected(res.data[0])
            setData(res.data)
          }
        }).catch(err => console.error(err))
    }
  })

  const handleSelect = (i: number) => {
    setDetails(true)
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
        file: "myCV.pdf",
        email: data.email,
        phone: data.phone,
        advertID: selected.id,
      }, header).then(res => {
        setPop(false)
        setNoti({
          bg: "success",
          header: "Success",
          body: "You successfully applied",
          isShown: true,
          time: 4000
        })
      })
        .catch(err => {
          if (err.response.data === 'need_connexion') setNoti({
            bg: "danger",
            header: "Fail",
            body: "You need to be connected with this email",
            isShown: true,
            time: 4000
          })
          if (err.response.data === 'already_applied') setNoti({
            bg: "danger",
            header: "Fail",
            body: "You already applied to this advertisment",
            isShown: true,
            time: 4000
          })
          if (err.response.data === 'wrong_email') setNoti({
            bg: "danger",
            header: "Fail",
            body: "You are not submiting with your own email",
            isShown: true,
            time: 4000
          })
        })
    }
  }


  const handleNoti = (data: notif) => {
    setNoti(data)
  }

  const onCancel = () => {
    setPop(false)
  }

  return (<div id={classes.page}>
    <Navbar />
   

    <div className={classes.advertPage}>
      <div className={classes.advertContainer}>
        {data && data.map((el: any, i: number) => <Advert select={(i: number) => handleSelect(i)} index={i} title={el.title} short={el.short_description} description={el.description} published={el.published} date={el.date} />)}
      </div>

      {(data && displayDetails) && <AdvertDetail display={() => setDetails(false)} interact={() => setPop(true)} data={!selected ? data[0]: selected} />}
      {pop && <Popup callBack={(d: notif) => handleNoti(d)} valid={(data: popupData) => onValid(data)} cancel={() => onCancel()} />}
      <Notification changeState={() => setNoti({ ...noti, isShown: false })} {...noti} />
    </div></div>)
};

interface popupData {
  firstName: string,
  lastName: string,
  text: string,
  file: File,
  phone: string,
  email: string
}
interface data {
  title: string,
  companie_id: number,
  description: string
}

interface notif { bg: string, header: string, body: string, isShown: boolean, time: number }
export default AdvertPage;
