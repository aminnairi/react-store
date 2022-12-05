import React, { Fragment } from "react"
import { useTodos } from "../hooks/todos"
import { preventDefault, withChecked, withValue } from "../utilities/form"

export const TodosPage = () => {
    const {
        todo,
        items,
        updateTodoDone,
        updateTodoName,
        addTodoItem,
        removeTodoByIndex,
        updateTodoItemDoneByIndex,
        updateTodoItemNameByIndex
    } = useTodos()

    return (
        <Fragment>
            <h1>Todos</h1>
            <form onSubmit={preventDefault(addTodoItem)}>
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
                <button type="submit">Add</button>
            </form>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={item.done}
                            onChange={withChecked(updateTodoItemDoneByIndex(index))} />
                        <input
                            type="text"
                            value={item.name}
                            onChange={withValue(updateTodoItemNameByIndex(index))} />
                        <button onClick={removeTodoByIndex(index)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}