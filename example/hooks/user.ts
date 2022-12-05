import { UserActionType } from "../actions/user"
import { userSchema } from "../schemas/user"
import { useMounted } from "./lifecycle"
import { useStore } from "./store"

export const useUser = () => {
    const store = useStore()

    const updateEmail = (email: string) => {
        store.dispatch({
            type: UserActionType.UpdateEmail,
            payload: email
        })
    }

    const load = () => {
        store.dispatch({
            type: UserActionType.UpdateLoading,
            payload: true
        })
    }

    const unload = () => {
        store.dispatch({
            type: UserActionType.UpdateLoading,
            payload: false
        })
    }

    const unpristine = () => {
        store.dispatch({
            type: UserActionType.UpdatePristine,
            payload: false
        })
    }

    useMounted(() => {
        if (store.state.user.pristine) {
            load()
            unpristine()

            fetch("https://jsonplaceholder.typicode.com/users/1")
                .then(response => response.json())
                .then(userSchema.safeParse)
                .then(user => user.success ? user.data.email : "")
                .then(updateEmail)
                .catch(console.error)
                .finally(unload)
        }
    })

    return {
        email: store.state.user.email,
        loading: store.state.user.loading,
        error: store.state.user.error,
        updateEmail
    }
}