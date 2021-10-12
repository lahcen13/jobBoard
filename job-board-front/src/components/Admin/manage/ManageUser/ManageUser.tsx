import React, { useState } from 'react';
import List from '../List/List';
import styles from './ManageUser.module.css';
import SelectedUser from './SelectedUser/SelectedUser';

const ManageUser = () => {
  const [IdUser, setIdUser] = useState<any>(null)
  return <div className={styles.ParentsB}>
    <List list={"user"} id={(data: any) => setIdUser(data)} ></List>
    <span className={styles.gap}></span>
    <SelectedUser id={IdUser} />
  </div>
};


export default ManageUser;
