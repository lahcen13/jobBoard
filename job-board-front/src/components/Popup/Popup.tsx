import React from 'react';
import styles from './Popup.module.css';
import { InputGroup, FormControl, Button, ButtonGroup } from 'react-bootstrap';
const Popup = () => {
  return (
    <div className={styles.popup}>
      <h3>Submit your application</h3>
      <div className={styles.row}>
      <InputGroup  className={styles.input}>
        <FormControl name="firstName" className="center-text" placeholder="First name" />
      </InputGroup>
      <InputGroup  className={styles.input}>
        <FormControl name="lastName" className="center-text" placeholder="Last name" />
      </InputGroup>
      </div>
      <InputGroup  className={styles.input + " " + styles.textAera}>
        <FormControl as="textarea" name="lastName"  placeholder="Last name" />
      </InputGroup>
      <InputGroup  className={styles.input + " " + styles.textAera}>
       <div className={styles.buttonGroup}>
        <Button>Submit</Button>
        <Button className={styles.cancelButton}>Cancel</Button>
       </div>
      </InputGroup>
  </div>
  )
};

export default Popup;
