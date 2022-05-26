import React, {useEffect} from 'react';
import {Header} from "./components/Header/Header";
import {AppRouter} from "./router/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import {useAppDispatch} from "./hooks/useRdex";
import { fetshExchangeRateAction} from "./store/action/ActionCreata";

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

  *,
  a,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: calc((90vw - 470px) / (1980 - 470) * (16 - 10) + 25px);
    text-decoration: none;
  }
`

function App() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetshExchangeRateAction())
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Global/>
            <Header/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
