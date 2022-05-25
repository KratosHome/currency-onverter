import {combineReducers} from 'redux';
import { getExchangeRate } from './getExchangeRateReduser';


export const rootReducer = combineReducers({
    ExchangeRate: getExchangeRate
})

export type rootState = ReturnType<typeof rootReducer>