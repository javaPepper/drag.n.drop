import { createAction } from "@reduxjs/toolkit";

export const setClicked = createAction('setClicked',
(isClicked: boolean) => ({payload: isClicked}));

export const setUserId = createAction('setUserId',
(id: number) => ({payload: id}));