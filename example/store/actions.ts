// Actions

export enum ActionType {
  CounterIncrement = "counter/increment",
  CounterDecrement = "counter/decrement",
  NameUpdate = "name/update",
  NameReset = "name/reset"
}

// COUNTER

export type CounterActionIncrement = {
  type: ActionType.CounterIncrement
  payload: null
}

export type CounterActionDecrement = {
  type: ActionType.CounterDecrement
  payload: null
}

// NAME

export type CounterAction =
  | CounterActionIncrement
  | CounterActionDecrement

export type NameActionUpdate = {
  type: ActionType.NameUpdate
  payload: string
}

export type NameActionReset = {
  type: ActionType.NameReset
  payload: null
}

export type NameAction =
  | NameActionUpdate
  | NameActionReset

// ALL

export type Action =
  | CounterAction
  | NameAction
