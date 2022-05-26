import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Header} from "./ReExports";
import {AppRouter} from "./ReExports";
import {useAppDispatch} from "./ReExports";
import {fetshExchangeRateAction} from "./ReExports";
import {GlobalCss} from "./ReExports";

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
