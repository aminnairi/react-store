import React, { Fragment } from "react"
import { Route, Routes } from "react-router"
import { Header } from "./components/header"
import { HomePage } from "./pages/home"
import { NotFoundPage } from "./pages/not-found"
import { UserPage } from "./pages/user"

export const Main = () => {
    return (
        <Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/users" element={<UserPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Fragment>
    )
}