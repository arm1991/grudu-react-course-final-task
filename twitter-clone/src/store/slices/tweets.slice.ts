import { createSlice } from '@reduxjs/toolkit';

import type { ITweet } from '@/interfaces';
import type { RootState } from '../types';

type TweetSliceInitialState = { data: ITweet[] };

const initialState: TweetSliceInitialState = { data: [] };

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    setTweets(state, { payload }) {
      return { ...state, data: payload };
    },
  },
});

export const { setTweets } = tweetsSlice.actions;

export default tweetsSlice.reducer;

export const tweetsSelector = (store: RootState) => store.tweets.data;
