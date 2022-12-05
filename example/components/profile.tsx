import React, { Fragment, memo } from "react"
import { ProfileEmail } from "./profile-email"

export const Profile = memo(() => {
    return (
        <Fragment>
            <h1>Profile</h1>
            <ProfileEmail />
        </Fragment>
    )
})