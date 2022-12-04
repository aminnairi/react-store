import { initialTodosState } from "./todos";
import { initialUserState } from "./user";

export const initialState = {
    user: initialUserState,
    todos: initialTodosState
}

export type State = typeof initialState