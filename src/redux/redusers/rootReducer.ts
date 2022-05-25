import {combineReducers} from 'redux';
import { getExchangeRate } from './getExchangeRateReduser';


export const rootReducer = combineReducers({
    getExchangeRate: getExchangeRate
})

export type rootState = ReturnType<typeof rootReducer>