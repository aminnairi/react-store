import React, { Fragment } from "react"
import { Error } from "../components/error"
import { Loader } from "../components/loader"
import { ProfileEmail } from "../components/profile-email"
import { useUser } from "../hooks/user"

export const ProfilePage = () => {
    const { loading, error } = useUser()

    if (error) {
        return <Error />
    }

    if (loading) {
        return <Loader />
    }

    return (
        <Fragment>
            <h1>Profile</h1>
            <ProfileEmail />
        </Fragment>
    )
}