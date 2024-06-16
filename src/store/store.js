import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

export const createStore = (preloadedState) => {
    return configureStore({
        reducer: {
            auth: authReducer,
        },
        preloadedState,
    });
};
