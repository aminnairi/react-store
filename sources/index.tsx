import React, { ReactNode, Reducer, useReducer, createContext, Dispatch, useContext, useMemo } from "react"

export type DeepReadonly<Type> =
    Type extends Array<infer Item>
        ? DeepReadonlyArray<Item>
        : Type extends object
            ? DeepReadonlyObject<Type>
            : Readonly<Type>

export type DeepReadonlyArray<Type> = ReadonlyArray<DeepReadonly<Type>>

export type DeepReadonlyObject<Target> = {
    readonly [Key in keyof Target]: DeepReadonly<Target[Key]>
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

export const combineReducers = <State, Action>(reducers: Array<Reducer<State, Action>>) => {
    const reducer: Reducer<State, Action> = (state, action) => {
        return reducers.reduce((previousState, reducer) => reducer(previousState, action), state)
    }

    return reducer
}

export const createReducer = <State, Action>(reducer: (state: DeepReadonly<State>, action: DeepReadonly<Action>) => DeepReadonly<State>) => reducer

export const createStore = <State, Action>({ initialState, reducer }: CreateStoreOptions<State, Action>) => {
    const StoreContext = createContext<StoreContextInterface<State, Action>>({
        state: initialState,
        dispatch: () => { }
    })

    const StoreProvider = ({ children }: StoreProviderProps) => {

        const [state, dispatch] = useReducer(reducer, initialState)

        const value = useMemo(() => ({state, dispatch}), [state, dispatch])

        return (
            <StoreContext.Provider value={value}>
                {children}
            </StoreContext.Provider>
        )
    }

    const useDispatch = () => useContext(StoreContext).dispatch

    const useSelector = <NewState,>(selector: (state: DeepReadonly<State>) => NewState) => selector(useContext(StoreContext).state as DeepReadonly<State>)

    return {
        StoreProvider,
        useDispatch,
        useSelector
    }
}