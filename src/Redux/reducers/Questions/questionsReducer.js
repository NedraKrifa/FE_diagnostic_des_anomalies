import {
    GET_QUESTION,
    GET_QUESTIONS,
    GET_TOP_QUESTIONS,
    GET_OLD_QUESTIONS,
    GET_TAG_QUESTIONS,
    GET_USER_QUESTIONS,
    QUESTION_ERROR,
    QUESTIONS_LOADING,
    DELETE_QUESTION,
    UPDATE_QUESTION,
    ADD_QUESTION,
    GET_SEARCH_QUESTIONS,
    GET_SEARCH_REDMINE,
    UPDATE_ANSWER_QUESTION,
    GET_MODERATION_QUESTIONS,
    GET_BLOCKED_QUESTIONS,
    GET_UNBLOCKED_QUESTIONS
  } from '../../actions/Questions/questionsTypes';
  
  const initialState = {
    questions: [],
    question: {},
    filter: 'Search',
    loading: false,
    error: {},
  };
  
  export default function questionsReducer (state = initialState, action) {
    switch (action.type) {
      case GET_UNBLOCKED_QUESTIONS:
      case GET_BLOCKED_QUESTIONS:
      case GET_MODERATION_QUESTIONS:
      case GET_QUESTIONS:
      case GET_TOP_QUESTIONS:
      case GET_TAG_QUESTIONS:
      case GET_OLD_QUESTIONS:
      case GET_USER_QUESTIONS:
        return {
          ...state,
          questions: action.payload,
          loading: false,
        };
      case GET_SEARCH_REDMINE:
      case GET_SEARCH_QUESTIONS:
        return {
          ...state,
          questions: action.payload,
          filter: action.filter,
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
          questions: state.questions.filter(
            (question) => question.id !== action.payload
          ),
        };
      case UPDATE_QUESTION:
        return {
          ...state,
          questions: state.questions.map((question) => {
            const {
              author,
              answers,
              comments,
              _id,
              title,
              body,
              tags,
              created,
              __v,
              vote,
            } = question;
            if (_id === action.payload.postId) {
              return {
                author,
                answers,
                comments,
                _id,
                title,
                body,
                tags,
                created,
                __v,
                vote: vote + action.payload.vote,
              };
            }
            return question;
          }),
        };
      case UPDATE_ANSWER_QUESTION:
        return {
          ...state,
          question: {...state.question,checked:action.payload}
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
        };
      default:
        return state;
    }
  }