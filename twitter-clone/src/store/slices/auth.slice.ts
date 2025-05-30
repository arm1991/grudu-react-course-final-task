import { createSlice } from '@reduxjs/toolkit';

import type { IUser } from '@/interfaces';
import type { RootState } from '../types';

type AuthSliceState = { user: IUser | null; isAuth: boolean };

const initialState: AuthSliceState = { user: null, isAuth: false };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      return { ...state, isAuth: true, user: payload };
    },
    removeUser() {
      return { isAuth: false, user: null, isError: false, errorMessage: '' };
    },
    removeAuthError(state) {
      return { ...state, isError: false, errorMessage: '' };
    },
  },
});

export const { setUser, removeUser, removeAuthError } = authSlice.actions;

export const authSelector = (store: RootState) => store.auth;

export const isAuth = (store: RootState['auth']): store is RootState['auth'] & { user: IUser } =>
  store.isAuth === true;

export default authSlice.reducer;
