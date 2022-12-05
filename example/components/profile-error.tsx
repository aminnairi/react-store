import React, { Fragment, memo } from "react"

export interface ProfileErrorProps {
    error: any
}

export const ProfileError = memo(({error}: ProfileErrorProps) => {
    return (
        <Fragment>
            <h1>Error</h1>
            <p>An error occurred while loading your profile, please try again later</p>
            <small>{String(error)}</small>
        </Fragment>
    )
})