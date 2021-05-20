import {
    GET_ANSWERS,
    ADD_ANSWER,
    ANSWERS_LOADING,
    DELETE_ANSWER,
    UPDATE_BLOCKED_ANSWER
  } from './answersTypes';
  import { UPDATE_ANSWER_QUESTION } from "../Questions/questionsTypes";
import axios from "axios";
import tokenConfig from "../Auth/authUtils";
import { getErrors } from "../Errors/errorsActions";

export const getAnswers = (id) => (dispatch, getState) => {
  dispatch(setAnswersLoading());
  axios
    .get(`/api/answers/${id}`, tokenConfig(getState))
    .then((res) => res.data)
    .then((answers) =>
      dispatch({
        type: GET_ANSWERS,
        payload: answers,
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const addAnswer = (answer,handleSocketAnswer) => (dispatch, getState) => {
  return axios
    .post("/api/answers", answer, tokenConfig(getState))
    .then((res) => res.data)
    .then((apiAnswer)=>{
      handleSocketAnswer(apiAnswer);
      return apiAnswer;
    })
    .then((item) =>
      dispatch({
        type: ADD_ANSWER,
        payload: item,
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const deleteAnswer = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/answers/${id}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DELETE_ANSWER,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const updateAnswer = (id,body) => (dispatch, getState) => {
  axios
    .patch(`/api/answers/check/${id}`,body, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: UPDATE_ANSWER_QUESTION,
        payload: body.checked,
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const updateBlockedAnswer = (id,body) => (dispatch, getState) => {
  axios
    .patch(`/api/answers/block/${id}`,body, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: UPDATE_BLOCKED_ANSWER
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const setAnswersLoading = () => {
  return {
    type: ANSWERS_LOADING,
  };
};