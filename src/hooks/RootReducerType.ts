import {rootReducer, AppStore} from "../store/";

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore["dispatch"]