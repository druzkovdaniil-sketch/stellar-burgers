import { useSelector as useSelectorRedux, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../services/store';

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRedux;
