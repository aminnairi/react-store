import { Action } from "../actions/action"
import { State } from "../states/state"

export const alertReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "ALERT_CLOSE":
            return {
                ...state,
                alert: {
                    ...state.alert,
                    opened: false
                }
            }

        case "ALERT_OPEN":
            return {
                ...state,
                alert: {
                    ...state.alert,
                    opened: false
                }
            }

        default:
            return state
    }

}