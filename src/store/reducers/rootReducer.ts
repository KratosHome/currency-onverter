import {combineReducers} from "@reduxjs/toolkit";
import getExchangeReducerSlice from "./ExchangeRateReducer/getExchangeReducerSlice";

export const rootReducer = combineReducers({
    getExchangeReducerSlice
})