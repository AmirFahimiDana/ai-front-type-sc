// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import historyReducer from './slice/history'
export const store = configureStore({
    reducer: {
        historyReducer
    },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;