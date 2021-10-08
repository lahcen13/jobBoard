import React, { useEffect, useState } from 'react';
import styles from './UserProfilAbout.module.css';
import { Person } from "react-bootstrap-icons";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { controleEmail, controleName } from '../../functions/FormControle.js';

import axios from 'axios';
import Alert from '../Alert/Alert';
import getUserToken from '../../functions/getUserToken';

import { getUser } from '../../functions/session'



const UserProfilAbout = (props: { notif: Function }) => {
  const [data, setData] = useState({ first_name: "", name: "", email: "", phone: "", city: "", postal_code: "", address: "", gender: "", id: getUser().id });
  // const [showAlertName, setShowAlertName] = useState(false);
  // const [showAlertlastName, setShowAlertlastName] = useState(false);
  // const [showAlertEmail, setShowAlertEmail] = useState(false);
  // const [ShowAlertCity, setShowAlertCity] = useState(false);
  const [email, setEmail] = useState(getUser().email);
  const [showAlertMailExist, setShowAlertMailExist] = useState(false);


  const token: string = getUserToken()

  if (!data.email) {
    axios.get('http://localhost:5000/user?email=' + email, {
      headers: {
        'content-type': 'application/json',
        "authorization": "Bearer " + getUserToken()
      }
    }).then(res => {
      setData(res.data)
    }).catch(err => {

    })
  }

  const onChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data)
  }

  const onClick = () => {
    axios.put('http://localhost:5000/user', data, {
      headers: {
        'content-type': 'application/json',
        "authorization": "Bearer " + getUserToken()
      }
    }).then(res => {
      props.notif({
        bg: 'success',
        show: true,
        head: 'Error',
        body: 'Your data has been updated with success'
      })
    }).catch(err => {
      switch (err.response.data) {
        case "email_exist":
          props.notif({
            bg: 'danger',
            show: true,
            head: 'Error',
            body: 'This user is already registered'
          })
          break;
        default:
          break;
      }
    })
  }





  return <div className="col-sm-12  col-md-4">

    <div className="UserProfilColumn rounded">
      <div className="row">
        <div className="col-sm-12  col-md-12">
          <Person size={36} id="personIcon"></Person>About
        </div>
        <div className="col-sm-5 col-md-6">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="LastName">
            <Form.Label>First name</Form.Label>
            <Form.Control name='first_name' type="text" value={data.first_name} />
          </Form.Group>
          {/* <div>{showAlertName && <Alert class=" bg-warning" text="Incorrect name" />}</div> */}

        </div>
        <div className="col-sm-5 col-md-6">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="LastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control name='name' type="text" value={data.name} />
          </Form.Group>
          {/* <div>{showAlertlastName && <Alert class=" bg-warning" text="Incorrect Lastname" />}</div> */}
        </div>
        <div className="col-sm-5  col-md-6">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" value={data.email} />
          </Form.Group>
          {/* <div>{showAlertEmail && <Alert class=" bg-warning" text="Incorrect email" />}</div> */}
        </div>
        <div className="col-sm-5  col-md-6">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control name='phone' type="tel" value={data.phone ? data.phone : ""} />
          </Form.Group>
        </div>
        <div className="col-sm-5 col-md-6">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="LastName">
            <Form.Label>City</Form.Label>
            <Form.Control name='city' type="text" value={data.city ? data.city : ""} />
          </Form.Group>
          {/* <div>{ShowAlertCity && <Alert class=" bg-warning" text="Wrong password or email adress" />}</div> */}

        </div>
        <div className="col-sm-5 col-md-6">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="postalCode">
            <Form.Label>Postal code</Form.Label>
            <Form.Control name='postal_code' type="text" value={data.postal_code ? data.postal_code : ""} />
          </Form.Group>

        </div>
        <div className="col-sm-12 col-md-12">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="adress">
            <Form.Label>Address</Form.Label>
            <Form.Control name='address' type="text" value={data.address ? data.address : ""} />
          </Form.Group>
        </div>
        <div className="col-sm-12 col-md-12">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="gender" >
            <Form.Label>Gender</Form.Label>
            <Form.Select name='gender' required>
              <option value={data.gender ? data.gender : ''}>Enter your gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className="col-sm-5 col-md-5">
          <Button onClick={() => onClick()} className={styles.submit}>Submit</Button>
        </div>
        <div className="col-sm-5 col-md-5">

        </div>
      </div>
    </div>
  </div>
};


export default UserProfilAbout;
