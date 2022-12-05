import React, { Fragment } from "react"
import { useTodos } from "../hooks/todos"
import { Todo } from "../states/todos"
import { withChecked, withValue } from "../utilities/form"

interface TodosListItemProps {
    item: Todo
    index: number
}

export const TodosListItem = ({ item, index }: TodosListItemProps) => {
    const { updateTodoItemDoneByIndex, updateTodoItemNameByIndex, removeTodoItem } = useTodos()

    return (
        <Fragment>
            <input
                type="checkbox"
                checked={item.done}
                onChange={withChecked(updateTodoItemDoneByIndex(index))} />
            <input
                type="text"
                value={item.name}
                onChange={withValue(updateTodoItemNameByIndex(index))} />
            <button onClick={removeTodoItem(index)}>
                Remove
            </button>

        </Fragment>
    )
}