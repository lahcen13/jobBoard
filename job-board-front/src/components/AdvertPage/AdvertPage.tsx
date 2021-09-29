import React, {useEffect} from 'react';
import classes from './AdvertPage.module.css';
import axios from "axios"

const AdvertPage = () => {
  useEffect(() => {
    console.log("useEffect")
    axios.get('http://localhost:5000/adverts')
    .then(res => {
      console.log(res)
    }).catch(err => console.error(err))
  })
 return ( <div className={classes.AdvertPage}>
  AdvertPage Component
</div>)
};

export default AdvertPage;
