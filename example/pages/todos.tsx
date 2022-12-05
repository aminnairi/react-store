import React, { Fragment } from "react"
import { TodosForm } from "../components/todos-form"
import { TodosList } from "../components/todos-list"

export const TodosPage = () => {
    return (
        <Fragment>
            <h1>Todos</h1>
            <TodosForm />
            <TodosList />
        </Fragment>
    )
}