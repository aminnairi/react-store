import { createStore } from "@aminnairi/react-store";
import { reducer } from "./store/reducer";
import { initialState } from "./store/state";

export const { StoreProvider, useSelector, useDispatch } = createStore({
  initialState,
  reducer
});
