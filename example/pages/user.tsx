import React, { Fragment } from "react"
import { useUser } from "../hooks/user"

export const UserPage = () => {
    const { email, role, updateRole, updateEmail } = useUser()

    return (
        <Fragment>
            <h1>User</h1>
            <div>
                <label htmlFor="role">Role</label>
                <input
                    id="role"
                    type="text"
                    value={role}
                    onChange={({target: {value}}) => updateRole(value)} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={({target: {value}}) => updateEmail(value)} />
            </div>
        </Fragment>
    )
}