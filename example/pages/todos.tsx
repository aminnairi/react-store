import React, { Fragment, memo } from "react"
import { TodosForm } from "../components/todos-form"
import { TodosList } from "../components/todos-list"

export const TodosPage = memo(() => {
    return (
        <Fragment>
            <h1>Todos</h1>
            <TodosForm />
            <TodosList />
        </Fragment>
    )
})