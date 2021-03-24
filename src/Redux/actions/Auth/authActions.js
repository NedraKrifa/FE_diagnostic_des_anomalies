import axios from 'axios';
import { getErrors } from '../Errors/errorsActions';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from './authTypes'

import tokenConfig from './authUtils';

// Load User
export const loadUser = () => (dispatch, getState) => {

    dispatch({ type: USER_LOADING });
  
    axios
      .get("/api/users/user", tokenConfig(getState))
      .then((res) =>
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch(getErrors(err.response.data, err.response.status));
        dispatch({
          type: AUTH_ERROR,
        });
      });
  };

// Register User
export const register = ({username, email, password, confirmPassword}) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
      username,
      email, 
      password,
      confirm_password: confirmPassword,
    });

    axios
    .post('/api/users/register', body, config)
    .then((res) => 
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        })
    )
    .catch ((err) => {
        dispatch(
            getErrors(err.response.data, err.response.status, "REGISTER_FAIL")
        );
        dispatch({
        type: REGISTER_FAIL,
        });
  });
};

// Login User
export const login = ({username, password}) => (dispatch) => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({username, password});

    axios
    .post('/api/users/login', body, config)
    .then((res)=>
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        })
    )
    .catch ((err) => {
    dispatch(
        getErrors(err.response.data, err.response.status, "LOGIN_FAIL")
    );
    dispatch({
      type: LOGIN_FAIL,
    });
  });
};

//LOGOUT
export const logout = () => {
    return {
      type: LOGOUT,
    };
  };