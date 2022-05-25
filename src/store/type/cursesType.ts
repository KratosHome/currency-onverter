export enum GetExchangeRateType {
    SET_EXCHANGE_RATE_ENUM = "SET_EXCHANGE_RATE_ENUM",
    IS_LOADING = "IS_LOADING"
}

type setExchangeRateType = {
    type: GetExchangeRateType.SET_EXCHANGE_RATE_ENUM;
    curses: any[]
}

type serIsLoading = {
    type: GetExchangeRateType.IS_LOADING;
    loading: boolean
}

export type productType = setExchangeRateType | serIsLoading