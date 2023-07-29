// authActions.js

import axios from 'axios';

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('https://dummyjson.com/auth/login', {
      username,
      password,
    });

    if (response.status === 200) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: response.data,
      });
    }
  } catch (error) {
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: error.response.data.message,
    });
  }
};
