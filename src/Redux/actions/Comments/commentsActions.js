import {
    ADD_COMMENT,
    DELETE_COMMENT
  } from './commentsTypes';
import axios from "axios";
import tokenConfig from "../Auth/authUtils";
import { getErrors } from "../Errors/errorsActions";


export const addComment = (comment) => (dispatch, getState) => {
  axios
    .post("/api/comments", comment, tokenConfig(getState))
    .then((res) => res.data)
    .then((comment) =>
      dispatch({
        type: ADD_COMMENT
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const deleteComment = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/comments/${id}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DELETE_COMMENT,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};
