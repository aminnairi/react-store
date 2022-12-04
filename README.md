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

### createStore

```tsx
import React, { useContext } from "react"
import { createRoot } from "react-dom/client"
import { createStore } from "@aminnairi/react-store"

// State

interface State {
    counter: number
}

// Action

interface Action {
    type: "INCREMENT"
    payload: null
}

// Initial state

const initialState: State = {
    counter: 0
}

// Reducer

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1
            }

        default:
            return state
    }
}

// Store creation

const { StoreProvider, StoreContext } = createStore<State, Action>({
    initialState,
    reducer
})

// Counter custom hook

const useCounter = () => {
    const { state, dispatch } = useContext(StoreContext)

    const increment = () => {
        dispatch({
            type: "INCREMENT",
            payload: null
        })
    }

    return {
        counter: state.counter,
        increment
    }
}

// Main component

const Main = () => {
    const { counter, increment } = useCounter()

    return (
        <button onClick={increment}>
            {counter}
        </button>
    )
}

// React initialization

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

[Try it on StackBlitz](https://stackblitz.com/edit/aminnairi-react-store?file=index.tsx)

### combineReducers

```tsx
import * as React from 'react';
import { Fragment, ChangeEventHandler, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, combineReducers } from '@aminnairi/react-store';

// State

interface State {
  user: {
    email: string;
  };
  counter: {
    value: number;
  };
}

const initialState: State = {
  user: {
    email: 'johndoe@domain.com',
  },
  counter: {
    value: 0,
  },
};

// User actions

interface UserEmailUpdateAction {
  type: 'USER_EMAIL_UPDATE';
  payload: string;
}

type UserAction = UserEmailUpdateAction;

// Counter actions

interface CounterValueIncrementAction {
  type: 'COUNTER_VALUE_INCREMENT';
  payload: null;
}

interface CounterValueDecrementAction {
  type: 'COUNTER_VALUE_DECREMENT';
  payload: null;
}

type CounterAction = CounterValueIncrementAction | CounterValueDecrementAction;

// Combined actions

type Action = UserAction | CounterAction;

// User reducer

const userReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'USER_EMAIL_UPDATE':
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload,
        },
      };

    default:
      return state;
  }
};

// Counter reducer

const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'COUNTER_VALUE_INCREMENT':
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value + 1,
        },
      };

    case 'COUNTER_VALUE_DECREMENT':
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value - 1,
        },
      };

    default:
      return state;
  }
};

// Combined reducers

const reducer = combineReducers<State, Action>([userReducer, counterReducer]);

// Store creation

const { StoreProvider, StoreContext } = createStore({
  initialState,
  reducer,
});

// User custom hook

const useUser = () => {
  const { state, dispatch } = useContext(StoreContext);

  const updateEmail = (email: string) => {
    dispatch({
      type: 'USER_EMAIL_UPDATE',
      payload: email,
    });
  };

  return {
    email: state.user.email,
    updateEmail,
  };
};

// Counter custom hook

const useCounter = () => {
  const { state, dispatch } = useContext(StoreContext);

  const increment = () => {
    dispatch({
      type: 'COUNTER_VALUE_INCREMENT',
      payload: null,
    });
  };

  const decrement = () => {
    dispatch({
      type: 'COUNTER_VALUE_DECREMENT',
      payload: null,
    });
  };

  return {
    counter: state.counter.value,
    increment,
    decrement,
  };
};

// Utilities

const withValue = (callback: (value: string) => void) => {
  const handler: ChangeEventHandler<HTMLInputElement> = (event) => {
    callback(event.target.value);
  };

  return handler;
};

// Main component

const Main = () => {
  const { email, updateEmail } = useUser();
  const { counter, increment, decrement } = useCounter();

  return (
    <Fragment>
      <h1>{email}</h1>
      <input value={email} onChange={withValue(updateEmail)} />
      <button onClick={decrement}>Decrement</button>
      <span>Counter: {counter}</span>
      <button onClick={increment}>Increment</button>
    </Fragment>
  );
};

// React initialization

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root not found');
}

createRoot(rootElement).render(
  <StoreProvider>
    <Main />
  </StoreProvider>
);
```

[Try it on StackBlitz](https://stackblitz.com/edit/react-ts-zsyy7b?file=App.tsx)

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