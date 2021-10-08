import React from 'react';
import List from '../List/List';
import styles from './ManageCompanies.module.css';
import SelectedCompanies from './SelectedCompanies/SelectedCompanies';

const ManageCompanies = () => {


  return <div className={styles.ParentsB}>
    <List list={"companies"}></List>
    <SelectedCompanies></SelectedCompanies>
  </div>
};

export default ManageCompanies;
