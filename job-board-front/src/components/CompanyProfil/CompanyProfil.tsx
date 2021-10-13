import React, { useState } from 'react';
import styles from './CompanyProfil.module.scss';
import Navbar from '../Navbar/Navbar';
import Notification from "../Notification/Notification";
import CompanyAbout from "./CompanyAbout/CompanyAbout";
import CompanyAdverts from "./CompanyAdverts/CompanyAdverts";


const CompanyProfil = () => {
  const [noti, setNoti] = useState<any>(null)
  const closeNotification = () => {
    setNoti({ ...noti, show: false })
  }
  return <div className={styles.CompanyProfil}>
    {noti && <Notification position='bottom-end' time={4000} changeState={() => closeNotification()} bg={noti.bg} isShown={noti.show} header={noti.head} body={noti.body} />}
    <Navbar></Navbar>
    <div className={"container " + styles.boxMarginTop}>
      <div className="row justify-content-between">
        <CompanyAbout notif={(data: any) => setNoti(data)} />
        <CompanyAdverts />
      </div >
    </div >
  </div>
};

export default CompanyProfil;
