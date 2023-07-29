// Profile.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      const fetchUserProfile = async () => {
        try {
          const response = await axios.get(`https://dummyjson.com/users/${user.id}`);
          // Assuming the user object returned contains all the user details
          dispatch({
            type: 'GET_USER_PROFILE',
            payload: response.data,
          });
        } catch (error) {
          // Handle any errors, if needed
        }
      };

      fetchUserProfile();
    }
  }, [dispatch, user]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      {/* Display other user information as needed */}
    </div>
  );
};

export default Profile;
