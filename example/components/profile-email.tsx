import React, { memo } from "react"
import { useUser } from "../hooks/user"
import { withValue } from "../utilities/form"

export const ProfileEmail = memo(() => {
    const { email, updateEmail } = useUser()

    return (
        <input
            type="email"
            value={email}
            onChange={withValue(updateEmail)} />
    )
})