import {AppDispatch} from "../stote";
import {ExchangeRateServer} from "../api/getCurse";
import {getExchangeReducerSlise} from "../redusers/getExchangeRateSlise";


export const ExchangeRateAction = () => async (dispatch: AppDispatch) => {
    try{
        dispatch(getExchangeReducerSlise.actions.getExchangeReducerFetching())
        let response = await ExchangeRateServer.getExchangeRate()
        dispatch(getExchangeReducerSlise.actions.getExchangeReducerSucces(response.data))
    } catch (e: any) {
        dispatch(getExchangeReducerSlise.actions.getExchangeReducerError(e.message))
    }
}