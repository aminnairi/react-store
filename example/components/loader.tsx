import React, { Fragment, memo } from "react"

export const Loader = memo(() => {
    return (
        <Fragment>
            <h1>Loading</h1>
            <p>Please wait while your informations are loading...</p>
        </Fragment>
    )
})