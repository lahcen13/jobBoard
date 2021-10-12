import React, { useState, useEffect } from 'react';
import styles from './Admin.module.css';
import Navbar from '../Navbar/Navbar';
import Statistic from './Statistic/Statistic'
import { Pencil, PersonDash } from 'react-bootstrap-icons';
import ManageAdverts from './manage/ManageAdverts/ManageAdverts';
import ManageCompanies from './manage/ManageCompanies/ManageCompanies';
import ManageUser from './manage/ManageUser/ManageUser';
import axios from "axios";
import getUserToken from '../../functions/getUserToken';

const Admin = () => {
  const [show, setShow] = useState("user");
  const [data, setData] = useState<any>({ count_adverts: 0, count_companies: 0, count_people: 0 })
  const token: string = getUserToken()
  const render = (param: string) => {
    setShow(param);
  }

  return <div className={styles.Admin}>
    <Navbar />
    <div className={'container ' + styles.container} >
      <Statistic render={(p: string) => render(p)} />
      <div className={styles.small}>
        {show == 'user' ? <ManageUser /> : ""}
        {show == 'adverts' ? <ManageAdverts /> : ""}
        {show == 'companies' ? <ManageCompanies /> : ""}</div>
    </div>
  </div >
};

export default Admin;
