// src/features/users/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../store';

export interface PopupValue {
    query: any,
    question: any,
    isOpen: boolean
}


const initialState: PopupValue = {
    query: "",
    question: "",
    isOpen: false,

}

export const popupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        openPopup: (state, action: PayloadAction<PopupValue>) => {
            state.isOpen = true;
            state.query = action.payload.query;
            state.question = action.payload.question;
        },
        closePopup: (state) => {
            state.isOpen = false;
            state.query = '';
            state.question = '';
        },

    },
});
export const { openPopup, closePopup } =
    popupSlice.actions;
export const popupSelector = (state: RootState) => state.popupReducer;
export default popupSlice.reducer;