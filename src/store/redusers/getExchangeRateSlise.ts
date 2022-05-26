import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetshExchangeRateAction} from "../action/ActionCreata";
import {ExchangeRateStateType} from "./ExchangeRateStateType";

const initialState: ExchangeRateStateType = {
    exchangeRate: [],
    loading: true,
    errors: "",
    count: 0
}

export const getExchangeReducerSlise = createSlice({
    name: "getExchangeRate",
    initialState,
    reducers: {},
    extraReducers: {
        [fetshExchangeRateAction.fulfilled.type]: (state, action: PayloadAction<any[]>) => {
            state.loading = false
            state.errors = ""
            state.exchangeRate = action.payload
        },
        [fetshExchangeRateAction.pending.type]: (state) => {
            state.loading = true
        },
        [fetshExchangeRateAction.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.errors = action.payload
        },
    }
})
export default getExchangeReducerSlise.reducer