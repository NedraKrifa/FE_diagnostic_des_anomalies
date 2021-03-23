import { GET_NAME_TAGS, GET_NEW_TAGS, GET_TOP_TAGS, TAGS_LOADING } from "./tagsTypes";
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

export const setTagsLoading = () => {
  return {
    type: TAGS_LOADING,
  };
};