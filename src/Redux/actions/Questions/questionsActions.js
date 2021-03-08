import {
    GET_QUESTIONS,
    GET_QUESTION,
    GET_TOP_QUESTIONS,
    GET_TAG_QUESTIONS,
    QUESTION_ERROR,
    DELETE_QUESTION,
    ADD_QUESTION,
    QUESTIONS_LOADING
  } from './questionsTypes';
import axios from "axios";
import tokenConfig from "../Auth/authUtils";
import { getErrors } from "../Errors/errorsActions";

export const getQuestions = () => (dispatch, getState) => {
  dispatch(setQuestionsLoading());
  axios
    .get("/api/questions", tokenConfig(getState))
    .then((res) => res.data)
    .then((questions) =>
      dispatch({
        type: GET_QUESTIONS,
        payload: questions,
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const getQuestion= (id) => (dispatch, getState) => {
  axios
    .get(`/api/questions/${id}`, tokenConfig(getState))
    .then((res) => res.data)
    .then((question) =>
      dispatch({
        type: GET_QUESTION,
        payload: question,
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const addQuestion = (question) => (dispatch, getState) => {
  axios
    .post("/api/questions", question, tokenConfig(getState))
    .then((res) => res.data)
    .then((question) =>
      dispatch({
        type: ADD_QUESTION,
        payload: question,
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const deleteQuestion = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/questions/${id}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DELETE_QUESTION,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const setQuestionsLoading = () => {
  return {
    type: QUESTIONS_LOADING,
  };
};