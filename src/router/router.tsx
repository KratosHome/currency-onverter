import {ExchangeRatePage} from "../pages/ExchangeRate/ExchangeRatePage";
import {MainPage} from "../pages/MainPage/MainPage";


export const ProviderRouter: any[] = [
    {path: "/", component: <MainPage />},
    {path: "/converter", component: <ExchangeRatePage />}
];
