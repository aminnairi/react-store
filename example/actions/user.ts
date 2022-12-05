export enum UserActionType {
    UpdateEmail = "USER_EMAIL_UPDATE",
    UpdateLoading = "USER_LOADING_UPDATE",
    UpdateError = "USER_ERROR_UPDATE",
    UpdatePristine = "USER_PRISTINE_UPDATE"
}

export interface UpdateUserEmailAction {
    type: UserActionType.UpdateEmail
    payload: string
}

export interface UpdateUserLoadingAction {
    type: UserActionType.UpdateLoading
    payload: boolean
}

export interface UpdateUserErrorAction {
    type: UserActionType.UpdateError
    payload: unknown
}

export interface UpdatePristineUserAction {
    type: UserActionType.UpdatePristine,
    payload: boolean
}

export type UserAction =
    | UpdateUserEmailAction
    | UpdateUserLoadingAction
    | UpdateUserErrorAction
    | UpdatePristineUserAction