export enum TodosActionType {
    AddTodoItem = "TODOS_ADD",
    UpdateTodoName = "TODO_NAME_UPDATE",
    UpdateTodoDone = "TODO_DONE_UPDATE"
}

export interface TodosAddAction {
    type: TodosActionType.AddTodoItem
    payload: null
}

export interface TodoNameUpdateAction {
    type: TodosActionType.UpdateTodoName
    payload: string
}

export interface TodoDoneUpdateAction {
    type: TodosActionType.UpdateTodoDone
    payload: boolean
}

export type TodosAction =
    | TodosAddAction
    | TodoNameUpdateAction
    | TodoDoneUpdateAction