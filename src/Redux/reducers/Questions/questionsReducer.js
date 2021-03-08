import {
    GET_QUESTION,
    GET_QUESTIONS,
    GET_TOP_QUESTIONS,
    GET_TAG_QUESTIONS,
    QUESTION_ERROR,
    QUESTIONS_LOADING,
    DELETE_QUESTION,
    ADD_QUESTION,
  } from '../../actions/Questions/questionsTypes';
  
  const initialState = {
    questions: [],
    question: {},
    loading: false,
    error: {},
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_QUESTIONS:
      case GET_TOP_QUESTIONS:
      case GET_TAG_QUESTIONS:
        return {
          ...state,
          questions: action.payload,
          loading: false,
        };
      case GET_QUESTION:
        return {
          ...state,
          question: action.payload,
        };
      case ADD_QUESTION:
        return {
          ...state,
          questions: [action.payload, ...state.questions],
        };
      case DELETE_QUESTION:
        return {
          ...state,
          questions: state.questions.filter((question) => question.id !== action.payload),
        };
      case QUESTION_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case QUESTIONS_LOADING:
        return {
          ...state,
          loading: true,
        }
      default:
        return state;
    }
  }