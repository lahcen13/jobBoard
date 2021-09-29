import React, { useEffect, useState } from 'react';
import './Login.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import axios from "axios";




const Login = () => {
  const [data, setData] = useState({ email: "", password: "" })

  const onChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onClick = () => {
    console.log('tetet')
    axios.post('http://localhost:5000/login', data, {
      headers: { 'content-type': 'application/json' }
    }).then(res => {
      console.log('OK')
      if (res.data) {
        const data: session = { token: res.data, expire: "tetetetet" }
        console.log(res)
        sessionStorage.setItem("token", JSON.stringify(data));
      } else {

      }
    }).catch(err => console.error(err))


    
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
