import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { StoreProvider } from "./store"
import { Main } from "./main"

const rootElement = document.getElementById("root")

if (!(rootElement instanceof HTMLDivElement)) {
    throw new Error("Root not found")
}

createRoot(rootElement).render(
    <BrowserRouter>
        <StoreProvider>
            <Main />
        </StoreProvider>
    </BrowserRouter>
)