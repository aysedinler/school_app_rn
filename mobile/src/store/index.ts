
import { configureStore } from '@reduxjs/toolkit';
import { studentsApi } from '../services/studentsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    [studentsApi.reducerPath]: studentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
