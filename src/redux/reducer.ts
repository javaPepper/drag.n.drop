import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { setClicked, setUserId } from "./actions";

type InitialStateType = {
    isClicked: boolean,
    id: number,
}

const initialState: InitialStateType = {
    isClicked: false,
    id: 0,
}

export const postReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setClicked, (state, action: PayloadAction<boolean>) => {
            state.isClicked = action.payload;
        })
        .addCase(setUserId, (state, action: PayloadAction<number>) => {
            state.id = action.payload;
        })
})