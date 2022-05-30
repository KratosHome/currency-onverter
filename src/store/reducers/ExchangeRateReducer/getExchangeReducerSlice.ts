import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "./initialState"


export const getExchangeReducerSlice = createSlice({
    name: "getExchangeRate",
    initialState,
    reducers: {
        getExchangeReducerFetching: (state:any) => ({
            ...state,
            loading: true
        }),
        getExchangeReducerSucces: (state:any , action: PayloadAction<any[]>) => ({
            ...state,
            exchangeRate: action.payload,
            loading: false
        }),
        getExchangeReducerError: (state:any , action: PayloadAction<any[]>) => ({
            ...state,
            errors: action.payload,
            loading: false
        }),
    },
})
export default getExchangeReducerSlice.reducer

/*
 state.loading = false;
            state.errors = action.payload

 */