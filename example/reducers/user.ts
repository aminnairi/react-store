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

        default:
            return state
    }
}