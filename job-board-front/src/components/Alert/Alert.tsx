import React from 'react';
import './Alert.css';
import Toast from 'react-bootstrap/Toast'

const Alert = (prop: any) => (

  <div className={prop.background}>
    <Toast className="bg-warning" >
      <Toast.Body className="text-white textAlert"> {prop.text}</Toast.Body>
    </Toast>
  </div >
);

export default Alert;
