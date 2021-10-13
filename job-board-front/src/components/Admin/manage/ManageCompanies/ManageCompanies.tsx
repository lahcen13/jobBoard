import React, { useState } from 'react';
import List from '../List/List';
import styles from './ManageCompanies.module.css';
import SelectedCompanies from './SelectedCompanies/SelectedCompanies';

const ManageCompanies = () => {
  const [IdCompanie, setIdCompanie] = useState<any>(null)

  return <div className={styles.ParentsB}>
    <List list={"companies"} id={(data: any) => setIdCompanie(data)}></List>
    <span className={styles.gap}></span>
    <SelectedCompanies id={IdCompanie}></SelectedCompanies>
  </div>
};

export default ManageCompanies;
