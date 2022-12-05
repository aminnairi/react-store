import React, { memo } from "react"
import { useTodos } from "../hooks/todos"
import { TodosListItem } from "./todos-list-item"

export const TodosList = memo(() => {
    const { items } = useTodos()

    if (items.length === 0) {
        return (
            <p>There are currently no items in your todos list.</p>
        )
    }

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <TodosListItem item={item} index={index} />
                </li>
            ))}
        </ul>
    )
})