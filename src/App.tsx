import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Header} from "./components";
import {AppRouter} from "./router";
import {useAppDispatch} from "./hooks";
import {fetshExchangeRateAction} from "./store";
import {GlobalCss} from "./GlobalCss";

function App() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetshExchangeRateAction())
    }, [dispatch]);

    return (
        <BrowserRouter>
            <GlobalCss/>
            <Header/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
