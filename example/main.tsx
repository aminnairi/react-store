import React, { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import { Header } from "./components/header"
import { HomePage } from "./pages/home"
import { NotFoundPage } from "./pages/not-found"
import { ProfilePage } from "./pages/profile"
import { TodosPage } from "./pages/todos"

export const Main = () => {
    return (
        <Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/todos" element={<TodosPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Fragment>
    )
}