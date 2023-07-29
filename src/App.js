// App.js

import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import Profile from './Profile';

const App = () => {
  const user = useSelector((state) => state.auth.user);

  return <div>{user ? <Profile /> : <Login />}</div>;
};

export default App;
