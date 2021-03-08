import { GET_ERRORS, CLEAR_ERRORS } from './errorsTypes';

export const getErrors = (msg, status, id = null, timeout = 5000) => (dispatch) => {
  dispatch({
    type: GET_ERRORS,
    payload: {msg, status, id},
  });

  setTimeout(() => dispatch({type: CLEAR_ERRORS, payload: id}), timeout);

};