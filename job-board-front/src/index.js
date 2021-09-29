import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Login';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Visitorpage from './components/Visitor-page/Visitor-page';
import AdvertPage from './components/AdvertPage/AdvertPage.tsx'
import Register from './components/Register/Register';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/">
        <Visitorpage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>

      <Route path="/adverts">
        <AdvertPage />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
