// src/features/users/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../store';

export interface History {
    id: number;
    title: string;
    query: string;
}

const initialState: Array<History> = [

]


export const historySlice = createSlice({
    name: "histories",
    initialState,
    reducers: {
        addHistory: (state, action: PayloadAction<History>) => {

            // const item: History = {
            //     id: parseInt(state[state.length]) + 1,
            //     title: action.payload
            // }
            state.push(action.payload);
        },
    },
});
export const { addHistory } =
    historySlice.actions;
export const historySelector = (state: RootState) => state.historyReducer;
export default historySlice.reducer;