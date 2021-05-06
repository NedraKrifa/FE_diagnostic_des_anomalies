import {
    GET_QUESTIONS,
    GET_QUESTION,
    GET_TOP_QUESTIONS,
    GET_OLD_QUESTIONS,
    GET_TAG_QUESTIONS,
    GET_USER_QUESTIONS,
    DELETE_QUESTION,
    ADD_QUESTION,
    UPDATE_QUESTION,
    QUESTIONS_LOADING,
    GET_SEARCH_QUESTIONS
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

export const getOldQuestions = () => (dispatch, getState) => {
  dispatch(setQuestionsLoading());
  axios
    .get("/api/questions/old", tokenConfig(getState))
    .then((res) => res.data)
    .then((questions) =>
      dispatch({
        type: GET_OLD_QUESTIONS,
        payload: questions,
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const getTopQuestions = () => (dispatch, getState) => {
  dispatch(setQuestionsLoading());
  axios
    .get("/api/questions/top", tokenConfig(getState))
    .then((res) => res.data)
    .then((questions) =>
      dispatch({
        type: GET_TOP_QUESTIONS,
        payload: questions,
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const getTagQuestions = (id,name) => (dispatch, getState) => {
  dispatch(setQuestionsLoading());
  axios
    .get(`/api/questions/tags/id=${id}&name=${name}`, tokenConfig(getState))
    .then((res) => res.data)
    .then((questions) =>
      dispatch({
        type: GET_TAG_QUESTIONS,
        payload: questions,
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const getUserQuestions = (id,name) => (dispatch, getState) => {
  dispatch(setQuestionsLoading());
  axios
    .get(`/api/questions/users/id=${id}&name=${name}`, tokenConfig(getState))
    .then((res) => res.data)
    .then((questions) =>
      dispatch({
        type: GET_USER_QUESTIONS,
        payload: questions,
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const getSearchQuestions = (body) => (dispatch, getState) => {
  dispatch(setQuestionsLoading());
  axios
    .get(`/api/questions/search/${body}`, tokenConfig(getState))
    .then((res) => res.data)
    .then((questions) =>
      dispatch({
        type: GET_SEARCH_QUESTIONS,
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

export const updateQuestion = (vote) => (dispatch) => {
      dispatch({
        type: UPDATE_QUESTION,
        payload: vote,
      });
};

export const setQuestionsLoading = () => {
  return {
    type: QUESTIONS_LOADING,
  };
};