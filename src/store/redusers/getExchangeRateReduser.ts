import { GetExchangeRateType } from "../type/cursesType";

type intialStateTupe = {
    exchangeRate: any[]
    loading: boolean
}

const initialState: intialStateTupe = {
    exchangeRate: [],
    loading: true
}

export const getExchangeRate = (state = initialState, action: any) => {
        switch (action.type) {
            case GetExchangeRateType.SET_EXCHANGE_RATE_ENUM:
                return {
                    ...state,
                    exchangeRate: action.exchangeRate
                }
            case GetExchangeRateType.IS_LOADING:
                return {
                    ...state,
                    loading: action.loading
                }
            default:
                return state;
        }
    }
;