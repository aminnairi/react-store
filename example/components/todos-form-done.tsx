import React, { memo } from "react"
import { useTodos } from "../hooks/todos"
import { withChecked } from "../utilities/form"

export const TodosFormDone = memo(() => {
    const { todo, updateTodoDone } = useTodos()

    return (
        <div>
            <label htmlFor="done">
                Done
            </label>
            <input
                id="done"
                type="checkbox"
                checked={todo.done}
                onChange={withChecked(updateTodoDone)} />
        </div>
    )
})