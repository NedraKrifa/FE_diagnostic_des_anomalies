import {
    GET_ANSWERS,
    ADD_ANSWER,
    ANSWERS_LOADING,
    ANSWER_ERROR,
    DELETE_ANSWER
  } from '../../actions/Answers/answersTypes';
  
  const initialState = {
    answers: [],
    answer: {},
    loading: false,
    error: {},
  };
  
  export default function answersReducer (state = initialState, action) {
    switch (action.type) {
      case GET_ANSWERS:
        return {
          ...state,
          answers: action.payload,
          loading: false,
        };
      case ADD_ANSWER:
        return {
          ...state,
          answers: [...state.answers,action.payload],
          answer: action.payload,
        };
      case DELETE_ANSWER:
        return {
          ...state,
          answers: state.answers.filter((answer) => answer.id !== action.payload),
        };
      case ANSWER_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case ANSWERS_LOADING:
        return {
          ...state,
          loading: true,
        }
      default:
        return state;
    }
  }