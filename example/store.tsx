import { createStore } from "../sources/"
import { reducer } from "./reducers/reducer"
import { initialState } from "./states/state"

export const { StoreProvider, StoreContext } = createStore({
    initialState,
    reducer
})