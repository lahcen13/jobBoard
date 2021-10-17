import React, { useState, useEffect } from 'react';
import styles from './SelectedUser.module.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import axios from "axios";
import getUserToken from '../../../../../functions/getUserToken';

const SelectedUser = (props: any) => {

  const [data, setData] = useState({ id: "", first_name: "", name: "", email: "", phone: "", city: "", postal_code: "", address: "", gender: "", birth_date: "", role: "", cv: "", picture: "" });
  const token: string = getUserToken();
  const [notif, setNotif] = useState<any>(false);
  const [id, setId] = useState<any>(null);

  console.log(props.id)

  useEffect(() => {
    console.log(data)
    if (id !== props.id) {
      axios.get(`http://localhost:5000/admin/select?table=people&id=${props.id}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + token
        }
      }).then(res => {
        setData(res.data[0]);
        setId(res.data[0].id)
        var date = new Date(res.data[0].birth_date)
        var datevalues = [
          date.getDate(),
          date.getMonth() + 1,
          date.getFullYear()
        ];
        var month = datevalues[1] >= 10 ? datevalues[1] : '0' + datevalues[1];
        var jour = datevalues[0] >= 10 ? datevalues[0] : '0' + datevalues[0];
        console.log('date est :' + datevalues[2] + '-' + month + '-' + jour);
        setData({ ...res.data[0], birth_date: datevalues[2] + '-' + month + '-' + jour })

      }).catch(err => console.error(err))
    }
  })

  const updateDB = () => {
    axios.put('http://localhost:5000/user', data, {
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

  const onChange = (e: any) => {
    setNotif(false);
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data)
  }
  return <div className={styles.BoxC}>
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="LastName">
          <Form.Label>First name</Form.Label>
          <Form.Control name='first_name' type="text" value={data.first_name} />
        </Form.Group>
        {/* <div>{showAlertName && <Alert class=" bg-warning" text="Incorrect name" />}</div> */}

      </div>
      <div className="col-sm-12 col-md-6">
        <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="LastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control name='name' type="text" value={data.name} />
        </Form.Group>
        {/* <div>{showAlertlastName && <Alert class=" bg-warning" text="Incorrect Lastname" />}</div> */}
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
        <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="postalCode">
          <Form.Label>Birth date</Form.Label>
          <Form.Control name='birth_date' type="date" value={data.birth_date ? data.birth_date : ""} />
        </Form.Group>
      </div>
      <div className="col-sm-12 col-md-6">
        <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="gender" >
          <Form.Label>Gender</Form.Label>
          <Form.Select name='gender' required>
            <option value={data.gender ? data.gender : ''}>default gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className="col-sm-12 col-md-6">
        <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="gender" >
          <Form.Label>Role</Form.Label>
          <Form.Select name='role' required>
            <option value="User">User</option>
            <option value="Male">Admin</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div className="col-sm-12 col-md-12">
        <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="adress">
          <Form.Label>Curriculum vitæ</Form.Label>
          <Form.Control name='cv' type="text" value={data.cv ? data.cv : ""} />
        </Form.Group>
        <Form.Group onChange={(e) => onChange(e)} className="mb-3" controlId="adress">
          <Form.Label>Picture</Form.Label>
          <Form.Control name='picture' type="text" value={data.picture ? data.picture : ""} />
        </Form.Group>
      </div>
      <div className="col-sm-5 col-md-5">
        <Button className={styles.submit} onClick={() => updateDB()} >Submit</Button>
      </div>
      {notif ? <div className={"col-sm-5 col-md-5 bg-success rounded center text-light " + styles.notifParent}> <h6 className={styles.notif}>Updated</h6>   </div> : ''}
    </div>
  </div>
};

export default SelectedUser;
