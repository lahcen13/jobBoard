import React, { useState } from 'react';
import './FirstPageRegister.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';

const FirstPageRegister = (props: any) => {
  const [data, setData] = useState({ firstName: "", lastName: "" })

  const onChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data)
  }
  const onClick = () => {
    props.onClick()
  }

  return <div className="register-container">
    <h1 className='title'>Register</h1>
    <div className="inputBlock">
      <InputGroup onChange={(e) => onChange(e)} className="input">
        <FormControl name="firstName" className="center-text" placeholder="FirstName" />
      </InputGroup>
      <InputGroup onChange={(e) => onChange(e)} className="input">
        <FormControl name="lastName" className="center-text" placeholder="LastName" />
      </InputGroup>
      <Button onClick={() => onClick()} className="button" variant="light">Continue</Button>
    </div>
    <div className="createLink">
      <p>or</p>
      <p><a>i already have an account</a></p>
    </div>
  </div>
};

export default FirstPageRegister;
