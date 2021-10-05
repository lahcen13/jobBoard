import React, { useEffect, useState } from 'react';
import styles from './UserProfilAbout.module.css';
import { Person } from "react-bootstrap-icons";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { controleEmail, controleName } from '../../functions/FormControle.js';
import Notification from "../Notification/Notification";
import axios from 'axios';
import Alert from '../Alert/Alert';
import getUserToken from '../../functions/getUserToken'




const UserProfilAbout = (props: any) => {
  const [data, setData] = useState({ first_name: "", name: "", email: "", phone: "", city: "", postal_code: "", address: "", gender: "" });
  const [showAlertName, setShowAlertName] = useState(false);
  const [showAlertlastName, setShowAlertlastName] = useState(false);
  const [showAlertEmail, setShowAlertEmail] = useState(false);
  const [ShowAlertCity, setShowAlertCity] = useState(false);
  const [email, setEmail] = useState("hah@gmail.Com");
  const [showAlertMailExist, setShowAlertMailExist] = useState(false);
  const [noti, setNoti] = useState<any>(null)
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
      console.error(err)
    })
  }
  const onChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const onClick = () => {
    axios.put('http://localhost:5000/user', data, {
      headers: { 'content-type': 'application/json' }
    }).then(res => {
      console.log('success')
    }).catch(err => {
      console.log("error")
      console.error(err.response)

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
            <Form.Control name='name' type="text" value={data.first_name} />
          </Form.Group>
          <div>{showAlertName && <Alert class=" bg-warning" text="Incorrect name" />}</div>

        </div>
        <div className="col-sm-5 col-md-6">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="LastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control name='lastName' type="text" value={data.name} />
          </Form.Group>
          <div>{showAlertlastName && <Alert class=" bg-warning" text="Incorrect Lastname" />}</div>
        </div>
        <div className="col-sm-5  col-md-6">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" value={data.email} />
          </Form.Group>
          <div>{showAlertEmail && <Alert class=" bg-warning" text="Incorrect email" />}</div>
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
          <div>{ShowAlertCity && <Alert class=" bg-warning" text="Wrong password or email adress" />}</div>

        </div>
        <div className="col-sm-5 col-md-6">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="postalCode">
            <Form.Label>Postal code</Form.Label>
            <Form.Control name='postalCode' type="text" value={data.postal_code ? data.postal_code : ""} />
          </Form.Group>

        </div>
        <div className="col-sm-12 col-md-12">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="adress">
            <Form.Label>Address</Form.Label>
            <Form.Control name='adress' type="text" value={data.address.length > 0 ? data.address : ""} />
          </Form.Group>
        </div>
        <div className="col-sm-12 col-md-12">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="gender" >
            <Form.Label>Gender</Form.Label>
            <Form.Select name='Gender' aria-label="Gender">
              <option value="1"></option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className="col-sm-5 col-md-5">
          <Button onClick={() => onClick()} className={styles.submit}>Submit</Button>
        </div>

      </div>
    </div>
  </div>
};


export default UserProfilAbout;
