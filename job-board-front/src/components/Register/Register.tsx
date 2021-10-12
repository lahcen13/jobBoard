import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FirstPageRegister from '../FirstPageRegister/FirstPageRegister';
import SecondPageRegister from '../SecondPageRegister/SecondPageRegister';
import styles from './Register.module.css';
import { controleEmail, controleName, controlePassword } from '../../functions/FormControle.js'
import Notification from "../Notification/Notification"
const Register = () => {
  const [step, setStep] = useState(1);
  const [showAlertPassword, setShowAlertPassword] = useState(false);
  const [showAlertConfirm, setShowAlertConfirm] = useState(false);
  const [showAlertEmail, setShowAlertEmail] = useState(false);
  const [showAlertName, setShowAlertName] = useState(false);
  const [showAlertPrenom, setShowAlertPrenom] = useState(false);
  const [showAlertMailExist, setShowAlertMailExist] = useState(false);
  const [noti, setNoti] = useState<any>(null)

  const [canContinue, setCanContinue] = useState(false);


  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: ''
  })

  useEffect(() => {
    console.log(data)
    setCanContinue(controle());
  })

  const updateData = (input: any) => {
    setData({ ...data, [input.target.name]: input.target.value })
  }

  const controle = () => {
    let validate = true;
    if (step == 1) {
      if (!controleName(data.firstName)) {
        setShowAlertPrenom(true);
        validate = false;
      } else {
        setShowAlertPrenom(false);
      }
      if (!controleName(data.lastName)) {
        setShowAlertName(true);
        validate = false;
      } else {
        setShowAlertName(false);
      }
      return validate;
    } else {
      if (!controleEmail(data.email)) {
        setShowAlertEmail(true);
        validate = false;
      } else {
        setShowAlertEmail(false);
      }
      if (!controlePassword(data.password)) {
        setShowAlertPassword(true);
        validate = false;
      } else {
        setShowAlertPassword(false);
      }
      if (data.password !== data.confirm) {
        setShowAlertConfirm(true);
        validate = false;
      } else {
        setShowAlertConfirm(false);
      }
      return validate;
    }
  }

  const submit = () => {
    axios.post('http://localhost:5000/register/user', data, {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => {
      window.location.href = '/login'
    }).catch(err => {
      switch (err.response.data) {
        case "email_exist":
          setNoti({
            bg: 'danger',
            show: true,
            head: 'Error',
            body: 'This user is already registered'
          })
          break;

        default:
          break;
      }
    })
  }

  const closeNotification = () => {
    setNoti({ ...noti, show: false })

  }

  // {name: "value"}
  return (
    <div className={styles.Register}>
      {step == 1 ? <FirstPageRegister showAlertPrenom={showAlertPrenom} showAlertName={showAlertName} showAlertMailExist={showAlertMailExist} disabled={canContinue} update={(input: any) => updateData(input)} onClick={() => setStep(2)} /> : <SecondPageRegister showAlertEmail={showAlertEmail} showAlertPassword={showAlertPassword} showAlertConfirm={showAlertConfirm} disabled={canContinue} onClick={() => submit()} update={(input: any) => updateData(input)} />}
      {noti && <Notification time={4000} changeState={() => closeNotification()} bg={noti.bg} isShown={noti.show} header={noti.head} body={noti.body} />}
    </div>)
};


export default Register;
