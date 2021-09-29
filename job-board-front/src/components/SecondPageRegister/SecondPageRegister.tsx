import React, { useState } from 'react';
import './SecondPageRegister.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const SecondPageRegister = () => {
  const [data, setData] = useState({ email: "", password: "", confirm: "" })

  const onChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data)
  }

  const onClick = () => {

  }
  return <div className="register-container">
    <h1 className='title'>Register</h1>
    <div className="inputBlock">
      <InputGroup onChange={(e) => onChange(e)} className="input">
        <FormControl name="email" className="center-text" placeholder="Email" />
      </InputGroup>
      <InputGroup onChange={(e) => onChange(e)} className="input">
        <FormControl name="password" className="center-text" placeholder="Password" />
      </InputGroup>
      <InputGroup onChange={(e) => onChange(e)} className="input">
        <FormControl name="confirm" className="center-text" placeholder="Confirm" />
      </InputGroup>
      <Button onClick={() => onClick()} className="button" variant="light">Connect</Button>
    </div>

    <div className="createLink">
      <p>or <br />
        <a>Create an account</a></p>
    </div>
  </div>
};


export default SecondPageRegister;
