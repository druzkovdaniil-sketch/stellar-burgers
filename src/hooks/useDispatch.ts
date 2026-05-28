import { useDispatch as useDispatchRedux } from 'react-redux';
import { AppDispatch } from '../services/store';

export const useDispatch = () => useDispatchRedux<AppDispatch>();
