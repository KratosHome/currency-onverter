import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "../ReExports";

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


