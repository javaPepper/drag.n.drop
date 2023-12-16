import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { setClicked, setClickedBackBtn, setUserId } from "./actions";

type InitialStateType = {
    isClicked: boolean,
    id: number,
    isClickedBackBtn: boolean,
}

const initialState: InitialStateType = {
    isClicked: false,
    id: 0,
    isClickedBackBtn: false,
}

export const postReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setClicked, (state, action: PayloadAction<boolean>) => {
            state.isClicked = action.payload;
        })
        .addCase(setUserId, (state, action: PayloadAction<number>) => {
            state.id = action.payload;
        })
        .addCase(setClickedBackBtn, (state, action: PayloadAction<boolean>) => {
            state.isClickedBackBtn = action.payload;
        })
})