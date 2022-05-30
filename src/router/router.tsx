import {ExchangeRatePage} from "../pages";
import {MainPage} from "../pages";

export const ProviderRouter: any[] = [
    {path: "/", component: <MainPage/>},
    {path: "/converter", component: <ExchangeRatePage/>}
];
