import React, { useEffect, useState } from 'react';
import styles from './CompanyAbout.module.scss';
import { Person } from "react-bootstrap-icons";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { controleEmail, controleName, controlePhone, controlePostalCode } from '../../../functions/FormControle.js';
import axios from 'axios';
import Alert from '../../Alert/Alert';
import getUserToken from '../../../functions/getUserToken';
import { getUser } from '../../../functions/session'



const CompanyAbout = (props: { notif: Function }) => {
  const [data, setData] = useState({ id: "", siret: "", name: "", contact_name: "", number_employes: "", website: "", email: "", phone: "", city: "", postal_code: "", address: "" });
  // const [showAlertName, setShowAlertName] = useState(false);
  // const [showAlertlastName, setShowAlertlastName] = useState(false);
  // const [showAlertEmail, setShowAlertEmail] = useState(false);
  // const [ShowAlertCity, setShowAlertCity] = useState(false);
  const [id, setId] = useState(getUser().id);
  const [controlError, setControlError] = useState<string>(" ");
  const [notifUpdated, setNotifUpdated] = useState<string>(" ");
  const [showAlertMailExist, setShowAlertMailExist] = useState(false);
  const token: string = getUserToken()

  const formController = () => {
    setNotifUpdated(" ");
    if (!controleName(data.name) || data.name === '') {
      setControlError("Incorrect company name")
      return false
    }
    if (data.siret.length !== 14 || data.siret === '') {
      setControlError("Incorrect siret")
      return false
    }
    if (!controleName(data.contact_name) || data.contact_name === '') {
      setControlError("Incorrect contact name")
      return false
    }
    if (data.number_employes === '') {
      setControlError("Incorrect employes number")
      return false
    }
    if (data.website === '') {
      setControlError("Incorrect employes number")
      return false
    }
    if (!controleEmail(data.email) || data.email === '') {
      setControlError("Incorrect email")
      return false
    }
    if (data.phone.length > 14 || data.phone === '') {
      setControlError("Incorrect phone")
      return false
    }

    if (!controleName(data.city) || data.city === '') {
      setControlError("Incorrect city")
      return false
    }
    if (data.postal_code === '') {
      setControlError("Incorrect postal code")
      return false
    }

    if (data.address.trim() === '') {
      setControlError("Incorrect address")
      return false
    }
    return true;
  }

  if (!data.id) {
    axios.get('http://localhost:5000/company?id=' + getUser().id, {
      headers: {
        'content-type': 'application/json',
        "authorization": "Bearer " + getUserToken()
      }
    }).then(res => {
      console.log(res.data)
      setData(res.data)
    }).catch(err => {
    })
  }
  const onChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data)
  }

  const onClick = () => {

    if (formController()) {
      axios.put('http://localhost:5000/company/update', data, {
        headers: {
          'content-type': 'application/json',
          "authorization": "Bearer " + getUserToken()
        }
      }).then(res => {
        setControlError(" ");
        setNotifUpdated("Update successfull");
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
  }

  return <div className={"col-sm-12 col-md-6 " + styles.box}>
    <h1> Update </h1>
    <div className="rounded">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control name='name' type="text" value={data.name} />
          </Form.Group>
          {/* <div>{showAlertlastName && <Alert class=" bg-warning" text="Incorrect Lastname" />}</div> */}
        </div>
        <div className="col-sm-12 col-md-6">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="name">
            <Form.Label>Siret</Form.Label>
            <Form.Control name='siret' type="text" value={data.siret} />
          </Form.Group>
          {/* <div>{showAlertlastName && <Alert class=" bg-warning" text="Incorrect Lastname" />}</div> */}
        </div>
        <div className="col-sm-12 col-md-6">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="contact_name">
            <Form.Label>Contact name</Form.Label>
            <Form.Control name='contact_name' type="text" value={data.contact_name} />
          </Form.Group>
          {/* <div>{showAlertlastName && <Alert class=" bg-warning" text="Incorrect Lastname" />}</div> */}
        </div>
        <div className="col-sm-12  col-md-6">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number employes</Form.Label>
            <Form.Control name='number_employes' type="number" value={data.number_employes} />
          </Form.Group>
          {/* <div>{showAlertEmail && <Alert class=" bg-warning" text="Incorrect email" />}</div> */}
        </div>
        <div className="col-sm-12  col-md-6">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Web site</Form.Label>
            <Form.Control name='website' type="text" value={data.website} />
          </Form.Group>
          {/* <div>{showAlertEmail && <Alert class=" bg-warning" text="Incorrect email" />}</div> */}
        </div>
        <div className="col-sm-12  col-md-6">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" value={data.email} />
          </Form.Group>
          {/* <div>{showAlertEmail && <Alert class=" bg-warning" text="Incorrect email" />}</div> */}
        </div>
        <div className="col-sm-12  col-md-6">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control name='phone' type="number" value={data.phone ? data.phone : ""} />
          </Form.Group>
        </div>
        <div className="col-sm-12 col-md-6">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="LastName">
            <Form.Label>City</Form.Label>
            <Form.Control name='city' type="text" value={data.city ? data.city : ""} />
          </Form.Group>
          {/* <div>{ShowAlertCity && <Alert class=" bg-warning" text="Wrong password or email adress" />}</div> */}
        </div>
        <div className="col-sm-12 col-md-6">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="postalCode">
            <Form.Label>Postal code</Form.Label>
            <Form.Control name='postal_code' type="number" value={data.postal_code ? data.postal_code : ""} />
          </Form.Group>
        </div>
        <div className="col-sm-12 col-md-12">
          <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="adress">
            <Form.Label>Address</Form.Label>
            <Form.Control name='address' type="text" value={data.address ? data.address : ""} />
          </Form.Group>
        </div>


        <div className="row justify-content-between">
          <div className="col-sm-3 col-md-3">
            <Button onClick={() => onClick()} className={styles.submit}>Submit</Button>
          </div>
          {controlError !== " " ? <div className={"col-sm-12 col-md-7 bg-warning rounded " + styles.notif}> {controlError} </div> : ""}
          {notifUpdated !== " " ? <div className={"col-sm-12 col-md-7 bg-success rounded " + styles.notif}> {notifUpdated} </div> : ""}
        </div>

      </div>
    </div>
  </div>
};


export default CompanyAbout;
