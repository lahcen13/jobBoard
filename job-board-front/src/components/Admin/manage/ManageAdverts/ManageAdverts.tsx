import React, { useState, useEffect } from 'react';
import styles from './ManageAdverts.module.css';
import List from '../List/List'
import SelectedAdverts from './SelectedAdverts/SelectedAdverts';


const ManageAdverts = () => {
  const [IdAdvert, setIdAdvert] = useState<any>(null)
  useEffect(() => {

  })
  return <div className={styles.ParentsB}>
    <List list={"adverts"} id={(data: any) => setIdAdvert(data)}></List>
    <span className={styles.gap}></span>
    <SelectedAdverts id={IdAdvert}></SelectedAdverts>
  </div>
};
export default ManageAdverts;
