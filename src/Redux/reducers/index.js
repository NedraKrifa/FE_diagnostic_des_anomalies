import { combineReducers } from "redux";
import questionsReducer from "./Questions/questionsReducer";
import errorsReducer from "./Errors/errorsReducer";
import authReducer from "./Auth/authReducer";
import tagsReducer from "./Tags/tagsReducer";
import usersReducer from "./Users/usersReducer";
import answersReducer from "./Answers/answersReducer";
import votesReducer from "./Votes/votesReducer";

export default combineReducers({
  questions: questionsReducer,
  answers: answersReducer,
  error: errorsReducer,
  auth: authReducer,
  tags: tagsReducer,
  users: usersReducer,
  votes: votesReducer,
});