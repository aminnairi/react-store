import { alertReducer } from "./alert"
import { Reducer } from "react"
import { userReducer } from "./user"
import { Action } from "../actions/action"
import { State } from "../states/state"
import { combineReducers } from "@aminnairi/react-store"

export const reducer: Reducer<State, Action> = combineReducers([
    userReducer,
    alertReducer
])