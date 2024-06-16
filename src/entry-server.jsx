import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import { createStore } from "./store/store.js";

export function render(url, ssrManifest, options) {
    const store = createStore();
    const appHtml = renderToPipeableStream(
        <Provider store={store}>
            <React.StrictMode>
                <StaticRouter location={`/${url}`}>
                    <AppRoutes />
                </StaticRouter>
            </React.StrictMode>
        </Provider>,

        options
    );

    const preloadState = store.getState();
    return {appHtml, preloadState};
}
