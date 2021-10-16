import React, { useEffect, useState } from 'react';
import styles from './Popup.module.css';
import { InputGroup, FormControl, Button, ButtonGroup } from 'react-bootstrap';
import { CloudUpload, FileText, Person, Upload } from 'react-bootstrap-icons';
import Notification from '../Notification/Notification';
import { getUser } from '../../functions/session';
import axios from 'axios';
import getUserToken from '../../functions/getUserToken';
const Popup = (props: props) => {
  const [data, setData] = useState<popupData>({
    firstName: "",
    lastName: "",
    text: "",
    email: "",
    phone: "",
    file: null
  })

  const [disabled, setDisabled] = useState(false)




  const [step, setStep] = useState(1)

  const update = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if(getUser() && !disabled) {
      axios.get('http://localhost:5000/user', {
        headers: {
          'content-type': 'application/json',
          "authorization": "Bearer " + getUserToken()
        }
      })
      .then(res => {
        
        setData({
          text: data.text,
          file: {name: res.data.cv},
          firstName: res.data.first_name,
          lastName: res.data.name,
          email: res.data.email,
          phone: res.data.phone
        })
        setDisabled(true)
      }).catch(err => console.error(err))
    }
  })



  const handleStep = () => {
    const { firstName, lastName, email, phone } = data
    if (firstName && lastName && phone && email) {
      return setStep(2)
    }
    props.callBack({
      bg: "warning",
      header: "Oops",
      body: "Please, fill all the fields",
      isShown: true,
      time: 4000
    })
  }


  const submit = () => {
    const {firstName, lastName, phone, email, text, file} = data

    if (firstName && lastName && phone && email && text && file) {
      props.valid(data)
    }
    else {
      props.callBack({
        bg: "warning",
        header: "Oops",
        body: "Please, fill all the fields",
        isShown: true,
        time: 4000
      })
    }
  }


  const first = () => {
    return <>
      <div className={styles.header}>
        <Person width="70px" height="70px" />
      </div>
      <div className={styles.body}>
        <input disabled={disabled} value={data.firstName} onChange={(e) => update(e)} placeholder="First name" className={styles.input} type="text" name="firstName" />
        <input disabled={disabled} value={data.lastName} onChange={(e) => update(e)} placeholder="Last name" className={styles.input} type="text" name="lastName" />
        <input disabled={disabled} value={data.email} onChange={(e) => update(e)} placeholder="Email" className={styles.input} type="email" name="email" />
        <input disabled={disabled} value={data.phone} onChange={(e) => update(e)} placeholder="Phone number" className={styles.input} type="tel" name="phone" />

      </div>
      <div className={styles.footer}>
        <input onClick={() => handleStep()} className={styles.button + " " + styles.valid} type="button" value="Continue" />
        <input onClick={() => props.cancel()} className={styles.button + " " + styles.wrong} type="button" value="Cancel" />
      </div>
    </>
  }

  const second = () => {


    const handleFile = (e: any) => {
      setData({ ...data, file: e.target.files[0] })
    }
    return <>
      <div className={styles.header}>
        <FileText width="70px" height="70px" />
      </div>
      <div className={styles.body}>
        <label className={styles.motivationContainer}>
          <p>Motivation text:</p>
          <textarea value={data.text} onChange={(e) => update(e)} name="text" />
        </label>

        <label  className={styles.fileInput}>
          {(data.file && data.file.name )? data.file.name.substring(0, 10) : "Upload File"}
          <CloudUpload width="30px" height="30px" className={styles.icon} />
          <input disabled={(data.file && data.file.name )? disabled : false}  accept="application/pdf" onChange={(e: any) => handleFile(e)} hidden type="file" />
        </label>

      </div>
      <div className={styles.footer}>
        <input onClick={() => submit()} className={styles.button + " " + styles.valid} type="button" value="Submit" />
        <input onClick={() => setStep(1)} className={styles.button + " " + styles.wrong} type="button" value="Back" />
      </div>
    </>
  }



  return (
    <div className={styles.popup}>
      {step === 1 ? first() : second()}
    </div>
  )
};


interface popupData {
  firstName: string,
  lastName: string,
  text: string,
  file: any,
  phone: string,
  email: string
}
interface props {
  callBack: Function,
  valid: Function,
  cancel: Function
}

interface notif { bg: string, header: string, body: string, isShown: boolean, time: number }

export default Popup;
