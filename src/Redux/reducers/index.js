import { combineReducers } from "redux";
import questionsReducer from "./Questions/questionsReducer";
import errorsReducer from "./Errors/errorsReducer";
import authReducer from "./Auth/authReducer";
import tagsReducer from "./Tags/tagsReducer";
import usersReducer from "./Users/usersReducer";

export default combineReducers({
  questions: questionsReducer,
  error: errorsReducer,
  auth: authReducer,
  tags: tagsReducer,
  users: usersReducer,
});