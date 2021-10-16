import React from 'react';
import styles from './UserProfilImg.module.css';

const UserProfilImg = (props: any) => (
  <div className=" col-12 col-sm-12 col-md-3">
    <div className="UserProfilColumn rounded">
      <div className="row">
        <div className="col-sm-12 col-md-12 containerImageUserProfil">
          <img src={props.img} className="img-fluid PictureUserProfil" alt='Profil picture'></img>
        </div>
        <div className="col-sm-12 col-md-12 containerUploadUserProfil">
          <div className='uploadImgButton'> Upload Image</div>
        </div>
        <div className="row justify-content-between containerNameGender">
          {/* <div className="col-2 col-sm-4 col-md-4 ">
            {props.name}
          </div>
          <div className=" col-2 col-sm-2 col-md-2 ">
            {props.gender}
          </div> */}
        </div>
      </div>
    </div>
  </div>
);

export default UserProfilImg;
