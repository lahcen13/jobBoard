import React, { useState, useEffect } from 'react';
import styles from './SelectedCompanies.module.css';
import Form from 'react-bootstrap/Form';
import { Button, Spinner } from 'react-bootstrap';
import axios from "axios";
import getUserToken from '../../../../../functions/getUserToken';


const SelectedCompanies = (props: any) => {
  const [data, setData] = useState({ name: "", contact_name: "", number_employes: "", website: "", email: "", phone: "", city: "", postal_code: "", address: "", activities: "", id: "" });
  const token: string = getUserToken()
  const [id, setId] = useState<any>(null)

  useEffect(() => {
    console.log(data)
    if (id !== props.id) {
      axios.get(`http://localhost:5000/admin/select?table=companies&id=${props.id}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + token
        }
      }).then(res => {
        setId(res.data[0].id)
        setData(res.data[0]);
      }).catch(err => console.error(err))
    }
  })

  const updateDB = () => {
    axios.put('http://localhost:5000/company/update', data, {
      headers: {
        'content-type': 'application/json',
        "authorization": "Bearer " + getUserToken()
      }
    }).then(res => {
      console.log("success")
    }).catch(err => {
      console.log("error ")
    })
  }

  const onChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data)
  }
  
  return data ? (<div className={styles.BoxC}>
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control name='name' type="text" value={data.name ? data.name : ""} />
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
          <Form.Control name='phone' type="tel" value={data.phone ? data.phone : ""} />
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
        <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Activites</Form.Label>
          <Form.Control as="textarea" rows={3} name="activities" value={data.activities ? data.activities : ""} />
        </Form.Group>
      </div>
      
      <div className="col-sm-5 col-md-5">
        <Button onClick={() => updateDB()} className={styles.submit}>Submit</Button>
      </div>
    </div>
  </div>) : <> <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner> </>;
};

export default SelectedCompanies;
