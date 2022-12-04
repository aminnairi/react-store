import { useStore } from "./store";

export const userAlert = () => {
    const store = useStore()

    return {
        alert: store.state.alert,
        dispatch: store.dispatch
    }
}