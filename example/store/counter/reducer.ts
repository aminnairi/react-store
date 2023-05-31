import { createReducer } from "../../../build";
import { Action, ActionType } from "../actions";
import { State } from "../state";

export const counterReducer = createReducer<State, Action>((state, action) => {
  switch (action.type) {
    case ActionType.CounterIncrement:
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value + 1
        }
      };

    case ActionType.CounterDecrement:
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value - 1
        }
      };

    default:
      return state;
  }
});
