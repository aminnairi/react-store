import React, { Fragment, memo } from "react"
import { TodosForm } from "../components/todos-form"
import { TodosList } from "../components/todos-list"
import { Profile } from "../components/profile"

export const TodosPage = memo(() => (
    <Fragment>
        <h1>Todos</h1>
        <TodosForm />
        <TodosList />
    </Fragment>
))