import React from 'react';
import './Advert.css';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';


const Advert = (props: props) => {
  return <div className="Advert rounded">
    <div className="container">
      <h4 id="titleAdvert">{props.title}</h4>
      <p id="paragraphAdvert">{props.short}</p>
    </div>
    <Button onClick={() => props.select(props.index)} id="buttonAdvert">Learn more</Button>
  </div>
}

  ;

interface props { title: string, description: string, published: boolean, date: string, index: number, select: Function, short: string }

export default Advert;
