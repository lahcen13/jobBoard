import axios from 'axios';
import React, { useState } from 'react';
import styles from './Login.module.scss';
import Notification from '../../Notification/Notification';
import { set } from '../../../functions/session';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  console.log('LOGIN')
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
    axios.post('http://localhost:5000/company/login', {
      data
    }, {
      headers: { 'content-type': 'application/json' }

    }).then((res) => {
      set(res.data.token, false, res.data.user)
      window.location.href = '/company'

    }).catch(err => {
      console.log(err.response.data)
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
      <h3 className={styles.title}>Company login</h3>
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
        <Link to='/company/register'> <div className={styles.register}> No account ? Register here.</div></Link>
      </div>
    </div>
  </div>
};




export default Login;
