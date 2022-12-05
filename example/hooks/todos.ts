import { TodosActionType } from "../actions/todos"
import { useSelector, useDispatch } from "../store"

export const useTodos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const addTodoItem = () => {
        dispatch({
            type: TodosActionType.AddTodoItem,
            payload: null
        })
    }

    const updateTodoName = (name: string) => {
        dispatch({
            type: TodosActionType.UpdateTodoName,
            payload: name
        })
    }

    const updateTodoDone = (done: boolean) => {
        dispatch({
            type: TodosActionType.UpdateTodoDone,
            payload: done
        })
    }

    const removeTodoItem = (index: number) => () => {
        dispatch({
            type: TodosActionType.RemoveTodoItem,
            payload: index
        })
    }

    const updateTodoItemDoneByIndex = (index: number) => (done: boolean) => {
        dispatch({
            type: TodosActionType.UpdateTodoItemDone,
            payload: {
                index,
                done
            }
        })
    }
    
    const updateTodoItemNameByIndex = (index: number) => (name: string) => {
        dispatch({
            type: TodosActionType.UpdateTodoItemName,
            payload: {
                index,
                name
            }
        })
    }

    return {
        items: todos.items,
        todo: todos.todo,
        addTodoItem,
        updateTodoName,
        updateTodoDone,
        removeTodoItem,
        updateTodoItemDoneByIndex,
        updateTodoItemNameByIndex
    }
}