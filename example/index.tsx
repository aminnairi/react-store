import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Main } from "./main";
import { StoreProvider } from "./store";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found in the current dom");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StoreProvider>
      <Main />
    </StoreProvider>
  </StrictMode>
);
