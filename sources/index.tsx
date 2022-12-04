import React, { ReactNode, Reducer, useReducer, createContext, Dispatch } from "react"

export const combineReducers = <State, Action>(reducers: Array<Reducer<State, Action>>) => {
    const reducer: Reducer<State, Action> = (state, action) => {
        return reducers.reduce((previousState, reducer) => reducer(previousState, action), state)
    }

    return reducer
}

export interface CreateStoreOptions<State, Action> {
    initialState: State,
    reducer: Reducer<State, Action>
}

export interface StoreProviderProps {
    children: ReactNode
}

export interface StoreContextInterface<State, Action> {
    state: State
    dispatch: Dispatch<Action>
}

export const createStore = <State, Action>({ initialState, reducer }: CreateStoreOptions<State, Action>) => {
    const StoreContext = createContext<StoreContextInterface<State, Action>>({
        state: initialState,
        dispatch: () => { }
    })

    const StoreProvider = ({ children }: StoreProviderProps) => {

        const [state, dispatch] = useReducer(reducer, initialState)

        return (
            <StoreContext.Provider value={{ state, dispatch }}>
                {children}
            </StoreContext.Provider>
        )
    }

    return {
        StoreProvider,
        StoreContext
    }
}
