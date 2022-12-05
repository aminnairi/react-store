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
                    todo: {
                        name: "",
                        done: false
                    },
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

        case TodosActionType.RemoveTodoByIndex:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    items: state.todos.items.filter((item, index) => {
                        return index !== action.payload
                    })
                }
            }

        case TodosActionType.UpdateTodoItemDone:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    items: state.todos.items.map((item, index) => {
                        if (index === action.payload.index) {
                            return {
                                ...item,
                                done: action.payload.done
                            }
                        }

                        return item
                    })
                }
            }

        case TodosActionType.UpdateTodoItemName:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    items: state.todos.items.map((item, index) => {
                        if (index === action.payload.index) {
                            return {
                                ...item,
                                name: action.payload.name
                            }
                        }

                        return item
                    })
                }
            }

        default:
            return state
    }
}