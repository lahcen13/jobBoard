import React from 'react';
import './Visitor-page.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Visitorpage = () => (

  <div className="Visitor-page">

    <Link to="/login"><Button variant="primary" className="buttonFirstPage ">I want to find a job</Button> </Link><br />
    <Link to="/"><Button variant="primary" className="buttonFirstPage">I am a company</Button></Link>


  </div >
);

export default Visitorpage;
