import React from "react"
import { useTodos } from "../hooks/todos"
import { withValue } from "../utilities/form"

export const TodosFormName = () => {
    const { todo, updateTodoName } = useTodos()

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
}