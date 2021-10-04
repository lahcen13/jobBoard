import React, { useEffect, useState } from 'react';
import styles from './Notification.module.css';
import {Toast, ToastContainer} from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image';

const Notification = (props: {bg: string, header: string, body: string, changeState: Function, isShown: boolean, time: number}) => {


useEffect(() => {
  
})


  return (
    <div className={styles.Notification}>
      <ToastContainer position="top-end">
        <Toast onClose={() => props.changeState()} show={props.isShown} bg={props.bg} autohide delay={props.time} >
          <Toast.Header>
            {props.header}
          </Toast.Header>
          <Toast.Body>
          {props.body}
          </Toast.Body>
        </Toast>
  
      </ToastContainer>
    </div>
  )
};

export default Notification;
