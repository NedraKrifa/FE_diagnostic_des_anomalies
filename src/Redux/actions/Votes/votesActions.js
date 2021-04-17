import {
    GET_VOTE,
    UP_VOTE,
    DOWN_VOTE,
    VOTES_LOADING
  } from './votesTypes';
import axios from "axios";
import tokenConfig from "../Auth/authUtils";
import { getErrors } from "../Errors/errorsActions";

export const getVote = (userId, postId) => (dispatch, getState) => {
  dispatch(setVotesLoading());
  axios
    .get(`/api/votes/vote/${postId}/${userId}?`, tokenConfig(getState))
    .then((res) => res.data)
    .then((vote) =>
      dispatch({
        type: GET_VOTE,
        payload: {[postId+userId]:vote},
      })
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const upVote = (vote,refetchVoteValue) => (dispatch, getState) => {
  axios
    .post("/api/votes/upvote", vote, tokenConfig(getState))
    .then((res) => res.data)
    .then((vote) =>
      refetchVoteValue(1)
    )
    .catch((err) =>
      dispatch(getErrors(err.response.data, err.response.status))
    );
};

export const downVote = (vote,refetchVoteValue) => (dispatch, getState) => {
    axios
      .post("/api/votes/downvote", vote, tokenConfig(getState))
      .then((res) => res.data)
      .then((vote) =>
      refetchVoteValue(-1)
      )
      .catch((err) =>
        dispatch(getErrors(err.response.data, err.response.status))
      );
  };


export const setVotesLoading = () => {
  return {
    type: VOTES_LOADING,
  };
};