import { Action } from "../actions/action";
import { TodosActionType } from "../actions/todos";
import { State } from "../states/state";

export const todosReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case TodosActionType.AddTodoItem:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    items: [
                        ...state.todos.items,
                        state.todos.todo
                    ]
                }
            }

        case TodosActionType.UpdateTodoName:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    todo: {
                        ...state.todos.todo,
                        name: action.payload
                    }
                }
            }

        case TodosActionType.UpdateTodoDone:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    todo: {
                        ...state.todos.todo,
                        done: action.payload
                    }
                }
            }

        default:
            return state
    }
}