import {ExchangeRateServer} from "../../ReExports";
import {createAsyncThunk} from "@reduxjs/toolkit";

/*
export const ExchangeRateAction = () => async (dispatch: AppDispatch) => {
    try{
        dispatch(getExchangeReducerSlise.actions.getExchangeReducerFetching())
        let response = await ExchangeRateServer.getExchangeRate()
        dispatch(getExchangeReducerSlise.actions.getExchangeReducerSucces(response.data))
    } catch (e: any) {
        dispatch(getExchangeReducerSlise.actions.getExchangeReducerError(e.message))
    }
}
*/

export const fetshExchangeRateAction = createAsyncThunk(
    'exchange',
    async (_, thunkAPI) => {
        try {
            let response = await ExchangeRateServer.getExchangeRate()
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Не вдалося загрузити")
        }
    }
)