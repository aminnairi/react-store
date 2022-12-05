import { createStore } from "@aminnairi/react-store";
import { initialState } from "./states/state";
import { reducer } from "./reducers/reducer";

export const { StoreProvider, useSelector, useDispatch } = createStore({
    initialState,
    reducer
})