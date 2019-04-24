import { combineReducers } from "redux";
import authUserReducer from "./authUserReducer";
import errorReducer from "./errorReducer";
import postReducer from "./postReducer";

export default combineReducers({
  post: postReducer,
  error: errorReducer,
  auth: authUserReducer
});
