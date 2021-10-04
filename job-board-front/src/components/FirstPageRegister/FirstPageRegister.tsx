import React, { useState } from 'react';
import './FirstPageRegister.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';
import Alert from '../Alert/Alert';


const FirstPageRegister = (props: any) => {
  const onClick = () => {
    props.onClick()
  }

  return <div className="register-container">

    <h1 className='titleRegister'>Register</h1>
    <div className="inputBlock">

      <InputGroup onChange={(e) => props.update(e)} className="input">
        <FormControl name="firstName" className="center-text" placeholder="FirstName" />
      </InputGroup>
      <div>{props.showAlertPrenom && <Alert class=" bg-warning" text="Wrong characters used for the last name" />}</div>

      <InputGroup onChange={(e) => props.update(e)} className="input">
        <FormControl name="lastName" className="center-text" placeholder="LastName" />
      </InputGroup>
      <div>{props.showAlertName && <Alert class=" bg-warning" text="Wrong characters used for the last name" />}</div>

      <Button disabled={!props.disabled} onClick={() => onClick()} className="buttonRegister" variant="light">Continue</Button>
    </div>

    <div className="createLink">
      <p>or</p>
      <p><a>i already have an account</a></p>
    </div>
  </div>
};

export default FirstPageRegister;
