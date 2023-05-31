import { useCallback } from "react";
import { useDispatch, useSelector } from "../store";
import { ActionType } from "../store/actions";

export const useCounter = () => {
  const { value } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = useCallback(() => {
    dispatch({
      type: ActionType.CounterIncrement,
      payload: null
    });
  }, []);

  const decrement = useCallback(() => {
    dispatch({
      type: ActionType.CounterDecrement,
      payload: null
    });
  }, []);

  return {
    value,
    increment,
    decrement
  };
};
