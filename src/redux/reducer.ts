import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import { fetchPosts, fetchUsers, setClicked, setClickedBackBtn, setUserId, setVisible, setWelcomed } from './actions';
import { UserType } from '../types/user';
import { PostType } from '../types/post';

type InitialStateType = {
  isClicked: boolean;
  id: number;
  isClickedBackBtn: boolean;
  users: UserType[];
  posts: PostType[];
  isWelcomed: boolean;
  isVisible: boolean;
}

const initialState: InitialStateType = {
  isClicked: false,
  id: 0,
  isClickedBackBtn: false,
  users: [],
  posts: [],
  isWelcomed: false,
  isVisible: false,
};

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
    .addCase(fetchUsers, (state, action: PayloadAction<UserType[]>) => {
      state.users = action.payload;
    })
    .addCase(fetchPosts, (state, action: PayloadAction<PostType[]>) => {
      state.posts = action.payload;
    })
    .addCase(setWelcomed, (state, action: PayloadAction<boolean>) => {
      state.isWelcomed = action.payload;
    })
    .addCase(setVisible, (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    });
});
