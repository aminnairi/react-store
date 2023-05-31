import { createReducer } from "../../../build";
import { Action, ActionType } from "../actions";
import { State } from "../state";

export const nameReducer = createReducer<State, Action>((state, action) => {
  switch (action.type) {
    case ActionType.NameUpdate:
      return {
        ...state,
        name: {
          ...state.name,
          value: action.payload
        }
      };

    case ActionType.NameReset:
      return {
        ...state,
        name: {
          ...state.name,
          value: "Yourself"
        }
      };

    default:
      return state;
  }
});
