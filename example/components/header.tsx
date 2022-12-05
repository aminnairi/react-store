import React, { memo } from "react"
import { Link } from "react-router-dom"

export const Header = memo(() => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/todos">Todos</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    )
})