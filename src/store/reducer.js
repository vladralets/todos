import { combineReducers } from "redux";
import todos from "./Todos";
import createPage from "./createPage";

const reducers = combineReducers({
  todos,
  createPage,
});

export default reducers;
