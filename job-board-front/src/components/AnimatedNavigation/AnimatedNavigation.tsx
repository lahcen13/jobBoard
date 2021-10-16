import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Building, Person, Power, SdCard } from 'react-bootstrap-icons';
import getUserToken from '../../functions/getUserToken';
import { remove } from '../../functions/session';
import styles from './AnimatedNavigation.module.scss';

const AnimatedNavigation = (props: {
  animState: any
}) => {



  const render = () => {
    const token = getUserToken()
    if (token) {
      const obj: { role: string } = jwtDecode(token)
      console.log(obj)
      if (obj.role === 'company') {
        return <>
          <Building onClick={() => window.location.href = '/company'} />
          <Power onClick={() => remove()} className={styles.power} />
        </>
      }

      if (obj.role === 'user') {
        return <>
          <Person onClick={() => window.location.href = '/user/profile'} className={styles.person} />
          <Power onClick={() => remove()} className={styles.power} />
        </>
      }

      if (obj.role === 'admin') {
        return <>
          <Person onClick={() => window.location.href = '/admin'} className={styles.person} />
          <Power onClick={() => remove()} className={styles.power} />
        </>
      }
    } else {
      return
    }
  }
  render()

  return <div className={styles.open}>
    {render()}

  </div>
};

export default AnimatedNavigation;
