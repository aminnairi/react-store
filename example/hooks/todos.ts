import { TodosActionType } from "../actions/todos"
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

    const removeTodoItem = (index: number) => () => {
        store.dispatch({
            type: TodosActionType.RemoveTodoItem,
            payload: index
        })
    }

    const updateTodoItemDoneByIndex = (index: number) => (done: boolean) => {
        store.dispatch({
            type: TodosActionType.UpdateTodoItemDone,
            payload: {
                index,
                done
            }
        })
    }
    
    const updateTodoItemNameByIndex = (index: number) => (name: string) => {
        store.dispatch({
            type: TodosActionType.UpdateTodoItemName,
            payload: {
                index,
                name
            }
        })
    }

    return {
        items: store.state.todos.items,
        todo: store.state.todos.todo,
        addTodoItem,
        updateTodoName,
        updateTodoDone,
        removeTodoItem,
        updateTodoItemDoneByIndex,
        updateTodoItemNameByIndex
    }
}