import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {rootState} from "../store/redusers/rootReducer";


export const useTypeSelector: TypedUseSelectorHook<rootState> = useSelector
