import React, { Fragment, memo } from "react"

export const Error = memo(() => {
    return (
        <Fragment>
            <h1>Error</h1>
            <p>An error occurred, please try again later</p>
        </Fragment>
    )
})