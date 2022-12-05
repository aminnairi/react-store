import React, { memo } from "react"
import { preventDefault } from "../utilities/form"
import { useTodos } from "../hooks/todos"
import { TodosFormName } from "./todos-form-name"
import { TodosFormDone } from "./todos-form-done"

export const TodosForm = memo(() => {
    const { addTodoItem } = useTodos()

    return (
        <form onSubmit={preventDefault(addTodoItem)}>
            <TodosFormName />
            <TodosFormDone />
            <button type="submit">Add</button>
        </form>

    )

})