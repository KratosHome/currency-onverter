export enum GetExchangeRateType {
    SET_EXCHANGE_RATE_ENUM = "SET_EXCHANGE_RATE_ENUM",
    IS_LOADING = "IS_LOADING"
}

interface setExchangeRateType {
    type: GetExchangeRateType.SET_EXCHANGE_RATE_ENUM;
    curses: any[]
}

interface serIsLoading {
    type: GetExchangeRateType.IS_LOADING;
    loading: boolean
}

export type productType = setExchangeRateType | serIsLoading