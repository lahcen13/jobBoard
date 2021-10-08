import React, { useState } from 'react';
import styles from './SelectedAdverts.module.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const SelectedAdverts = () => {
  const [data, setData] = useState({ id: "", title: "", description: "", activity: "", salary: "", date: "", published: "" });
  const onChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data)
  }
  return <div className={styles.BoxC}>
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="name">
          <Form.Label>Title</Form.Label>
          <Form.Control name='title' type="text" value={data.title} />
        </Form.Group>
        {/* <div>{showAlertlastName && <Alert class=" bg-warning" text="Incorrect Lastname" />}</div> */}
      </div>
      <div className="col-sm-12  col-md-6">
        <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="gender" >
          <Form.Label>Published status</Form.Label>
          <Form.Select name='published' required>
            <option value={data.published}>Default value</option>
            <option value="0">Published</option>
            <option value="1">Unpublished</option>
          </Form.Select>
        </Form.Group>
        {/* <div>{showAlertEmail && <Alert class=" bg-warning" text="Incorrect email" />}</div> */}
      </div>
      <div className="col-sm-12  col-md-6">
        <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="formBasicEmail">
          <Form.Label>Salary</Form.Label>
          <Form.Control name='salary' type="number" value={data.salary} />
        </Form.Group>
        {/* <div>{showAlertEmail && <Alert class=" bg-warning" text="Incorrect email" />}</div> */}
      </div>
      <div className="col-sm-12  col-md-6">
        <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="formBasicEmail">
          <Form.Label>Published date</Form.Label>
          <Form.Control name='date' type="date" value={data.date} />
        </Form.Group>
        {/* <div>{showAlertEmail && <Alert class=" bg-warning" text="Incorrect email" />}</div> */}
      </div>
      <div className="col-sm-12 col-md-12">
        <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="contact_name">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} name='description' value={data.description} />
        </Form.Group>
        {/* <div>{showAlertlastName && <Alert class=" bg-warning" text="Incorrect Lastname" />}</div> */}
      </div>
      <div className="col-sm-12 col-md-12">
        <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="contact_name">
          <Form.Label>Activities</Form.Label>
          <Form.Control as="textarea" rows={2} name='activity' type="text" value={data.activity} />
        </Form.Group>
        {/* <div>{showAlertlastName && <Alert class=" bg-warning" text="Incorrect Lastname" />}</div> */}
      </div>


      <div className="col-sm-5 col-md-5">
        <Button className={styles.submit}>Submit</Button>
      </div>
    </div>
  </div >
};
export default SelectedAdverts;
