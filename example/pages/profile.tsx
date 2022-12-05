import React, { Fragment } from "react"
import { Error } from "../components/error"
import { Loader } from "../components/loader"
import { useUser } from "../hooks/user"
import { withValue } from "../utilities/form"

export const ProfilePage = () => {
    const { email, loading, error, updateEmail } = useUser()

    if (error) {
        return <Error />
    }

    if (loading) {
        return <Loader />
    }

    return (
        <Fragment>
            <h1>Profile</h1>
            <input
                type="email"
                value={email}
                onChange={withValue(updateEmail)} />
        </Fragment>
    )
}