import React from 'react';
import List from '../List/List';
import styles from './ManageUser.module.css';
import SelectedUser from './SelectedUser/SelectedUser';

const ManageUser = () => (
  <div className={styles.ParentsB}>
    <List></List>
    <SelectedUser></SelectedUser>
  </div>
);

export default ManageUser;
