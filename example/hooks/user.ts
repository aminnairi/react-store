import { UserActionType } from "../actions/user"
import { useStore } from "./store"

export const useUser = () => {
    const store = useStore()

    const updateEmail = (email: string) => {
        store.dispatch({
            type: UserActionType.UpdateEmail,
            payload: email
        })
    }

    return {
        email: store.state.user.email,
        updateEmail
    }
}