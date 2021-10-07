import React from 'react';
import styles from './Statistic.module.css';
import { Building, PencilSquare, People } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

const Statistic = (props: props) => {
  return <div className={styles.ParentA}>
    <div className={styles.box}>
      <h3 className={styles.h3} > Users</h3>
      <h1 className={styles.h1}> {props.Users}  <People /></h1>
      <Button className={styles.Button} > Manage </Button>
    </div>

    <div className={styles.box}>
      <h3 className={styles.h3} > Adverts </h3>
      <h1 className={styles.h1}> {props.Adverts}  <PencilSquare /> </h1>
      <Button className={styles.Button} > Manage </Button>
    </div>

    <div className={styles.box}>
      <h3 className={styles.h3} > Companies</h3>
      <h1 className={styles.h1}> {props.Companies}  <Building /></h1>
      <Button className={styles.Button} > Manage </Button>

    </div>
  </div>
};
interface props {
  Users: number,
  Adverts: number,
  Companies: number
}

export default Statistic;
