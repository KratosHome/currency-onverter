import React from 'react';
import {Header} from "./components/Header/Header";
import {AppRouter} from "./router/AppRouter";
import {BrowserRouter} from "react-router-dom";
import "./Ap.css"

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
