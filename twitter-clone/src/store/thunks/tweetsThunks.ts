import { isAxiosError } from 'axios';
import { setError, setTweets } from '@/store/slices';
import { filterTweetsByUserId } from '@/helpers';
import { TweetService } from '@/services';

import type { ITweet } from '@/interfaces';
import type { AppDispatch } from '../types';

export const getTweets = (userId?: string) => async (dispatch: AppDispatch) => {
  try {
    const data = await TweetService.getTweets();

    dispatch(setTweets(filterTweetsByUserId(data, userId)));
  } catch (e) {
    if (!isAxiosError(e)) {
      setError((e as Error).message);
      return;
    }

    if (e.response?.data) {
      const errorMessage = e.response.data;

      dispatch(setError(errorMessage));
    } else {
      dispatch(setError('Unknown error occurred'));
    }
  }
};

export const deleteTweet = (userId: string, tweetId: string) => async (dispatch: AppDispatch) => {
  try {
    await TweetService.deleteTweet(userId, tweetId);
    const data = await TweetService.getTweets();

    dispatch(setTweets(filterTweetsByUserId(data, userId)));
  } catch (e) {
    if (!isAxiosError(e)) {
      setError((e as Error).message);
      return;
    }

    if (e.response?.data) {
      const errorMessage = e.response.data;

      dispatch(setError(errorMessage));
    } else {
      dispatch(setError('Unknown error occurred'));
    }
  }
};

export const addTweet = (tweet: ITweet) => async (dispatch: AppDispatch) => {
  try {
    const data = await TweetService.addTweet(tweet);

    dispatch(setTweets(data));
  } catch (e) {
    if (!isAxiosError(e)) {
      setError((e as Error).message);
      return;
    }

    if (e.response?.data) {
      const errorMessage = e.response.data;

      dispatch(setError(errorMessage));
    } else {
      dispatch(setError('Unknown error occurred'));
    }
  } finally {
    dispatch(getTweets());
  }
};
