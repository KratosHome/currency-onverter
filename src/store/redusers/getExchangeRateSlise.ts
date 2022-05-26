import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type ExchangeRateState = {
    exchangeRate: any[]
    loading: boolean
    errors: string
    count: number
}

const initialState: ExchangeRateState = {
    exchangeRate: [],
    loading: true,
    errors: "",
    count: 0
}


export const getExchangeReducerSlise = createSlice({
    name: "getExchangeRate",
    initialState,
    reducers: {
        getExchangeReducerFetching(state){
            state.loading = true
        },
        getExchangeReducerSucces(state, action:  PayloadAction<any[]>){
            state.loading = false
            state.errors = ""
            state.exchangeRate = action.payload
        },
        getExchangeReducerError(state, action: PayloadAction<string>){
            state.loading = false
            state.errors = action.payload
        }
    },
})

export default getExchangeReducerSlise.reducer