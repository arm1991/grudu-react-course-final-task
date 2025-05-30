import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../types';

type ErrorSliceInitialState = { isError: boolean; errorMessage: string };

const initialState: ErrorSliceInitialState = { isError: false, errorMessage: '' };

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, { payload }) {
      return { ...state, isError: true, errorMessage: payload };
    },

    removeError(state) {
      return { ...state, isError: false, errorMessage: '' };
    },
  },
});

export const { setError, removeError } = errorSlice.actions;

export const errorSelector = (store: RootState): RootState['error'] => store.error;

export default errorSlice.reducer;
