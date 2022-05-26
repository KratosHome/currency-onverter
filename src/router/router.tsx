import {ExchangeRatePage} from "../ReExports";
import {MainPage} from "../ReExports";

export const ProviderRouter: any[] = [
    {path: "/", component: <MainPage/>},
    {path: "/converter", component: <ExchangeRatePage/>}
];
