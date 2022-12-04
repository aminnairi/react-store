# @aminnairi/react-store

[![NPM](https://badgen.net/npm/v/@aminnairi/react-store)](https://www.npmjs.com/package/@aminnairi/react-store)
[![Unit Test](https://github.com/aminnairi/react-store/actions/workflows/test.yaml/badge.svg)](https://github.com/aminnairi/react-store/actions/workflows/test.yaml) ![Size](https://badgen.net/bundlephobia/minzip/@aminnairi/react-store) ![Vulnerabilities](https://badgen.net/snyk/aminnairi/react-store) 

Simple yet powerful store manager written in TypeScript on top of React's context & reducer

## Requirements

- Node
- NPM

## Installation

```bash
npm install @aminnairi/react-store
```

## API

### combineReducers

```typescript
import { combineReducers } from "@aminnairi/react-store"

// State

interface State {
    user: {
        email: string
    },
    counter: {
        value: number
    }
}

// User actions

interface UserUpdateEmailAction {
    type: "USER_EMAIL_UPDATE"
    payload: string
}

type UserAction =
    | UserEmailUpdateAction

// Counter actions

interface CounterValueIncrementAction {
    type: "COUNTER_VALUE_INCREMENT"
    payload: null
}

interface CounterValueDecrementAction {
    type: "COUNTER_VALUE_INCREMENT"
    payload: null
}

type CounterAction =
    | CounterValueIncrementAction
    | CounterValueDecrementAction

// Combined actions

type Action =
    | UserAction
    | CounterAction

// User reducer

const userReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "USER_EMAIL_UPDATE"
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.payload
                }
            }

        default:
            return state
    }
}

// Counter reducer

const counterReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "COUNTER_VALUE_INCREMENT"
            return {
                ...state,
                counter: {
                    ...state.counter,
                    value: state.counter.value + 1
                }
            }

        case "COUNTER_VALUE_DECREMENT"
            return {
                ...state,
                counter: {
                    ...state.counter,
                    value: state.counter.value - 1
                }
            }

        default:
            return state
    }
}

// Combined reducers

const reducer = combineReducers([
    userReducer,
    counterReducer
])
```

### createStore

```tsx
import React, { useContext } from "react"
import { createRoot } from "react-dom/client"
import { createStore } from "@aminnairi/react-store"

interface State {
    counter: number
}

interface Action {
    type: "INCREMENT"
    payload: null
}

const { StoreProvider, StoreContext } = createStore({
    initialState: {
        counter: 0
    },
    reducer: (state, action) => {
        switch () {
            case "INCREMENT":
                return {
                    ...state,
                    counter: state.counter + 1
                }

            default:
                return state
        }
    }
})

const Main = () => {
    const { state, dispatch } = useContext(StoreContext)

    return (
        <button onClick={() => dispatch({type: "INCREMENT", payload: null})}>
            {state.counter}
        </button>
    )
}

const rootElement = document.createElement("root")

if (!rootElement) {
    throw new Error("Root element not found")
}

createRoot(rootElement).render(
    <StoreProvider>
        <Main />
    </StoreProvider>
)
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