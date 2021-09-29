import React, { useState } from 'react';
import FirstPageRegister from '../FirstPageRegister/FirstPageRegister';
import SecondPageRegister from '../SecondPageRegister/SecondPageRegister';
import styles from './Register.module.css';

const Register = () => {
  const [step, setStep] = useState(1);
  return (<div className={styles.Register}>
    {step == 1 ? <FirstPageRegister onClick={() => setStep(2)} /> : <SecondPageRegister />};
  </div>)
};


export default Register;
