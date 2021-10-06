import React, { useState } from 'react';
import styles from './Popup.module.css';
import { InputGroup, FormControl, Button, ButtonGroup } from 'react-bootstrap';
const Popup = (props: props) => {
  const [data, setData] = useState<popupData>({
    firstName: "",
    lastName: "",
    text: ""
  })

  const update = (e: any) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  
  return (
    <div className={styles.popup}>
      <h3>Submit your application</h3>
      <div className={styles.row}>
      <InputGroup  className={styles.input}>
        <FormControl onChange={(e: any) => update(e)} name="firstName" className="center-text" placeholder="First name" />
      </InputGroup>
      <InputGroup  className={styles.input}>
        <FormControl onChange={(e: any) => update(e)} name="lastName" className="center-text" placeholder="Last name" />
      </InputGroup>
      </div>
      <InputGroup  className={styles.input + " " + styles.textAera}>
        <FormControl onChange={(e: any) => update(e)} as="textarea" name="text"  placeholder="Last name" />
      </InputGroup>
      <InputGroup  className={styles.input + " " + styles.textAera}>
       <div className={styles.buttonGroup}>
        <Button onClick={() => props.valid(data)}>Submit</Button>
        <Button onClick={() => props.cancel()} className={styles.cancelButton}>Cancel</Button>
       </div>
      </InputGroup>
  </div>
  )
};


interface popupData {
  firstName: string,
  lastName: string,
  text: string
}
interface props {
  valid: Function,
  cancel: Function
}

export default Popup;
