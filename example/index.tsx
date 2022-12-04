import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Main } from "./main"
import { StoreProvider } from "./store"

const rootElement = document.getElementById("root")

if (!(rootElement instanceof HTMLDivElement)) {
    throw new Error("Root not found")
}

const root = createRoot(rootElement)

root.render(
    <BrowserRouter>
        <StoreProvider>
            <Main />
        </StoreProvider>
    </BrowserRouter>
)