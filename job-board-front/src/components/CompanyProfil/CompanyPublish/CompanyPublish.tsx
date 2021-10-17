import React, { useEffect, useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import styles from './CompanyPublish.module.scss';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { controleEmail, controleName } from '../../../functions/FormControle.js';
import axios from 'axios';
import getUserToken from '../../../functions/getUserToken';
import { getUser } from '../../../functions/session';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import CloseButton from 'react-bootstrap/CloseButton';


const CompanyPublish = () => {
  const [data, setData] = useState<any>({ companie_id: getUser().id, title: "", description: "", short_description: "", salary: "" });
  const [show, setShow] = useState(false)
  const [controlError, setControlError] = useState<string>(" ");
  const [notifAdding, setNotifAdding] = useState<string>(" ");
  const token: string = getUserToken();

  const onChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const formController = () => {
    setNotifAdding(" ")
    if (data.title.length > 230 || data.title.trim() === "") {
      setControlError("Incorrect title length")
      return false
    }
    if (data.salary.trim() === "") {
      setControlError("Incorrect salary")
      return false
    }
    if (data.short_description.trim() === "") {
      setControlError("Incorrect short description")
      return false
    }
    if (data.description.length < 100 || data.description.trim() === "") {
      setControlError("too short description")
      return false
    }


    return true
  }

  const submit = () => {
    if (formController()) {
      axios.post('http://localhost:5000/company/publish', data, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + token
        }
      }).then(res => {
        console.log("success");
        setControlError(" ")
        setNotifAdding("Successfull adding");
      }).catch(err => console.log('error'));
    }
  }

  return <div className={styles.bg}>
    <Navbar></Navbar>
    <div className={styles.parent}>
      <div className="container">
        <div className={styles.child}>
          <div className="row justify-content-between">
            <div className="col-12 col-sm-12 col-md-5">
              <h4>Publish new advert</h4>
              <div className={"row " + styles.margin}>
                <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="name">
                  <Form.Label>Advert title</Form.Label>
                  <Form.Control name='title' type="text" maxLength={250} />
                </Form.Group>
              </div>
              <div className={"row"}>
                <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="name">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control type="number" name='salary' />
                </Form.Group>
              </div>
              <div className="row">
                <Form.Group onChange={(e) => onChange(e)} className="mb-3">
                  <Form.Label>Short description</Form.Label>
                  <Form.Control name="short_description" className={styles.textArea} as="textarea" rows={6} maxLength={254} />
                </Form.Group>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className="row">
                <div className="col-12">
                  <Form.Group onChange={(e) => onChange(e)} className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" className={styles.textArea} as="textarea" rows={13} />
                  </Form.Group>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-3">
                  <Button onClick={() => setShow(true)} > show</Button>
                </div>
                <div className="col-3">
                  <Button onClick={() => submit()}>add</Button>
                </div>
                <div className="col-3">
                  <Link to="/company"><Button variant="danger">back</Button></Link>
                </div>
                <div className="row ">
                  <div className="container">
                    {controlError !== " " ? <div className={"col-sm-12 col-md-12 bg-warning rounded " + styles.notif}> {controlError}</div> : ""}
                    {notifAdding !== " " ? <div className={"col-sm-12 col-md-12 bg-success rounded " + styles.notif}> {notifAdding}</div> : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {show ? <div className={"container " + styles.show}>  <CloseButton onClick={() => setShow(false)}></CloseButton> <div className={styles.showChild}> <ReactMarkdown>{data.description}</ReactMarkdown></div> </div> : " "}

  </div >
};
export default CompanyPublish;
