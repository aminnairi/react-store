import { UserActionType } from "../actions/user"
import { userSchema } from "../schemas/user"
import { useMounted } from "./lifecycle"
import { useDispatch, useSelector } from "../store"

export const useUser = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const updateEmail = (email: string) => {
        dispatch({
            type: UserActionType.UpdateEmail,
            payload: email
        })
    }

    const load = () => {
        dispatch({
            type: UserActionType.UpdateLoading,
            payload: true
        })
    }

    const unload = () => {
        dispatch({
            type: UserActionType.UpdateLoading,
            payload: false
        })
    }

    const unpristine = () => {
        dispatch({
            type: UserActionType.UpdatePristine,
            payload: false
        })
    }

    useMounted(() => {
        if (user.pristine) {
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
        email: user.email,
        loading: user.loading,
        error: user.error,
        updateEmail
    }
}