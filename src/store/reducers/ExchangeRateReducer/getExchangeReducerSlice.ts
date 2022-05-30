import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetshExchangeRateAction} from "../../action";
import {initialState} from "./initialState"

export const getExchangeReducerSlice = createSlice({
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
export default getExchangeReducerSlice.reducer