import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {rootState} from "../redux/redusers/rootReducer";


export const useTypeSelector: TypedUseSelectorHook<rootState> = useSelector
