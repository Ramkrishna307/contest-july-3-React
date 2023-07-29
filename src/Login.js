// Login.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './authActions';
import './login.css'; 

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state) => state.auth.error);

  const handleLogin = () => {
    dispatch(login(username, password));
  };

  return (
    <div>
        <h4>Welcome Back</h4>
      <h1>Login to your Account</h1>
      <input id='input1'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Continue</button>
      <p>Forget Password</p>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
