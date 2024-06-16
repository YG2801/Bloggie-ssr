import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

import { Provider } from "react-redux";
import { createStore } from "./store/store.js";

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = createStore(preloadedState);

ReactDOM.hydrateRoot(
    document.getElementById("root"),
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);
