import {ConverterPage} from "../pages/ConverterPage/ConverterPage";
import {MainPage} from "../pages/MainPage/MainPage";


export const ProviderRouter: any[] = [
    {path: "/", component: <MainPage />},
    {path: "/converter", component: <ConverterPage />}
];
