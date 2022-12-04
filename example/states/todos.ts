export interface Todo {
    name: string
    done: boolean
}

export interface TodosState {
    items: Array<Todo>,
    todo: Todo
}

export const initialTodosState: TodosState = {
    items: [],
    todo: {
        name: "",
        done: false
    }
}