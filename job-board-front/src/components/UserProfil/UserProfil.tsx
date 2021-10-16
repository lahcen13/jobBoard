import React, { useState } from 'react';
import styles from './UserProfil.module.css';
import Navbar from '../Navbar/Navbar';
import UserProfilImage from "../UserProfilImg/UserProfilImg";
import UserProfilAbout from "../UserProfilAbout/UserProfilAbout";
import UserProfilApplied from "../UserProfilApplied/UserProfilApplied";
import Notification from "../Notification/Notification";



const UserProfil = () => {
  const [noti, setNoti] = useState<any>(null)
  const closeNotification = () => {
    setNoti({ ...noti, show: false })
  }


  return <div className="UserProfilBG">
    {noti && <Notification position='bottom-end' time={4000} changeState={() => closeNotification()} bg={noti.bg} isShown={noti.show} header={noti.head} body={noti.body} />}
    <Navbar></Navbar>
    <div className={styles.UserProfil}>
      <div className="row justify-content-around">
       
        <UserProfilAbout notif={(data: any) => setNoti(data)} />
        <UserProfilApplied />
      </div >
    </div >
  </div >
};

export default UserProfil;
