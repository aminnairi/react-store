import { ChangeEventHandler, useCallback } from "react";
import { useDispatch, useSelector } from "../store";
import { ActionType } from "../store/actions";

export const useName = () => {
  const { value } = useSelector(state => state.name);
  const dispatch = useDispatch();

  const updateName: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    dispatch({
      type: ActionType.NameUpdate,
      payload: event.target.value
    });
  }, []);

  const resetName = useCallback(() => {
    dispatch({
      type: ActionType.NameReset,
      payload: null
    });
  }, []);

  return {
    name: value,
    updateName,
    resetName
  }
}
