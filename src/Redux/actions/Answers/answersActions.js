import {
    GET_ANSWERS,
    ADD_ANSWER,
    ANSWERS_LOADING,
    DELETE_ANSWER
  } from './answersTypes';
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

export const setAnswersLoading = () => {
  return {
    type: ANSWERS_LOADING,
  };
};