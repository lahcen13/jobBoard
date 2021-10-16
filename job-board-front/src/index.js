import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Login';
import Alert from './components/Alert/Alert';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Visitorpage from './components/Visitor-page/Visitor-page';
import AdvertPage from './components/AdvertPage/AdvertPage.tsx'
import UserProfil from './components/UserProfil/UserProfil';
import CompanyProfil from './components/CompanyProfil/CompanyProfil';
import CompanyPublish from './components/CompanyProfil/CompanyPublish/CompanyPublish';
import Register from './components/Register/Register';
import Admin from './components/Admin/Admin';
import CompanyRegister from './components/Company/Register/Register.tsx'
import authGuard from "./middleware/auth-gard"
import { getUser } from './functions/session';
import ManageUser from './components/Admin/manage/ManageUser/ManageUser';
import ManageAdverts from './components/Admin/manage/ManageAdverts/ManageAdverts';
import ManageCompanies from './components/Admin/manage/ManageCompanies/ManageCompanies';
import jwt from 'jwt-decode'
import getUserToken from './functions/getUserToken';
import AdminLogin from './components/Admin/AdminLogin/AdminLogin'
import CompanyLogin from './components/Company/Login/Login.tsx'


const Middleware = () => {

  useEffect(() => {
    // authGuard()
  })


  const admin = () => {
    const token = getUserToken()
    if (token) {
      const role = jwt(token).role
      if (role === 'admin') {
        return (
          <>
            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route path="/admin/users">
              <ManageUser />
            </Route>
            <Route path="/admin/adverts">
              <ManageAdverts />
            </Route>
            <Route path="/admin/companies">
              <ManageCompanies />
            </Route>
          </>
        )
      }
    }
  }


  const company = () => {
    const token = getUserToken()
    if (token) {
      const role = jwt(token).role
      if (role === 'company') {
        return (<>
          <Route exact path="/company">
            <CompanyProfil />
          </Route>
          <Route path="/company/publish">
            <CompanyPublish />
          </Route>
        </>)
      }
    }
  }


  const user = () => {
    const token = getUserToken()
    if (token) {
      const role = jwt(token).role
      if (role === 'user') {
        return (
          <>
            <Route path="/user/profile">
              <UserProfil />
            </Route>
          </>
        )
      }
    }
  }

  return <React.StrictMode>
    {authGuard()}
    <Router>
      <Route exact path="/">
        <Visitorpage />
      </Route>
      <Route path="/admin/login">
        <AdminLogin />
      </Route>

      <Route path="/company/login" >
        <CompanyLogin />
      </Route>
      <Route path="/company/register">
        <CompanyRegister />
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



      {user()}
      {admin()}

      {company()}



    </Router>
  </React.StrictMode>
}

ReactDOM.render(
  <Middleware />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
