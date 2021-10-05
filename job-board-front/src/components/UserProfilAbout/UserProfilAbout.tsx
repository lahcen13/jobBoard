import React from 'react';
import styles from './UserProfilAbout.module.css';
import { Person } from "react-bootstrap-icons";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const UserProfilAbout = (props: any) => (
  <div className="col-sm-12  col-md-4">
    <div className="UserProfilColumn rounded">
      <div className="row">
        <div className="col-sm-12  col-md-12">

          <Person size={36} id="personIcon"></Person>About
        </div>
        <div className="col-sm-5 col-md-6">
          <Form.Group className="mb-3" controlId="LastName">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

        </div>
        <div className="col-sm-5 col-md-6">
          <Form.Group className="mb-3" controlId="LastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>
        </div>
        <div className="col-sm-5  col-md-6">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </div>
        <div className="col-sm-5  col-md-6">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" placeholder="Enter phone number" />
          </Form.Group>
        </div>
        <div className="col-sm-5 col-md-6">
          <Form.Group className="mb-3" controlId="LastName">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" />
          </Form.Group>

        </div>
        <div className="col-sm-5 col-md-6">
          <Form.Group className="mb-3" controlId="LastName">
            <Form.Label>Postal code</Form.Label>
            <Form.Control type="text" placeholder="Enter postal code" />
          </Form.Group>
        </div>
        <div className="col-sm-12 col-md-12">
          <Form.Group className="mb-3" controlId="LastName">
            <Form.Label>Adress</Form.Label>
            <Form.Control type="text" placeholder="Exemple : 2 bd Cauvière" />
          </Form.Group>
        </div>
        <div className="col-sm-12 col-md-12">
          <Form.Select aria-label="Gender">
            <option value="1"></option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </Form.Select>
        </div>
        <div className="col-sm-5 col-md-5">
          <Button className={styles.submit}>Submit</Button>
        </div>

      </div>
    </div>
  </div>
);

export default UserProfilAbout;
