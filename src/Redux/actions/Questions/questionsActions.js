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
    GET_SEARCH_QUESTIONS,
    GET_SEARCH_REDMINE,
    UPDATE_BLOCKED_QUESTION,
    GET_MODERATION_QUESTIONS,
    GET_BLOCKED_QUESTIONS,
    GET_UNBLOCKED_QUESTIONS
  } from './questionsTypes';
import axios from "axios";
import tokenConfig from "../Auth/authUtils";
import redmineConfig from "./questionUtils";
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

export const getModerationQuestions = () => (dispatch, getState) => {
  dispatch(setQuestionsLoading());
  axios
    .get("/api/questions/moderation", tokenConfig(getState))
    .then((res) => res.data)
    .then((questions) =>
      dispatch({
        type: GET_MODERATION_QUESTIONS,
        payload: questions,
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const getUnblockedQuestions = () => (dispatch, getState) => {
  dispatch(setQuestionsLoading());
  axios
    .get("/api/questions/moderation/unblocked", tokenConfig(getState))
    .then((res) => res.data)
    .then((questions) =>
      dispatch({
        type: GET_UNBLOCKED_QUESTIONS,
        payload: questions,
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const getBlockedQuestions = () => (dispatch, getState) => {
  dispatch(setQuestionsLoading());
  axios
    .get("/api/questions/moderation/blocked", tokenConfig(getState))
    .then((res) => res.data)
    .then((questions) =>
      dispatch({
        type: GET_BLOCKED_QUESTIONS,
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
        filter: 'Search',
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const getSearchRedmine = (title) => (dispatch, getState) => {
  dispatch(setQuestionsLoading());
  axios
    .get(`/issues.json?easy_query_q=${title}`, redmineConfig(getState))
    /*.get(`/issues.json?utf8=✓&set_filter=1&sort=id%3Adesc&f%5B%5D=status_id&op%5Bstatus_id%5D=o&f%5B%5D=subject&op%5Bsubject%5D=~&v%5Bsubject%5D%5B%5D=${title}&f%5B%5D=&c%5B%5D=project&c%5B%5D=tracker&c%5B%5D=status&c%5B%5D=priority&c%5B%5D=subject&c%5B%5D=assigned_to&c%5B%5D=updated_on&group_by=&t%5B%5D=`, {
      headers:{"Content-type": "application/json"}
    })*/
    .then((res) => res.data)
    .then((questions) =>
      dispatch({
        type: GET_SEARCH_REDMINE,
        payload: questions.issues,
        filter: "Redmine",
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

export const updateBlockedQuestion = (id,body) => (dispatch, getState) => {
  axios
    .patch(`/api/questions/${id}`,body, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: UPDATE_BLOCKED_QUESTION
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