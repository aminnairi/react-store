import { initialAlertState } from "./alert"
import { initialUserState } from "./user"

export const initialState = {
    user: initialUserState,
    alert: initialAlertState
}

export type State = typeof initialState