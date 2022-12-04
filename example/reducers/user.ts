import { Action } from "../actions/action";
import { State } from "../states/state";

export const userReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "USER_ROLE_UPDATE":
            return {
                ...state,
                user: {
                    ...state.user,
                    role: action.payload
                }
            }

        case "USER_EMAIL_UPDATE":
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