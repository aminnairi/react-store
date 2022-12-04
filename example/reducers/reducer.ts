import { combineReducers } from "@aminnairi/react-store";
import { todosReducer } from "./todos";
import { userReducer } from "./user";

export const reducer = combineReducers([
    userReducer,
    todosReducer
])