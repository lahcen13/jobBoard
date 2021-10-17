import React, { useState, useEffect } from 'react';
import styles from './SelectedAdverts.module.css';
import Form from 'react-bootstrap/Form';
import { Button, Spinner } from 'react-bootstrap';
import axios from "axios";
import getUserToken from '../../../../../functions/getUserToken';

const SelectedAdverts = (props: any) => {
  const [data, setData] = useState<any>({ id: "", title: "", description: "", activity: "", salary: "", date: "", published: "" });
  const [id, setId] = useState<any>(null)
  const [notif, setNotif] = useState<any>(false)
  const token: string = getUserToken()
  const onChange = (e: any) => {
    setNotif(false);
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data)
  }



  useEffect(() => {
    console.log(data)
    if (id !== props.id) {
      axios.get(`http://localhost:5000/admin/select?table=advertisements&id=${props.id}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + token
        }
      }).then(res => {
        setData(res.data[0]);
        setId(res.data[0].id)
        var date = new Date(res.data[0].date)
        var datevalues = [
          date.getDate(),
          date.getMonth() + 1,
          date.getFullYear()
        ];
        var month = datevalues[1] >= 10 ? datevalues[1] : '0' + datevalues[1];
        var jour = datevalues[0] >= 10 ? datevalues[0] : '0' + datevalues[0];
        console.log(datevalues);
        setData({ ...res.data[0], date: datevalues[2] + '-' + month + '-' + jour })

      }).catch(err => console.error(err))
    }
  }, [props.id])

  const updateDB = () => {
    axios.put('http://localhost:5000/adverts/update', data, {
      headers: {
        'content-type': 'application/json',
        "authorization": "Bearer " + getUserToken()
      }
    }).then(res => {
      setNotif(true)
    }).catch(err => {
      console.log("error ")
    })
  }

  return data ? (<div className={styles.BoxC}>
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
      <div className="col-sm-5 col-md-5">
        <Button onClick={() => updateDB()} className={styles.submit}>Submit</Button>
      </div>
      {notif ? <div className={"col-sm-5 col-md-5 bg-success rounded center text-light " + styles.notifParent}> <h6 className={styles.notif}>Updated</h6>   </div> : ''}

    </div>
  </div >) : <> <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner> </>;
};
export default SelectedAdverts;
