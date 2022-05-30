import {ExchangeRateServer} from "../api";
import {AppDispatch} from "../../hooks/RootReducerType";
import {getExchangeReducerSlice} from "../reducers";


export const fetshExchangeRateAction = () => async (dispatch: AppDispatch) => {
    try{
        dispatch(getExchangeReducerSlice.actions.getExchangeReducerFetching())
        let response = await ExchangeRateServer.getExchangeRate()
        dispatch(getExchangeReducerSlice.actions.getExchangeReducerSucces(response.data))
    } catch (e: any) {
        dispatch(getExchangeReducerSlice.actions.getExchangeReducerError(e.message))
    }
}


