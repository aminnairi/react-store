export enum UserActionType {
    UpdateEmail = "USER_EMAIL_UPDATE"
}

export interface UserEmailUpdateAction {
    type: UserActionType.UpdateEmail
    payload: string
}

export type UserAction =
    | UserEmailUpdateAction