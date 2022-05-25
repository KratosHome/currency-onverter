import {GetExchangeRateType} from "../type/cursesType";
import {ExchangeRateServer} from "../api/getCurse";
import {Dispatch} from 'redux';

export const setExchangeRateAction = (exchangeRate: any) => {
    return {
        type: GetExchangeRateType.SET_EXCHANGE_RATE_ENUM,
        exchangeRate: exchangeRate
    }
}

export const setLoading = (loading: boolean) => {
    return {
        type: GetExchangeRateType.IS_LOADING,
        loading: loading
    }
}

export const getExchangeRateAction = () => async (dispatch: Dispatch) => {
    dispatch(setLoading(true))
    let response = await ExchangeRateServer.getExchangeRate()
    dispatch(setExchangeRateAction(response.data));
    dispatch(setLoading(false))
}
