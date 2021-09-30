import axios from 'axios';
import React, { useState } from 'react';
import FirstPageRegister from '../FirstPageRegister/FirstPageRegister';
import SecondPageRegister from '../SecondPageRegister/SecondPageRegister';
import styles from './Register.module.css';

const Register = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: ''
  })


  const submit = () => {
    axios.post('http://localhost:5000/register', data, {
      headers: {'content-type': 'application/json'}
    }).then(res => {
      console.log(res.data)
    }).catch(err => console.error(err))
  }
  // {name: "value"}
  const updateData = (input: any) => {
    setData({ ...data, [input.target.name]: input.target.value })
    console.log(data)
  }
  return (<div className={styles.Register}>
    {step == 1 ? <FirstPageRegister update={(input: any) => updateData(input)} onClick={() => setStep(2)} /> : <SecondPageRegister onClick={() => submit()} update={(input: any) => updateData(input)} />}
  </div>)
};


export default Register;
