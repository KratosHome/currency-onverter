import React, {useEffect} from 'react';
import {Header} from "./components/Header/Header";
import {AppRouter} from "./router/AppRouter";
import {BrowserRouter} from "react-router-dom";
import "./Ap.css"
import {useDispatch} from "react-redux";
import {getExchangeRateAction} from "./redux/action/GetExchangeRateAction";

function App() {

    const dispatch = useDispatch()
    useEffect(() => {
        getExchangeRateAction()(dispatch)
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Header/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
