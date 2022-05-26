import {combineReducers, configureStore} from "@reduxjs/toolkit";
import getExchangeReduserSlise from "./redusers/getExchangeRateSlise";


const rootReducer = combineReducers({
    getExchangeReduserSlise
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]