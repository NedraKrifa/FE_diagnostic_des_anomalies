import {
  GET_ADMINISTRATORS,
  GET_MEMBERS,
  GET_MODERATORS,
  GET_USER,
  USERS_LOADING,
} from "./usersTypes";
  import axios from "axios";
  import tokenConfig from "../Auth/authUtils";
  import { getErrors } from "../Errors/errorsActions";
  
  export const getMembers = () => (dispatch, getState) => {
    dispatch(setUsersLoading());
    axios
      .get("/api/users/members", tokenConfig(getState))
      .then((res) => res.data)
      .then((users) =>
        dispatch({
          type: GET_MEMBERS,
          payload: users,
        })
      )
      .catch((err) =>
        dispatch(getErrors(err.response.data, err.response.status))
      );
  };
  
  export const getModerators = () => (dispatch, getState) => {
    dispatch(setUsersLoading());
    axios
      .get("/api/users/moderators", tokenConfig(getState))
      .then((res) => res.data)
      .then((users) =>
        dispatch({
          type: GET_MODERATORS,
          payload: users,
        })
      )
      .catch((err) =>
        dispatch(getErrors(err.response.data, err.response.status))
      );
  };
  export const getAdministrators = () => (dispatch, getState) => {
    dispatch(setUsersLoading());
    axios
      .get("/api/users/administrators", tokenConfig(getState))
      .then((res) => res.data)
      .then((users) =>
        dispatch({
          type: GET_ADMINISTRATORS,
          payload: users,
        })
      )
      .catch((err) =>
        dispatch(getErrors(err.response.data, err.response.status))
      );
  };
  
  export const getUser= (id) => (dispatch, getState) => {
    axios
      .get(`/api/users/user/${id}`, tokenConfig(getState))
      .then((res) => res.data)
      .then((user) =>
        dispatch({
          type: GET_USER,
          payload: user,
        })
      )
      .catch((err) =>
        dispatch(getErrors(err.response.data, err.response.status))
      );
  };
  
  export const setUsersLoading = () => {
    return {
      type: USERS_LOADING,
    };
  };