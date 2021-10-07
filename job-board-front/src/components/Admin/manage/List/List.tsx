import React from 'react';
import styles from './List.module.css';
import { Pencil, PersonDash } from 'react-bootstrap-icons';

const List = () => (
  <div className={styles.BoxA} >
    <div className={'rounded ' + styles.list}>
      <h3 className={styles.h3}> test</h3>
      <Pencil className={styles.icons} color='white' size={30}></Pencil>
      <div className={styles.margin}>
        <PersonDash className={styles.icons} color='white' size={30}></PersonDash>
      </div>
    </div>
    <div className={'rounded ' + styles.list}>
      <h3 className={styles.h3}> test</h3>
      <Pencil className={styles.icons} color='white' size={30}></Pencil>
      <div className={styles.margin}>
        <PersonDash className={styles.icons} color='white' size={30}></PersonDash>
      </div>
    </div>
    <div className={'rounded ' + styles.list}>
      <h3 className={styles.h3}> test</h3>
      <Pencil className={styles.icons} color='white' size={30}></Pencil>
      <div className={styles.margin}>
        <PersonDash className={styles.icons} color='white' size={30}></PersonDash>
      </div>
    </div>
  </div>
);

export default List;
