import React from 'react';
import styles from './ManageAdverts.module.css';
import List from '../List/List'
import SelectedAdverts from './SelectedAdverts/SelectedAdverts';


const ManageAdverts = () => {
  return <div className={styles.ParentsB}>
    <List list={"adverts"}></List>
    <SelectedAdverts></SelectedAdverts>
  </div>
};
export default ManageAdverts;
