import { combineReducers } from "../../build";
import { counterReducer } from "./counter/reducer";
import { nameReducer } from "./name/reducer";

export const reducer = combineReducers([
  nameReducer,
  counterReducer
]);
