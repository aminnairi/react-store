import { TodosActionType } from "../actions/todos"
import { Todo } from "../states/todos"
import { useStore } from "./store"

export const useTodos = () => {
    const store = useStore()

    const addTodoItem = () => {
        store.dispatch({
            type: TodosActionType.AddTodoItem,
            payload: null
        })
    }

    const updateTodoName = (name: string) => {
        store.dispatch({
            type: TodosActionType.UpdateTodoName,
            payload: name
        })
    }

    const updateTodoDone = (done: boolean) => {
        store.dispatch({
            type: TodosActionType.UpdateTodoDone,
            payload: done
        })
    }

    return {
        items: store.state.todos.items,
        todo: store.state.todos.todo,
        addTodoItem,
        updateTodoName,
        updateTodoDone
    }
}