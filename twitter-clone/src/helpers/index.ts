import type { ITweet, IUser } from '@/interfaces/';
import type { RootState } from '@/store/types';

export const isAuthenticated = (user: RootState['auth']['user']): user is IUser => {
  if (localStorage.getItem('token')) {
    return true;
  }
  return false;
};

export const getInitialsFromFullName = (fullname: string): string => {
  return fullname
    .split(' ')
    .map((e) => e.slice(0, 1))
    .join('')
    .toUpperCase();
};

export const getRandomId = (): string => {
  return `${Math.random().toString(36).substring(2, 9)}`;
};

export const filterTweetsByUserId = (data: ITweet[], userId?: string) => {
  if (userId) {
    return data.filter((tweet) => tweet.author_id === userId);
  }

  return data;
};
