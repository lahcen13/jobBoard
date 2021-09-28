import React from 'react';
import './Advert.css';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';


const Advert = () => (
  <div className="container">
    <div className="Advert rounded">
      <div className="container">
        <h3 id="titleAdvert">Hello le people</h3>
        <p id="paragraphAdvert">  Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Proin eget tortor risus.  Proin eget tortor risus.  Proin eget tortor risus.  Proin eget tortor risus.  </p>
      </div>
      <Button variant="primary" id="buttonAdvert">Primary</Button>
    </div>
  </div>
);

export default Advert;
