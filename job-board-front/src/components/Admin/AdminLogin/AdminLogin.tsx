import axios from 'axios';
import React, { useState } from 'react';
import styles from './AdminLogin.module.scss';
import Notification from '../../Notification/Notification';
import { set } from '../../../functions/session';

const AdminLogin = () => {

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const [noti, setNoti] = useState<any>({
    bg: '',
    header: '',
    body: '',
    isShown: false,
    time: 3000,

  })


  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }


  const handleSubmit = () => {
    axios.post('http://localhost:5000/admin/login', {
      data
    }, {
      headers: { 'content-type': 'application/json' }

    }).then((res) => {
      set(res.data.token, false, res.data.user)
      window.location.href = '/admin'
      
    }).catch(err => {
      if (err.response.data === 'bad_password') {
        setNoti({
          bg: 'danger',
          header: 'Error',
          body: 'Wrong password',
          isShown: true,
          time: 3000
        })


      }
      if (err.response.data === 'user_not_found') {
        setNoti({
          bg: 'danger',
          header: 'Error',
          body: 'User not found',
          isShown: true,
          time: 3000
        })
      }
    })
  }
  return <div className={styles.AdminLogin}>
    <Notification {...noti} changeState={() => setNoti({ ...noti, isShown: false })} />
    <div className={styles.logWrapper}>
      <h3 className={styles.title}>Admin login</h3>
      <div className={styles.inputWrapper}>
        <label>
          Email:
          <input onChange={(e) => handleChange(e)} name='email' type='text' value={data.email} />
        </label>
        <label>
          Password:
          <input onChange={(e) => handleChange(e)} name='password' type='password' value={data.password} />
        </label>
        <input onClick={() => handleSubmit()} type='button' className={styles.button} value='Connect' />
      </div>
    </div>
  </div>
};


interface noti {
  bg: string,
  header: string,
  body: string,

  isShown: boolean,
  time: number,

}

export default AdminLogin;
