import React, { useEffect, useState } from 'react';
import './Login.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import axios from "axios";
import expireDate from '../../functions/expireDate.js'
import Alert from '../Alert/Alert';





const Login = () => {
  const [data, setData] = useState({ email: "", password: "" })
  const [showAlert, setShowAlert] = useState(false);

  const onChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onClick = () => {
    axios.post('http://localhost:5000/login', data, {
      headers: { 'content-type': 'application/json' }
    }).then(res => {
      if (res.data) {
        const data: session = { token: res.data, expire: expireDate().toString() }
        sessionStorage.setItem("session", JSON.stringify(data));
        window.location.href = '/adverts'
      } else if (res.data == 'wrong_password' || res.data == 'wrong_email') {
        console.log(showAlert);
      }
    }).catch(err => {
      console.error(err)
      setShowAlert(true);
      console.log(showAlert)

    })

  }


  return <div className="login-container">
    <h1 className='title'>LogIn</h1>
    <div className="inputBlock">
      <InputGroup onChange={(e) => onChange(e)} className="input">
        <FormControl name="email" className="center-text" placeholder="Email" />
      </InputGroup>
      <InputGroup onChange={(e) => onChange(e)} className="input">
        <FormControl name="password" className="center-text" placeholder="Password" />
      </InputGroup>
      <Button onClick={() => onClick()} className="button" variant="light">Connect</Button>
      <div>{showAlert && <Alert class=" bg-warning" text="Wrong password or email adress" />}</div>

    </div>

    <div className="createLink">
      <p>or</p>
      <p><a>Create an account</a></p>
    </div>
  </div>
};
interface session {
  token: string,
  expire: string,
}

export default Login;
