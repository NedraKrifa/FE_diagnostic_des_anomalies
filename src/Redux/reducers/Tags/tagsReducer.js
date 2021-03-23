import {
  GET_NAME_TAGS,
  GET_NEW_TAGS,
  GET_TOP_TAGS,
  TAGS_LOADING,
  TAGS_ERROR,
} from "../../actions/Tags/tagsTypes";
  
  const initialState = {
    tags: [],
    loading: false,
    error: {},
  };
  
  export default function tagsReducer (state = initialState, action) {
    switch (action.type) {
      case GET_NAME_TAGS:
      case GET_NEW_TAGS:
      case GET_TOP_TAGS:
        return {
          ...state,
          tags: action.payload,
          loading: false,
        };
      case TAGS_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case TAGS_LOADING:
        return {
          ...state,
          loading: true,
        }
      default:
        return state;
    }
  }