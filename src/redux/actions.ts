import { createAction } from '@reduxjs/toolkit';
import { UserType } from '../types/user';
import { PostType } from '../types/post';

export const setClicked = createAction('setClicked',
  (isClicked: boolean) => ({ payload: isClicked }));

export const setUserId = createAction('setUserId',
  (id: number) => ({ payload: id }));

export const setClickedBackBtn = createAction('setClickedBackBtn',
  (isClickedBackBtn: boolean) => ({ payload: isClickedBackBtn }));

export const fetchUsers = createAction('fetchUsers',
  (users: UserType[]) => ({ payload: users }));

export const fetchPosts = createAction('fetchPosts',
  (posts: PostType[]) => ({payload: posts}));

export const setWelcomed = createAction('setWelcomed',
  (isWelcomed: boolean) => ({payload: isWelcomed}));

export const setVisible = createAction('setVisible',
  (isVisible: boolean) => ({payload: isVisible}));
