import React, { useEffect, useState } from 'react';
import styles from './Notification.module.css';
import { Toast, ToastContainer } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image';
import { ToastPosition } from 'react-bootstrap/esm/ToastContainer';

const Notification = (props: props) => {


  useEffect(() => {

  })


  return (
    <div className={styles.Notification}>
      <ToastContainer position={props.position ? props.position : 'top-end'}>
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

interface props {
  bg: string,
  header: string,
  body: string,
  changeState: Function,
  isShown: boolean,
  time: number,
  position?: ToastPosition
}


export default Notification;
