import React from 'react';
import List from '../List/List';
import styles from './ManageUser.module.css';
import SelectedUser from './SelectedUser/SelectedUser';

const ManageUser = () => {
  return <div className={styles.ParentsB}>
    <List list={"user"} ></List>
    <SelectedUser></SelectedUser>
  </div>
};


export default ManageUser;
