import {Route, Routes} from "react-router";
import {ProviderRouter} from "./router";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                {ProviderRouter.map((rote) => (
                    <Route key={rote.path} path={rote.path} element={rote.component} />
                ))}
            </Routes>
        </>
    );
};

