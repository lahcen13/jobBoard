import React from 'react';
import './Advert.css';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';


const Advert = (props: {title: string, description: string, published: boolean, date: string}) => (
  <div className="container">
    <div className="Advert rounded">
      <div className="container">
        <h3 id="titleAdvert">{props.title}</h3>
        <p id="paragraphAdvert">{props.description}</p>
      </div>
      <Button variant="primary" id="buttonAdvert">Learn more</Button>
    </div>
  </div>
);

export default Advert;
