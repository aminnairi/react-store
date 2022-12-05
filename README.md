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

```tsx
export interface State {
    user: {
        token: string
    },
    todos: Array<string>
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

```tsx
import { createStore } from "@aminnairi/react-store"

import { State, initialState } from "./states/state"
import { Action } from "./actions/action"
import { reducer } from "./reducers/reducer"

export const { StoreProvider, StoreContext, useStore } = createStore<State, Action>({
    initialState
    reducer
})
```

#### API - createStore - StoreProvider

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

#### API - createStore - StoreContext

```tsx
import { useContext } from "react"

import { StoreContext } from "../store"

const useUser = () => {
    const { state, dispatch } = useContext(StoreContext)

    const updateToken = (payload: string) => {
        dispatch({
            type: "USER_TOKEN_UPDATE",
            payload
        })
    }

    return {
        token: state.user.token,
        updateToken
    }
}
```

```tsx
import { useContext } from "react"

import { StoreContext } from "../store"

const useTodos = () => {
    const { state, dispatch } = useContext(StoreContext)

    const addTodo = (payload: string) => {
        dispatch({
            type: "TODOS_ITEM_ADD",
            payload
        })
    }

    return {
        todos: state.todos,
        addTodo
    }
}
```

#### API - createStore - useStore

```tsx
import { useStore } from "../store"

const useUser = () => {
    const { state, dispatch } = useStore()

    const updateToken = (payload: string) => {
        dispatch({
            type: "USER_TOKEN_UPDATE",
            payload
        })
    }

    return {
        token: state.user.token,
        updateToken
    }
}
```

```tsx
import { useStore } from "../store"

const useTodos = () => {
    const { state, dispatch } = useStore()

    const addTodo = (payload: string) => {
        dispatch({
            type: "TODOS_ITEM_ADD",
            payload
        })
    }

    return {
        todos: state.todos,
        addTodo
    }
}
```

## Example

See [`example`](./example).

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