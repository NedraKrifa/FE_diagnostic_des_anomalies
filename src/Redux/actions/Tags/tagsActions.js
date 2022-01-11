import {
  GET_NAME_TAGS,
  GET_NEW_TAGS,
  GET_TOP_TAGS,
  TAGS_LOADING,
  GET_TAG,
  GET_SEARCH_TAGS
} from "./tagsTypes";
import axios from "axios";
import tokenConfig from "../Auth/authUtils";
import { getErrors } from "../Errors/errorsActions";

export const getTopTags = () => (dispatch, getState) => {
  dispatch(setTagsLoading());
  axios
    .get("/api/tags/top", tokenConfig(getState))
    .then((res) => res.data)
    .then((tags) =>
      dispatch({
        type: GET_TOP_TAGS,
        payload: tags,
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const getNewTags = () => (dispatch, getState) => {
    dispatch(setTagsLoading());
    axios
      .get("/api/tags/new", tokenConfig(getState))
      .then((res) => res.data)
      .then((tags) =>
        dispatch({
          type: GET_NEW_TAGS,
          payload: tags,
        })
      )
      .catch((err) =>
        dispatch(getErrors(err.response.data, err.response.status))
      );
  };

export const getNameTags = () => (dispatch, getState) => {
  dispatch(setTagsLoading());
  axios
    .get("/api/tags/name", tokenConfig(getState))
    .then((res) => res.data)
    .then((tags) =>
      dispatch({
        type: GET_NAME_TAGS,
        payload: tags,
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const getTag= (id) => (dispatch, getState) => {
  axios
    .get(`/api/tags/${id}`, tokenConfig(getState))
    .then((res) => res.data)
    .then((tag) =>
      dispatch({
        type: GET_TAG,
        payload: tag,
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const getSearchTags= (name) => (dispatch, getState) => {
  name
    ? axios
        .get(`/api/tags/tag/${name}`, tokenConfig(getState))
        .then((res) => res.data)
        .then((tags) =>
          dispatch({
            type: GET_SEARCH_TAGS,
            payload: tags,
          })
        )
        .catch((err) =>
          dispatch(getErrors(err.response.data, err.response.status))
        )
    : dispatch(getTopTags());

};

export const setTagsLoading = () => {
  return {
    type: TAGS_LOADING,
  };
};