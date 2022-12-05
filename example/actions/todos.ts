export enum TodosActionType {
    AddTodoItem = "TODOS_ADD",
    UpdateTodoName = "TODO_NAME_UPDATE",
    UpdateTodoDone = "TODO_DONE_UPDATE",
    RemoveTodoItem = "TODO_REMOVE_ITEM",
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

export interface RemoveTodoItemAction {
    type: TodosActionType.RemoveTodoItem,
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
    | RemoveTodoItemAction
    | UpdateTodoItemDoneAction 
    | UpdateTodoItemNameAction