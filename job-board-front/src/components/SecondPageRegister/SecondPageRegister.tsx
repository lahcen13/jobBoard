import React, { useState } from 'react';
import './SecondPageRegister.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import Alert from '../Alert/Alert';



const SecondPageRegister = (props: any) => {


  const onClick = () => {

  }
  return <div className="register-container">
    <h1 className='titleRegister'>Register</h1>
    <div className="inputBlock">
      <InputGroup onChange={(e) => props.update(e)} className="input">
        <FormControl name="email" className="center-text" placeholder="Email" />
      </InputGroup>
      <div>{props.showAlertEmail && <Alert class=" bg-warning" text="the [email] field must match patern 'john@domain.com'" />}</div>
      <InputGroup onChange={(e) => props.update(e)} className="input">
        <FormControl name="password" type="password" className="center-text" placeholder="Password" />
      </InputGroup>
      <div>{props.showAlertPassword && <Alert class=" bg-warning" text="'This field must contain at least one special character, one letter, one number and a uppercase letter.'" />}</div>
      <InputGroup onChange={(e) => props.update(e)} className="input">
        <FormControl name="confirm" type="password" className="center-text" placeholder="Confirm" />
      </InputGroup>
      <div>{props.showAlertConfirm && <Alert class=" bg-warning" text="The [confirm] field must be the same as [Password]." />}</div>
      <Button disabled={!props.disabled} onClick={() => props.onClick()} className="buttonRegister" variant="light">Register</Button>
    </div>
    <div className="createLink">
      <p>or <br />
        <a>Create an account</a></p>
    </div>
  </div>
};


export default SecondPageRegister;
