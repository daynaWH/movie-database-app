import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import "./scss/styles.scss";
import AppRouter from "./routers/AppRouter";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AppRouter />
    </StrictMode>
);
