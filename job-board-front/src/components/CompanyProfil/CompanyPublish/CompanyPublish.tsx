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
  const [data, setData] = useState<any>({ companie_id: "1", title: "", description: "", short_description: "", salary: "" });
  const [show, setShow] = useState(false)
  const token: string = getUserToken();

  const [test, setTest] = useState<string>("##hello");
  useEffect(() => { })
  const onChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }
  const submit = () => {
    axios.post('http://localhost:5000/company/publish', data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + token
      }
    }).then(res => {
      console.log("success");
    }).catch(err => console.log('error'));
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
                  <Form.Control name='title' type="text" step="100" min="0" />
                </Form.Group>
              </div>
              <div className={"row"}>
                <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="name">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control name='salary' type="number" step="100" min="0" />
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
                    <Form.Control name="description" className={styles.textArea} as="textarea" rows={15} />
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
                  <Link to="/company/profil"><Button variant="danger">back</Button></Link>
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
