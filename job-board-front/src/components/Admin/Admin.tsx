import React from 'react';
import styles from './Admin.module.css';
import Navbar from '../Navbar/Navbar';
import Statistic from './Statistic/Statistic'
import { Pencil, PersonDash } from 'react-bootstrap-icons';
import ManageAdverts from './manage/ManageAdverts/ManageAdverts';
import ManageCompanies from './manage/ManageCompanies/ManageCompanies';
import ManageUser from './manage/ManageUser/ManageUser';


const Admin = () => {
  return <div className={styles.Admin}>
    <Navbar />
    <div className={'container ' + styles.container} >
      <Statistic Users={342} Adverts={32} Companies={12} />
      <ManageAdverts></ManageAdverts>
    </div>
  </div >
};

export default Admin;
