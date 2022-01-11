import {
    GET_VOTE,
    VOTES_LOADING,
    VOTE_ERROR
  } from '../../actions/Votes/votesTypes';
  
  const initialState = {
    vote: {},
    loading: false,
    error: {},
  };
  
  export default function votesReducer (state = initialState, action) {
    switch (action.type) {
      case GET_VOTE:
        return {
          ...state,
          vote: {...state.vote,...action.payload},
          loading: false,
        };
      case VOTE_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case VOTES_LOADING:
        return {
          ...state,
          loading: true,
        }
      default:
        return state;
    }
  }