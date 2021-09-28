import React, {useState} from 'react';
import './Login.css';
import {InputGroup, FormControl, Button} from 'react-bootstrap'



const Login = () => {
const [data, setData] = useState({email: "", password: ""})

const onChange = (e: any) => {
  setData({...data, [e.target.name]: e.target.value})
  console.log(data)
}

const onClick = () => {

}
  return <div className="login-container">
  <h1 className='title'>LogIn</h1>
  <div className="inputBlock">
   <InputGroup onChange={(e) => onChange(e)} className="input">
   <FormControl name="email" className="center-text" placeholder="Email" />
   </InputGroup>
   <InputGroup onChange={(e) => onChange(e)} className="input">
   <FormControl name="password" className="center-text" placeholder="Password" />
   </InputGroup>
  
   <Button onClick={() => onClick()} className="button" variant="light">Connect</Button>
  </div>
  
  <div className="createLink">
    <p>or</p>
    <p><a>Create an account</a></p>
  </div>
  </div>
};

export default Login;
