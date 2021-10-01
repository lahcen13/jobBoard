import React from 'react';
import './Advert.css';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';


const Advert = (props: {title: string, description: string, published: boolean, date: string}) => (
 
    <div className="Advert rounded">
      <div className="container">
        <h4 id="titleAdvert">{props.title}</h4>
        <p id="paragraphAdvert">{props.description.substring(0, 190)+"..."}</p>
      </div>
      <Button variant="primary" id="buttonAdvert">Learn more</Button>
    </div>
  
);

export default Advert;
