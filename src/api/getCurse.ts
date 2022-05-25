import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
})

export const ExchangeRateServer ={
    getExchangeRate(){
        return  instance.get("")
    }
}