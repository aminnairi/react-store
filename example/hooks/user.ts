import { useMounted } from "./lifecycle"
import { useStore } from "./store"

export const useUser = () => {
    const store = useStore()

    const updateRole = (role: string) => store.dispatch({type: "USER_ROLE_UPDATE", payload: role})

    const updateEmail = (email: string) => store.dispatch({type: "USER_EMAIL_UPDATE", payload: email})

    useMounted(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(response => response.json())
            .then(json => updateEmail(json.email))
            .catch(console.error)
    })

    return {
        ...store.state.user,
        updateRole,
        updateEmail
    }
}