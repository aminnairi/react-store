import React from "react"
import { Link } from "react-router-dom"

export const Header = () => {
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
}