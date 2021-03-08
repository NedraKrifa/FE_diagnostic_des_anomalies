import { combineReducers } from "redux";
import questionsReducer from "./Questions/questionsReducer";
import errorsReducer from "./Errors/errorsReducer";
import authReducer from "./Auth/authReducer";

export default combineReducers({
  questions: questionsReducer,
  error: errorsReducer,
  auth: authReducer,
});