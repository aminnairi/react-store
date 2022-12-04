import { createStore } from "@aminnairi/react-store"
import { reducer } from "./reducers/reducer"
import { initialState } from "./states/state"

export const { StoreProvider, StoreContext } = createStore({
    initialState,
    reducer
})