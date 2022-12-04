import React, { Fragment, useContext, useEffect } from "react"
import { createRoot } from "react-dom/client"
import { act } from "react-dom/test-utils"
import { combineReducers, createStore } from "../sources"

// @ts-ignore
global.IS_REACT_ACT_ENVIRONMENT = true

interface State {
    first: string
    second: string
}

type Action = 
    | { type: "FIRST", payload: string }
    | { type: "SECOND", payload: string }

let container: Element | null

beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
})

afterEach(() => {
    if (container !== null) {
        container.remove()
        container = null
    }
})

describe("@aminnairi/react-store", () => {
    describe("combineReducers", () => {
        it("should combine reducers", () => {
            const firstReducer = (state: State, action: Action): State => {
                switch (action.type) {
                    case "FIRST":
                        return {
                            ...state,
                            first: action.payload
                        }

                    default:
                        return state
                }
            }

            const secondReducer = (state: State, action: Action): State => {
                switch (action.type) {
                    case "SECOND":
                        return {
                            ...state,
                            second: action.payload
                        }

                    default:
                        return state
                }
            }

            const reducer = combineReducers([
                firstReducer,
                secondReducer
            ])

            const firstState = reducer({ first: "first", second: "second" }, { type: "FIRST", payload: "FIRST" })
            const secondState = reducer(firstState, { type: "SECOND", payload: "SECOND" })

            expect(firstState).toEqual({ first: "FIRST", second: "second" })
            expect(secondState).toEqual({ first: "FIRST", second: "SECOND" })
        })
    })

    describe("StoreProvider", () => {
        it("should return a working provider & context", () => {
            const { StoreProvider, StoreContext } = createStore<State, Action>({
                initialState: {
                    first: "first",
                    second: "second"
                },
                reducer: (state, action) => {
                    switch (action.type) {
                        case "FIRST":
                            return {
                                ...state,
                                first: action.payload
                            }

                        case "SECOND":
                            return {
                                ...state,
                                second: action.payload
                            }

                        default:
                            return state
                    }
                }
            })

            const Main = () => {
                const { state, dispatch } = useContext(StoreContext)

                useEffect(() => {
                    dispatch({
                        type: "FIRST",
                        payload: "FIRST"
                    })
                }, [])

                return (
                    <Fragment>
                        <p>{state.first}</p>
                        <p>{state.second}</p>
                    </Fragment>
                )
            }

            if (container === null) {
                return fail("Container is null")
            }

            act(() => {
                if (container === null) {
                    return fail("Container is null")
                }

                createRoot(container).render(
                    <StoreProvider>
                        <Main />
                    </StoreProvider>,
                )
            })

            expect(container.innerHTML).toEqual("<p>FIRST</p><p>second</p>")
        })
    })
})