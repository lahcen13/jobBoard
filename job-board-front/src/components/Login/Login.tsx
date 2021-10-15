import React, { useEffect, useState } from 'react';
import './Login.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import axios from "axios";
import { set } from '../../functions/session'
import Alert from '../Alert/Alert';
import { Link } from 'react-router-dom';


const Login = () => {
  const [data, setData] = useState({ email: "", password: "" })
  const [showAlert, setShowAlert] = useState(false);
  const [checked, setChecked] = useState<boolean>(false)

  const onChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onClick = () => {
    axios.post('http://localhost:5000/login', data, {
      headers: { 'content-type': 'application/json' }
    }).then(res => {
      if (res.data) {
        console.log(res.data)
        set(res.data.token, checked, res.data.user)
        window.location.href = '/adverts';

      } else if (res.data == 'wrong_password' || res.data == 'wrong_email') {
        console.log("THEN", res.data)
        console.log(showAlert);
      }
    }).catch(err => {
      console.log(err.response.data)
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
        <FormControl name="password" type="password" className="center-text" placeholder="Password" />
      </InputGroup>
      <InputGroup className='input'>
        <InputGroup.Text>Stay connected</InputGroup.Text>
        <InputGroup.Checkbox onClick={() => setChecked(!checked)} checked={checked} aria-label="Checkbox for following text input" />
      </InputGroup>
      <Button onClick={() => onClick()} className="button" variant="light">Connect</Button>
      <div>{showAlert && <Alert class=" bg-warning" text="Wrong password or email adress" />}</div>

    </div>

    <div className="createLink">
      <p>or</p>
      <Link to='register'><p id="createAccount">Create an account</p></Link>
    </div>
  </div>
};
interface session {
  token: string,
  expire: string,
}

export default Login;
