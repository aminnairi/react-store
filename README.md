# @aminnairi/react-store

[![NPM](https://badgen.net/npm/v/@aminnairi/react-store)](https://www.npmjs.com/package/@aminnairi/react-store)
[![Unit Test](https://github.com/aminnairi/react-store/actions/workflows/test.yaml/badge.svg)](https://github.com/aminnairi/react-store/actions/workflows/test.yaml) ![Tree Shaking](https://badgen.net/bundlephobia/tree-shaking/@aminnairi/react-store) ![Size](https://badgen.net/bundlephobia/minzip/@aminnairi/react-store) ![Vulnerabilities](https://badgen.net/snyk/aminnairi/react-store) 

Simple yet powerful store manager written in TypeScript on top of React's context & reducer

## Requirements

- Node
- NPM

## Installation

```bash
npm install @aminnairi/react-store
```

## API

### API - createReducer

Create a reducer function that takes the previous states, an action, and returns a new state. Note that when using this function, mutations for the state and the action are not permitted.

```tsx
export interface UserState {
    token: string
}

export type TodosState = Array<string>

export interface State {
    user: UserState
    todos: TodosState
}

export const initialState: State = {
    user: {
        token: ""
    },
    todos: [
        "Finish this library",
        "Wait for React's Context API enhancement"
    ]
}
```

```tsx
export type Action =
    | { type: "TODOS_ITEM_ADD", payload: string }
    | { type: "USER_TOKEN_UPDATE", payload: string }
```

```tsx
import { createReducer } from "@aminnairi/react-store"

import { State } from "../states/state"
import { Action } from "../actions/action"

export const userReducer = createReducer<State, Action>((state, action) => {
    switch (action.type) {
        case "USER_TOKEN_UPDATE":
            return {
                ...state,
                user: {
                    ...state.user,
                    token: action.payload
                }
            }

        default:
            return state
    }
})
```

```tsx
import { createReducer } from "@aminnairi/react-store"

import { State } from "../states/state"
import { Action } from "../actions/action"

export const todosReducer = createReducer<State, Action>((state, action) => {
    switch (action.type) {
        case "TODOS_ITEM_ADD":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }

        default:
            return state
    }
})
```

### API - combineReducers

Turn several small reducers into one bigger reducer. This is great when it comes to breaking down the whole store's reducer into smaller, easier to work with reducers.

```tsx
import { combineReducers } from "@aminnairi/react-store"

import { State } from "./states/state"
import { Action } from "./actions/action"
import { userReducer } from "./user"
import { todosReducer } from "./todos"

export const reducer = combineReducers<State, Action>([
    userReducer,
    todosReducer
])
```

### API - createStore

Create a store that is the union point of an initial state and a reducer for that state.

```tsx
import { createStore } from "@aminnairi/react-store"

import { State, initialState } from "./states/state"
import { Action } from "./actions/action"
import { reducer } from "./reducers/reducer"

export const { StoreProvider, useDispatch, useSelector } = createStore<State, Action>({
    initialState
    reducer
})
```

#### API - createStore - StoreProvider

The provider for a store is a JSX component that will expose a context to all of its child components.

```tsx
import React from "react"
import { createRoot } from "react-dom/client"
import { Main } from "./main"
import { StoreProvider } from "./store"

const rootElement = document.getElementById("root")

if (!rootElement) {
    throw new Error("Root element not found")
}

createRoot(rootElement).render(
    <StoreProvider>
        <Main />
    </StoreProvider>
)
```

#### API - createStore - useDispatch

Return a function that can be used to dispatch actions that are available for this store. This is useful when it comes down to update the state of the store from a component. It is also useful in custom hooks to define action creators that will dispatch the correct types using a clean API to work with.

```tsx
import { useDispatch } from "../store"

const useUser = () => {
    const dispatch = useDispatch()

    const updateToken = (payload: string) => {
        dispatch({
            type: "USER_TOKEN_UPDATE",
            payload
        })
    }

    return {
        updateToken
    }
}
```

```tsx
import { useDispatch } from "../store"

const useTodos = () => {
    const dispatch = useDispatch()

    const addTodo = (payload: string) => {
        dispatch({
            type: "TODOS_ITEM_ADD",
            payload
        })
    }

    return {
        addTodo
    }
}
```

#### API - createStore - useSelector

Exposes part or all of the state that has been within by the store. This is great to break down the state of a store into a smaller piece, easier to work with and especially useful in custom hooks or components. Note that the state in this case is readonly and cannot be mutated.

```tsx
import { UserState } from "../states/state"
import { useSelector } from "../store"

const useUser = () => {
    const user = useSelector<UserState>(state => state.user)

    return {
        user
    }
}
```

```tsx
import { TodosState } from "../states/state"
import { useSelector } from "../store"

const useTodos = () => {
    const todos = useSelector<TodosState>(state => state.todos)

    return {
        todos
    }
}
```

## Example

See [`example`](./example).

## Changelog

See [`CHANGELOG.md`](./CHANGELOG.md).

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Licence

See [`LICENCE`](./LICENCE).

## Security

See [`SECURITY.md`](./SECURITY.md).

## Code of conduct

See [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md).

## Credits

React icon made by [Icons8](https://icons8.com/license).