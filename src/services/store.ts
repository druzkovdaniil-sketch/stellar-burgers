import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useDispatchRedux, useSelector as useSelectorRedux, TypedUseSelectorHook } from 'react-redux';
import ingredientsReducer from './slices/ingredients-slice';
import constructorReducer from './slices/constructor-slice';

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    constructor: constructorReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Временно отключаем проверку
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useDispatchRedux<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRedux;
