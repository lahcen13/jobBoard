import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Login';
import FirstPageRegister from './components/FirstPageRegister/FirstPageRegister';
import SecondPageRegister from './components/SecondPageRegister/SecondPageRegister';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/firstPageRegister">
        <FirstPageRegister />
      </Route>
      <Route path="/secondPageRegister">
        <SecondPageRegister />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
