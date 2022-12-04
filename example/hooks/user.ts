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

    useMounted(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(response => response.json())
            .then(userSchema.safeParse)
            .then(user => user.success ? user.data.email : "")
            .then(updateEmail)
            .catch(console.error)
    })

    return {
        email: store.state.user.email,
        updateEmail
    }
}