import React, { memo } from "react"
import { useTodos } from "../hooks/todos"
import { withValue } from "../utilities/form"

export const TodosFormName = memo(() => {
    const { todo, updateTodoName } = useTodos()

    console.log("todos-form-name")

    return (
        <div>
            <label htmlFor="name">
                Name
            </label>
            <input
                id="name"
                type="text"
                value={todo.name}
                onChange={withValue(updateTodoName)} />
        </div>
    )
})