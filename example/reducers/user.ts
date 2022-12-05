import { Action } from "../actions/action"
import { UserActionType } from "../actions/user"
import { State } from "../states/state"

export const userReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case UserActionType.UpdateEmail:
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.payload
                }
            }

        case UserActionType.UpdateError:
            return {
                ...state,
                user: {
                    ...state.user,
                    error: action.payload
                }
            }

        case UserActionType.UpdateLoading:
            return {
                ...state,
                user: {
                    ...state.user,
                    loading: action.payload
                }
            }

        case UserActionType.UpdatePristine:
            return {
                ...state,
                user: {
                    ...state.user,
                    pristine: action.payload
                }
            }

        default:
            return state
    }
}