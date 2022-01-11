import {
    GET_ADMINISTRATORS,
    GET_MEMBERS,
    GET_MODERATORS,
    GET_USER,
    USERS_LOADING,
    USERS_ERROR,
    GET_SEARCH_USERS,
    GET_ALL_USERS
  } from "../../actions/Users/usersTypes";
    
const initialState = {
  users: [],
  user: {},
  loading: false,
  error: {},
};
    
export default function usersReducer (state = initialState, action) {
    switch (action.type) {
    case GET_ALL_USERS:
    case GET_SEARCH_USERS:
    case GET_MEMBERS:
    case GET_MODERATORS:
    case GET_ADMINISTRATORS:
        return {
          ...state,
          users: action.payload,
          loading: false,
        };
    case GET_USER:
        return {
        ...state,
        user: action.payload,
        };
    case USERS_ERROR:
        return {
        ...state,
        error: action.payload,
        loading: false,
        };
    case USERS_LOADING:
        return {
        ...state,
        loading: true,
        };
    default:
        return state;
    }
}