export enum TodosActionType {
    AddTodoItem = "TODOS_ADD",
    UpdateTodoName = "TODO_NAME_UPDATE",
    UpdateTodoDone = "TODO_DONE_UPDATE",
    RemoveTodoByIndex = "TODO_REMOVE_BY_INDEX",
    UpdateTodoItemDone = "TODO_ITEM_DONE_UPDATE",
    UpdateTodoItemName = "TODO_ITEM_NAME_UPDATE"
}

export interface AddTodoAction {
    type: TodosActionType.AddTodoItem
    payload: null
}

export interface UpdateTodoNameAction {
    type: TodosActionType.UpdateTodoName
    payload: string
}

export interface UpdateTodoDoneAction {
    type: TodosActionType.UpdateTodoDone
    payload: boolean
}

export interface RemoveTodoByIndexAction {
    type: TodosActionType.RemoveTodoByIndex,
    payload: number
}

export interface UpdateTodoItemDoneAction {
    type: TodosActionType.UpdateTodoItemDone,
    payload: {
        index: number,
        done: boolean
    }
}

export interface UpdateTodoItemNameAction {
    type: TodosActionType.UpdateTodoItemName,
    payload: {
        index: number,
        name: string
    }
}

export type TodosAction =
    | AddTodoAction
    | UpdateTodoNameAction
    | UpdateTodoDoneAction
    | RemoveTodoByIndexAction
    | UpdateTodoItemDoneAction 
    | UpdateTodoItemNameAction