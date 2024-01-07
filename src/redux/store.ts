// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import historyReducer from './slice/history';
import popupReducer from './slice/popupSlice';

export const store = configureStore({
    reducer: {
        historyReducer,
        popupReducer
    },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;