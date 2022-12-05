import React from "react"
import { useUser } from "../hooks/user"
import { withValue } from "../utilities/form"

export const ProfileEmail = () => {
    const { email, updateEmail } = useUser()

    return (
        <input
            type="email"
            value={email}
            onChange={withValue(updateEmail)} />
    )
}