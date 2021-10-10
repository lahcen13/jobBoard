import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Register.module.scss';
import StepWrapper from './StepWrapper/StepWrapper';

const Register = () => (
  <div className={styles.Register}>
   <Navbar />
   <StepWrapper />
  </div>
);

export default Register;
