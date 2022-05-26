import {rootReducer, AppStore} from "../ReExports";


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore["dispatch"]